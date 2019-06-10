import {TelepathicElement} from "../telepathic-element/telepathic-element.js";

export default class TokenTradeElement extends TelepathicElement{
    static describe(){return `An element to provide trading info for tqnext.`};
	constructor(fileName,noshadow,delayRender){
        super(fileName,noshadow,delayRender);
    }

    static get observedAttributes() {
        return ["metamask","inToken","outToken","dAmt","wAmt"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(newValue){
            console.log(`${name} changed from ${oldValue} to ${newValue}`);
            this.update(name,newValue);
        }
    }
    async onReady(pairs,limits){
        console.debug(`${this.constructor.name} entering onReady!`);
        //console.debug("this: ",this);
        await this.reset(pairs,limits);
    }

    async reset(pairs,limits){
        window.app.hide(this.deposit_info_element);
        if(pairs && limits){
            console.debug("pairs: ",pairs);
            console.debug("limits: ",limits);
            this.inTokens = pairs.inTokens;
            this.outTokens = pairs.outTokens;

            this.inTokens.forEach((token)=>{
                token.min_d = limits.min_d[token.symbol];
                token.max_d = limits.max_d[token.symbol];
                token.max_w = limits.max_d[token.symbol];
                token.quotes = limits.quotes[token.symbol];
            });

            this.outTokens.forEach((token)=>{
                token.min_d = limits.min_d[token.symbol];
                token.max_d = limits.max_d[token.symbol];
                token.max_w = limits.max_d[token.symbol];
                token.quotes = limits.quotes[token.symbol];
            });
            this.in_token_element.user_amount.placeholder = "Deposit Amount";
            this.out_token_element.user_amount.placeholder = "Withdrawal Amount";
            this.in_token_element.user_address.placeholder = "Refund Address (optional)";
            this.out_token_element.user_address.placeholder = "Destination Address";
            this.in_token_element.status = "I Have...";
            this.out_token_element.status = "I Want...";
            this.in_token_element.onReady(this,this.inTokens);
            this.out_token_element.onReady(this,this.outTokens);
            //this.deposit_element.onReady(this);
            this.in_token_element.setAttribute("symbol","ETH");
            this.out_token_element.setAttribute("symbol","BTC");
        }
    }
    async update(attr, value){
        this.deposit_area.clear();
    }

    async getQuote(src){
        console.debug("quote requested from: ",src);
        let inToken = this.in_token_element.symbol;
        let outToken = this.out_token_element.symbol;
        let amtD = this.in_token_element.user_amount.value;
        let amtW = this.out_token_element.user_amount.value;
        if(src.symbol == this.in_token_element.symbol){
            console.debug("source was inToken and amount is ",amtD);
            this.out_token_element.user_amount.value = await window.app.getQuote(inToken,outToken,amtD,0);
        }else{
            if(src.symbol == this.out_token_element.symbol){
                console.debug("source was outToken and amount is ",amtW);
                this.in_token_element.user_amount.value = await window.app.getQuote(inToken,outToken,0,amtW);
            }else{
                if(amtD != 0 || amtW !=0){
                    console.debug("source was unknown: ",src);
                    console.debug("inToken: ",this.in_token_element);
                    console.debug("outToken: ",this.out_token_element);
                    this.in_token_element.user_amount.value = 0;
                    this.out_token_element.user_amount.value = 0;
                }
            }
        }
        if(this.out_token_element.user_address.value){
            this.onAddress(src);
        }
    }

    async onAddress(src){
        console.debug("address changed for: ",src);
        if(this.out_token_element.user_address.value){
            this.hideTradeForm();
            let userAddr = this.out_token_element.user_address.value;
            let inToken = this.in_token_element.symbol;
            let outToken = this.out_token_element.symbol;
            let amtD = this.in_token_element.user_amount.value ? this.in_token_element.user_amount.value : 0;
            let amtW = this.out_token_element.user_amount.value ? this.out_token_element.user_amount.value : 0;
            let refundAddr = this.in_token_element.user_address.value ? this.in_token_element.user_address.value : "";
            let trade = await window.app.getTrade(inToken, outToken, 0, amtW, userAddr, refundAddr);
            console.debug("trade: ",trade);
            if(!trade.deposit_address){
                setTimeout(()=>{
                    this.onAddress(src);
                },2000);
                return;
            }
            trade.deposit_amount = trade.deposit_amount ? trade.deposit_amount : amtD;
            trade.withdrawal_amount = trade.withdrawal_amount ? trade.withdrawal_amount : amtW;
            trade.outToken = outToken;
            trade.inToken = inToken;
            let status = await window.app.getStatus(trade.id);
            console.debug("status: ",status);
            Object.assign(trade,status);
            localStorage["id"] = JSON.stringify(trade);
            localStorage["swaps"] = JSON.stringify([trade]);
            await this.deposit_info_element.onReady(this,trade);   
        }
    }

    async showTradeForm(){
        window.app.hide(this.deposit_info_element);
        setTimeout(()=>{
            window.app.show(this.in_token_element);
            setTimeout(()=>{
                window.app.show(this.out_token_element);
            },2000);
        },2000);
    }

    async hideTradeForm(){
        window.app.hide(this.in_token_element);
        window.app.hide(this.out_token_element);
        setTimeout(()=>{
            window.app.show(this.deposit_info_element);
            setTimeout(()=>{
                this.deposit_info_element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            },5000);
        },2000);
    }

    async cancelTrade(msg){
        if(!msg || typeof msg !== "string"){
            msg = "Trade Cancelled or Expired!";
        }
        window.alert(msg);
        await this.showTradeForm();
        this.in_token_element.user_amount.value = "";
        this.in_token_element.user_address = "";
        this.out_token_element.user_amount.value = "";
        this.out_token_element.user_address.value = "";
    }
}
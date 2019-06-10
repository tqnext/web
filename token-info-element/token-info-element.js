import {TelepathicElement} from "../telepathic-element/telepathic-element.js";

export default class TokenInfoElement extends TelepathicElement{
    static describe(){return `An element to provide trading info for tqnext.`};
	constructor(fileName,noshadow,delayRender){
        super(fileName,noshadow,delayRender);
        this.symbol = "BTC";
        this.home_page = "https://www.bitcoin.com";
        this.icon = "./assets/icons/icon_BTC.png";
        this.name = "BITCOIN";
        this.status = "";
    }

    static get observedAttributes() {
        return ["symbol"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(newValue){
            console.log(`${name} changed from ${oldValue} to ${newValue}`);
            this.update(newValue);
        }
    }

    update(symbol){
        let token;
        for(token of this.tokens){
            if(token.symbol == symbol){
                let icon = token.icon.split("/").pop();
                token.icon = "./assets/icons/"+icon;
                break;
            }
        }
        if(this.token_selector.value != symbol){
            this.token_selector.value = symbol;
        }
        console.debug("token changed: ",token);
        Object.assign(this,token);
        if(!token.network){
            this.network = this.name;
        }
    }

    async onReady(owner,tokens){
        console.warn(`${this.constructor.name} entering onReady!`);  
        this.reset(owner,tokens);
    }

    async reset(owner,tokens){
        if(owner){
            this.owner = owner;
            this.tokens = tokens;
            this.onNewTokens();
            //this.token_selector.bind(this);
            this.token_selector.addEventListener("change",this.onSelectionEvent);
            this.user_amount.addEventListener("change",this.onUserQuote);
            this.user_address.addEventListener("change",this.onUserAddress);
        }
    }

    async onNewTokens(){
        this.token_selector.innerHTML = "";
        for(let token of this.tokens){
            let opt = document.createElement("option");
            opt.value = token.symbol;
            opt.innerHTML = token.name;
            this.token_selector.appendChild(opt);
        }
    }

    async onSelectionEvent(evt){
        evt.preventDefault();
        console.debug("evt: ",evt);
        console.debug("this: ",this);
        this.owner.setAttribute("symbol",this.value);
        this.owner.getQuote(this);
    }

    async onUserQuote(evt){
        if(evt){
            evt.preventDefault();
        }
        this.owner.getQuote(this);
    }

    onUserAddress(evt){
        if(evt){
            evt.preventDefault();
        }
        this.owner.onAddress(this);
    }
    getQuote(){
        this.owner.getQuote(this);
    }

    onAddress(){
        this.owner.onAddress(this);
    }

}
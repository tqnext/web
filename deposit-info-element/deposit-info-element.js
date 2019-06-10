import {TelepathicElement} from "../telepathic-element/telepathic-element.js";

export default class DepositInfoElement extends TelepathicElement{
    static describe(){return `An element to provide deposit info for tqnext.`};
	constructor(fileName,noshadow,delayRender){
        super(fileName,noshadow,delayRender);
        this.count = 0;
    }

    static get observedAttributes() {
        return ["inToken","outToken","dAmt","wAmt"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(newValue){
            console.log(`${name} changed from ${oldValue} to ${newValue}`);
            this.update(name,newValue);
        }
    }

    onClose(evt){
        console.debug("closing ",this.owner);
        if(evt && typeof evt !== "string"){
            evt.preventDefault();
        }else{
            this.progress_area.removeAttribute("value");
        }
        clearInterval(this.owner.expiryTimer);
        if(!this.owner.showTradeForm){
            this.owner.owner.cancelTrade(evt);
        }else{
            this.owner.cancelTrade(evt);
        }
    }
    async onReady(owner,trade){
        if(this.count == 0){
            this.close_btn.addEventListener("click",this.onClose);
            this.qr_element.addEventListener("click",this.onCopy);
        }
        console.debug(`${this.constructor.name} entering onReady!`);
        //console.debug("this: ",this);
        if(owner){
            this.owner = owner;
        }
        if(trade){
            if(this.style.display == "none"){
                this.style.display = "block";
            }
            Object.assign(this,trade);
            this.status_msg = "Awaiting Deposit...";
            this.expires = 15;
            if(this.expiryTimer){
                clearInterval(this.expiryTimer);
            }
            this.expiryTimer = setInterval(async (evt)=>{
                let now = new Date();
                this.expires = Math.floor((new Date(this.expiry) - now) / 1000 / 60);
                if(now > new Date(this.expiry)){
                    clearInterval(this.expiryTimer);
                    this.onClose(evt);
                }else{
                    let status = await window.app.getStatus(this.tradeId);
                    console.debug("status: ",status);
                    this.expiry = status.expiry;
                    switch(status.status){
                        case 1 :
                            this.status_msg = "Waiting for confirmation...";
                            this.progress_area.value++;
                        break;
                        case 2 :
                            this.status_msg = `Confirmation received...`;
                            this.progress_area.value = 75;
                        break;
                        case 3 :
                            this.status_msg = `Withdrawal Initiated \n${this.withdrawal_amount} ${this.outToken}`;
                            this.progress_area.value = 90;
                        break;
                        case 4 : 
                            this.status_msg = `Exchange Complete!`;
                            this.progress_area.value = 100;    
                        break;
                        case 5 : 
                            this.status_msg = `Trade Cancelled!`;
                            this.progress_area.value = 50;
                        break;
                        case 6 : 
                            this.status_msg = "Refunding Deposit!";
                            this.progress_area.value = 75;
                        break;
                        case 7 :
                            this.status_msg = "Deposit Refunded!"
                            this.progress_area = 100;
                        break;

                    }

                    if(status.status == 4 || status.status == 7){
                        clearInterval(this.expiryTimer);
                        setTimeout(()=>{
                            this.onClose(this.status_msg);
                        },5000);
                    }else{
                        window.alert(this.status_msg);
                    }
                }
            },15000);
        }
        this.count++;
    }
    async onCopy(evt){
        if(evt){
            evt.preventDefault();
        }
        console.debug("onCopy and navigator is: ",navigator);
        /*
        if(navigator.clipboard){
            this.owner.copyToClipBoard()
        }else{
            this.owner.onCopyHandler();
        }*/
        this.owner.copyToClipBoard();
    }

    async onCopyHandler(){
        try{
            console.debug("onCopyHandler: ",this);
            let el = this.addr_field;
            this.addr_field.removeAttribute("disabled");
            el.contentEditable = true;
            el.readOnly = false;
            setTimeout(()=>{
                let range = document.createRange();
                range.selectNodeContents(el);
                console.debug("range: ",range);
                let s = window.getSelection();
                s.removeAllRanges();
                s.addRange(range);
                el.setSelectionRange(0, 999999); // A big number, to cover anything that could be inside the element.

                document.execCommand('copy');
                window.alert("Deposit address was copied to clipboard");
                el.setAttribute("disabled","true");
            },1000);
            
        }catch(err){
            console.debug(err);
            window.alert("Failed to copy: ",JSON.stringify(err));
        }
    }

    async copyToClipBoard(){
        console.debug("copyToClipBoard: ",this);
        let permission = {state : 'denied'};
        try {
            if(navigator.permissions){
                permission = await navigator.permissions.query({name:'clipboard-write'});
            }
            console.debug("permission for clipboard is ",permission);
            if(permission.state == 'granted'){
                await navigator.clipboard.writeText(this.deposit_address);
                window.alert(`Address ${this.deposit_address} copied to clipboard`);
            }else{
                window.alert(`Clipboard permission was denied, trying something else...`);
                let x = document.createElement("input");
                x.innerText = this.deposit_address;
                this.appendChild(x);
                let range = document.createRange();
                range.selectNode(x);
                window.getSelection().addRange(range);
                let successful = document.execCommand('copy');
                setTimeout(()=>{
                    let msg = successful ? 'successfully' : 'unsuccessfully';
                    window.alert(`<center>${this.deposit_address} was ${msg} copied to the clipboard.\nIt is possible this process failed anyways.\nIf it did you can copy directly from\nThe input box below the QR code.</center>`);
                    this.removeChild(x);
                },3000);
                this.addr_field.removeAttribute("disabled");
            }
        } catch (err) {
            console.error(err);
            window.alert("Failed to copy: "+err);
        }
    }

    async update(attr, value){
        
    }
    async clear(){
        this.progress_area.value = 0;
        this.qr_area.qrdata = "";
    }
}
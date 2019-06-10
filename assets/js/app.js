export default class AppController{
    constructor(){
        
        this.snackbar = document.getElementById("snackbar");
        window.alert = this.alert;
        this.baseURL = `https://api.tqnext.com`;
        this.system = `live`;
        this.trade_area = document.querySelector("token-trade-element");
        this.header_area = document.querySelector("#header-area");
        this.main_area = document.querySelector("#main-area");
        
        let addBtn = document.getElementById("install-btn");
        let deferredPrompt;
        window.alert("Loading Resources, please wait...");
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            deferredPrompt = e;
            // Update UI to notify the user they can add to home screen
            addBtn.style.display = 'block';
          
            addBtn.addEventListener('click', (e) => {
              // hide our user interface that shows our A2HS button
              addBtn.style.display = 'none';
              // Show the prompt
              deferredPrompt.prompt();
              // Wait for the user to respond to the prompt
              deferredPrompt.userChoice.then((choiceResult) => {
                  if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                  } else {
                    console.log('User dismissed the A2HS prompt');
                  }
                  deferredPrompt = null;
                });
            });
        });
        setTimeout(async ()=>{
            this.fetchJSON("pairs",`${this.baseURL}/pairs/${this.system}?ERC20=true`);
            this.fetchJSON("limits",`${this.baseURL}/limits/${this.system}`);
        },100);
        this.check = setInterval(()=>{
            if(this.pairs && this.limits){
                clearInterval(this.check);
                this.onReady();
            }
        },1000);
    }
    fetchJSON(v,url){
        return fetch(url)
                .then(async (response)=>{
                    this[v] = await response.json();
                    console.debug("this."+v+" : ",this[v]);
                }).catch(console.error);
    }

    hide(el){
        console.debug("hiding: ",el);
        el.classList.remove("visible");
        el.classList.add("hidden");
    }

    show(el){
        console.debug("showing: ",el);
        el.classList.remove("hidden");
        el.classList.add("visible");
        setTimeout(()=>{
            console.debug("scrolling to: ",el);
            el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        },2000);
    }

    alert(msg){
        this.snackbar.className = "show";
        this.snackbar.innerHTML = msg;
        setTimeout(()=>{ this.snackbar.classList.remove("show") }, 3000);
    }
    async onReady(){
        await this.trade_area.onReady(this.pairs,this.limits);
        this.show(this.main_area);
        this.show(this.trade_area);
        window.alert("Resources loaded!");
    }

    async getTrade(inToken, outToken, amtD, amtW, userAddr, refundAddr){
        this.alert("Updating trade information");
        let url = new URL(`${this.baseURL}/trade/${this.system}/${inToken}/${outToken}/${userAddr}`);
        if(refundAddr){
            url.searchParams.append("refund",refundAddr);
        }
        if(amtD){
            url.searchParams.append("amtd",amtD);
        }else{
            if(amtW){
                url.searchParams.append("amtw",amtW);
            }
        }
        console.debug("fetching: ",url);
        let obj = await(await fetch(url)).json();
        obj.tradeId = obj.id;
        delete obj.id;
        return obj;
    }
    async getStatus(id){
        this.alert("Checking status of your trade...");
        let url = new URL(`${this.baseURL}/status/${this.system}/${id}`);
        console.debug("fetching: ",url);
        return await(await fetch(url)).json();
    }

    async getQuote(inToken,outToken, amtD, amtW){
        this.alert("Please Standby... Fetching Quote!");
        let url = new URL(`${this.baseURL}/quote/${this.system}/${inToken}/${outToken}`);
        if(amtW > 0){
            url.searchParams.append("amtw",amtW);
        }else{
            if(amtD > 0){
                url.searchParams.append("amtD",amtD);
            }
        }
        console.debug("fetching: ",url);
        let data = await fetch(url);
        console.debug("data: ", data);
        let quote = await data.json();
        console.debug("Price is ",quote.price);
        if(amtW > 0){            
            quote = amtW * quote.price;
        }else{
            quote = (1/quote.price) * amtD;
        }
        console.debug("quote: ", quote);
        return quote;
    }
}

window.app = new AppController();

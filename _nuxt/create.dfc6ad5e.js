import{H as S,T,M as D}from"./components.73a6f13a.js";import{a as P,p as F,I as g,C as b,Z as U,l as q,s as W,b as u,e as m,w as y,f as t,y as c,t as d,v as h,x as p,c as _,i as w,F as A,D as I,o as l}from"./entry.730ccfe0.js";import{C as H}from"./ConnectWalletButton.2193553e.js";import{W as C}from"./WaitingToast.4f8c19a7.js";import{W as j}from"./Web3StorageImageUpload.35d6d72a.js";import{u as B}from"./user.4067c6af.js";import"./composables.c0c05c00.js";const V={name:"NftCreate",data(){return{cDescription:null,cImage:null,cName:null,cSymbol:null,launchpadPaused:null,nftName:null,createPriceWei:null,ratio:null,uniqueId:null,waitingCreate:!1,waitingData:!1}},components:{ConnectWalletButton:H,WaitingToast:C,Web3StorageImageUpload:j},mounted(){this.ratio=this.$config.nftDefaultRatio,this.fetchData()},computed:{createPrice(){if(!this.createPriceWei)return null;const e=Number(F(this.createPriceWei));return e>1?e.toFixed(0):e>.1?e.toFixed(4):e>.01?e.toFixed(5):e>.001?e.toFixed(6):e>1e-4?e.toFixed(7):e>1e-5?e.toFixed(8):e>1e-6?e.toFixed(9):e},fieldsValid(){return this.cName&&this.cSymbol&&this.cImage&&this.cDescription&&this.nftName&&this.ratio}},methods:{async createCollection(){if(this.waitingCreate=!0,this.signer){const e=new g([`function launch(
              address contractOwner_,
              string memory mdDescription_,
              string memory mdImage_,
              string memory mdName_,
              string memory name_,
              string memory symbol_,
              string calldata uniqueId_, 
              uint256 ratio_
            ) external payable`,"function getNftContractAddress(string calldata _uniqueId) external view returns(address)"]),o=new b(this.$config.nftLaunchpadBondingAddress,e,this.signer);try{const s=await o.launch(this.address,this.cDescription,this.cImage,this.nftName,this.cName,this.cSymbol,this.uniqueId,U(String(this.ratio)),{value:this.createPriceWei}),r=this.toast({component:C,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+s.hash,"_blank").focus()}),i=await s.wait();if(i.status===1){this.toast.dismiss(r),this.toast("You have successfully created an NFT collection!",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+s.hash,"_blank").focus()});const a=await o.getNftContractAddress(this.uniqueId);this.makeOrbisPost(a),this.$router.push({path:"/nft/collection",query:{id:a}}),this.waitingCreate=!1}else this.toast.dismiss(r),this.waitingCreate=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+s.hash,"_blank").focus()}),console.log(i)}catch(s){console.error(s),this.toast(s.message,{type:"error"}),this.waitingCreate=!1}}this.waitingCreate=!1},async fetchData(){this.waitingData=!0;let e=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(e=this.signer);const o=new g(["function paused() public view returns(bool)","function isUniqueIdAvailable(string calldata _uniqueId) public view returns(bool)","function price() public view returns(uint256)"]),s=new b(this.$config.nftLaunchpadBondingAddress,o,e);this.launchpadPaused=await s.paused(),this.uniqueId=Math.random().toString(36).slice(2),await s.isUniqueIdAvailable(this.uniqueId)||(this.uniqueId=Math.random().toString(36).slice(10)),this.createPriceWei=await s.price(),this.waitingData=!1},insertImage(e){this.cImage=e.replace("?.img","")},async makeOrbisPost(e){if(this.userStore.getIsConnectedToOrbis)try{!String(this.cImage).toLowerCase().endsWith("?.img")&&!String(this.cImage).toLowerCase().endsWith(".png")&&!String(this.cImage).toLowerCase().endsWith(".jpg")&&!String(this.cImage).toLowerCase().endsWith(".jpeg")&&!String(this.cImage).toLowerCase().endsWith(".gif")&&!String(this.cImage).toLowerCase().endsWith(".webp")&&(this.cImage=this.cImage+"?.img");const o={body:"I have launched a new NFT collection: "+this.cName+" <br /><br />Check it out here \u{1F447}",context:this.$config.orbisContext,tags:[{slug:"nfts",title:"Memes & NFTs"}],data:{type:"nftCollectionCreated",authorAddress:String(this.address),collectionAddress:String(e),collectionDescription:this.cDescription,collectionImage:this.cImage.replace("?.img",""),collectionName:this.cName,collectionRatio:this.ratio,collectionSymbol:this.cSymbol,collectionUniqueId:this.uniqueId,pricePaidWei:this.createPriceWei}};await this.$orbis.createPost(o)}catch(o){console.log(o)}}},setup(){const{address:e,chainId:o,isActivated:s,signer:r}=q(),i=B(),a=W();return{address:e,chainId:o,isActivated:s,signer:r,toast:a,userStore:i}}},E={class:"card border scroll-500"},L={class:"card-body"},M=t("i",{class:"bi bi-arrow-left-circle cursor-pointer"},null,-1),R=[M],O=t("h3",{class:"mb-4 mt-3"},"Create NFT Collection",-1),K={key:0,class:"d-flex justify-content-center mb-3"},Y=t("span",{class:"spinner-border spinner-border-lg",role:"status","aria-hidden":"true"},null,-1),Z=[Y],z={key:1,class:"mb-4"},G={class:"mb-4"},J=t("label",{for:"cName",class:"form-label"},"Collection Name",-1),Q=t("div",{id:"cNameHelp",class:"form-text"},"This is not a token name, but the whole collection name.",-1),X={class:"mb-4"},$=t("label",{for:"cSymbol",class:"form-label"},"Collection Symbol",-1),ee=t("div",{id:"cSymbolHelp",class:"form-text"},"Collection symbol (required by the ERC-721 smart contract, but not really important).",-1),te={class:"mb-2"},ie=t("label",{for:"cImage",class:"form-label"},"Collection Image (can be changed later)",-1),oe={class:"input-group","aria-describedby":"cImageHelp",id:"cImage"},ne=t("div",{id:"cImageHelp",class:"form-text"},"Even if you want a generative PFP collection, put a single preview image for now and you will change it to a metadata link later.",-1),se={key:2,class:"mb-4"},ae=["src"],re=t("br",null,null,-1),le=t("small",null,"If image didn't appear above, then something is wrong with the link you added.",-1),ce={class:"mb-4"},de=t("label",{for:"cDescription",class:"form-label"},"Collection Description (can be changed later)",-1),ue=t("div",{id:"cDescriptionHelp",class:"form-text"},"Too long description means higher gas cost for storing it.",-1),me={class:"mb-4"},he=t("label",{for:"nftName",class:"form-label"},"NFT Name (can be changed later)",-1),pe={key:0,id:"nftNameHelp",class:"form-text"},fe={class:"mb-4"},ge=t("label",{for:"uniqueId",class:"form-label"},"Unique ID (store it - just in case)",-1),be=t("div",{id:"uniqueIdHelp",class:"form-text"},"This is just in case the frontend will not show you the NFT collection address and you'll need to find it manually.",-1),ye={class:"mb-4"},_e=t("label",{for:"ratio",class:"form-label"},"Bonding Curve Ratio",-1),we={id:"ratioHelp",class:"form-text"},Ie={class:"d-flex justify-content-center mt-5 mb-5"},Ce=["disabled"],ve={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},Ne={key:1,disabled:!0,class:"btn btn-primary"};function ke(e,o,s,r,i,a){const v=T,f=D,N=S,k=I("Web3StorageImageUpload"),x=I("ConnectWalletButton");return l(),u(A,null,[m(N,null,{default:y(()=>[m(v,null,{default:y(()=>[w("Create NFT Collection | "+d(e.$config.projectMetadataTitle),1)]),_:1}),m(f,{property:"og:title",content:"Create NFT Collection | "+e.$config.projectMetadataTitle},null,8,["content"]),m(f,{name:"description",content:"Create your very own NFT collection on "+e.$config.projectName+"!"},null,8,["content"]),m(f,{property:"og:image",content:e.$config.projectUrl+e.$config.previewImageNftCreate},null,8,["content"]),m(f,{property:"og:description",content:"Create your very own NFT collection on "+e.$config.projectName+"!"},null,8,["content"]),m(f,{name:"twitter:image",content:e.$config.projectUrl+e.$config.previewImageNftCreate},null,8,["content"]),m(f,{name:"twitter:description",content:"Create your very own NFT collection on "+e.$config.projectName+"!"},null,8,["content"])]),_:1}),t("div",E,[t("div",L,[t("p",{class:"fs-3",onClick:o[0]||(o[0]=n=>e.$router.back())},R),O,i.waitingData?(l(),u("div",K,Z)):c("",!0),a.createPrice?(l(),u("p",z," Price for creating a collection is "+d(a.createPrice)+" "+d(e.$config.tokenSymbol)+". ",1)):c("",!0),t("div",G,[J,h(t("input",{type:"text",class:"form-control",id:"cName","aria-describedby":"cNameHelp",placeholder:"e.g. Crypto Punks","onUpdate:modelValue":o[1]||(o[1]=n=>i.cName=n)},null,512),[[p,i.cName]]),Q]),t("div",X,[$,h(t("input",{type:"text",class:"form-control",id:"cSymbol","aria-describedby":"cSymbolHelp",placeholder:"e.g. PUNKS","onUpdate:modelValue":o[2]||(o[2]=n=>i.cSymbol=n)},null,512),[[p,i.cSymbol]]),ee]),t("div",te,[ie,t("div",oe,[h(t("input",{"onUpdate:modelValue":o[3]||(o[3]=n=>i.cImage=n),type:"text",class:"form-control",placeholder:"Enter image URL or click the upload button"},null,512),[[p,i.cImage]]),r.isActivated&&e.$config.web3storageKey!==""?(l(),_(k,{key:0,onInsertImage:a.insertImage,buttonText:"Upload",cls:"btn btn-outline-secondary rounded-end-2"},null,8,["onInsertImage"])):c("",!0)]),ne]),i.cImage?(l(),u("div",se,[t("img",{src:i.cImage,class:"img-thumbnail img-fluid",style:{"max-width":"100px"}},null,8,ae),re,le])):c("",!0),t("div",ce,[de,h(t("input",{type:"text",class:"form-control",id:"cDescription","aria-describedby":"cDescriptionHelp",placeholder:"Keep it short and sweet.","onUpdate:modelValue":o[4]||(o[4]=n=>i.cDescription=n)},null,512),[[p,i.cDescription]]),ue]),t("div",me,[he,h(t("input",{type:"text",class:"form-control",id:"cDescription","aria-describedby":"nftNameHelp",placeholder:"Short, will show up next to each NFT, e.g. Punk","onUpdate:modelValue":o[5]||(o[5]=n=>i.nftName=n)},null,512),[[p,i.nftName]]),i.nftName?(l(),u("div",pe,"The first minted NFTs will be "+d(i.nftName)+" #1, "+d(i.nftName)+" #2, "+d(i.nftName)+" #3 etc.",1)):c("",!0)]),t("div",fe,[ge,h(t("input",{type:"text",class:"form-control",id:"uniqueId","aria-describedby":"uniqueIdHelp",disabled:"",readonly:"","onUpdate:modelValue":o[6]||(o[6]=n=>i.uniqueId=n)},null,512),[[p,i.uniqueId]]),be]),t("div",ye,[_e,h(t("input",{type:"text",class:"form-control",id:"ratio","aria-describedby":"ratioHelp","onUpdate:modelValue":o[7]||(o[7]=n=>i.ratio=n)},null,512),[[p,i.ratio]]),t("div",we,"Leave at "+d(e.$config.nftDefaultRatio)+" unless you know what you're doing.",1)]),t("div",Ie,[r.isActivated&&!i.launchpadPaused?(l(),u("button",{key:0,disabled:i.waitingCreate||!a.fieldsValid,class:"btn btn-primary",type:"button",onClick:o[8]||(o[8]=(...n)=>a.createCollection&&a.createCollection(...n))},[i.waitingData||i.waitingCreate?(l(),u("span",ve)):c("",!0),w(" Create NFT Collection for "+d(a.createPrice)+" "+d(e.$config.tokenSymbol),1)],8,Ce)):c("",!0),r.isActivated&&i.launchpadPaused?(l(),u("button",Ne," Paused ")):c("",!0),r.isActivated?c("",!0):(l(),_(x,{key:2,class:"btn btn-primary",btnText:"Connect wallet"}))])])])],64)}const qe=P(V,[["render",ke]]);export{qe as default};

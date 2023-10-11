import{H as A,T as M,M as L}from"./components.4ea7112c.js";import{a as C,I as T,C as w,l as E,D as b,o as n,b as a,y as r,F as y,E as D,e as u,f as t,t as g,p as k,A as O,s as N,T as x,c as _,u as U,i as h,w as I,v,x as S,G as $}from"./entry.0f341616.js";import{a as F}from"./textUtils.3616f491.js";import{u as B}from"./user.c982eea7.js";import{P as j}from"./ProfileImage.86ea8ada.js";import{W}from"./Web3StorageImageUpload.b87ad046.js";import{M as V}from"./MintedPostImage.d254dcb9.js";import{r as H,R as q}from"./ChatPost.db7ea4c2.js";import{C as R}from"./ChatFeed.1a272e45.js";import{a as K,b as P}from"./storageUtils.80082c00.js";import"./composables.3c48d20f.js";import"./WaitingToast.204bb7a2.js";import"./SwitchChainButton.503bf864.js";import"./site.2b4a96c8.js";import"./ConnectWalletButton.9edacbe3.js";const Y={name:"UserMintedPosts",props:["address"],data(){return{loadingMintedPosts:!1,mintedPostIds:[],postsDifference:0}},components:{MintedPostImage:V},mounted(){this.fetchMintedPostIds()},methods:{async fetchMintedPostIds(){this.loadingMintedPosts=!0;let e=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(e=this.signer);const i=new T(["function getMintedPostIdsArray(address) external view returns (uint256[] memory)"]);let l=await new w(this.$config.iggyPostStatsAddress,i,e).getMintedPostIdsArray(this.address);l=[...l].reverse(),this.mintedPostIds=l.slice(0,this.$config.profileMintedPostIdsMax),this.postsDifference=l.length-this.mintedPostIds.length,this.loadingMintedPosts=!1}},setup(){const{isActivated:e,chainId:i,signer:o}=E();return{isActivated:e,chainId:i,signer:o}}},z={key:0,class:"d-flex justify-content-center mb-3"},G=t("span",{class:"spinner-border spinner-border-lg",role:"status","aria-hidden":"true"},null,-1),Z=[G],J={key:1,class:"row"},Q={key:2,class:"d-flex justify-content-center mt-3"},X={key:3},ee=t("p",null,"No minted posts yet.",-1),te=[ee];function se(e,i,o,l,s,d){const f=b("MintedPostImage");return n(),a(y,null,[s.loadingMintedPosts?(n(),a("div",z,Z)):r("",!0),s.mintedPostIds?(n(),a("div",J,[(n(!0),a(y,null,D(s.mintedPostIds,m=>(n(),a("div",{class:"col-6 col-sm-4 col-md-3 mb-2",key:m},[u(f,{id:m},null,8,["id"])]))),128))])):r("",!0),s.postsDifference>0?(n(),a("div",Q,[t("p",null,"+ "+g(s.postsDifference)+" other minted posts",1)])):r("",!0),!s.loadingMintedPosts&&s.mintedPostIds.length===0?(n(),a("div",X,te)):r("",!0)],64)}const ie=C(Y,[["render",se]]),oe={name:"PunkProfile",props:["pAddress","pDomain"],data(){return{balanceChatTokenWei:0,currentTab:"posts",domain:this.pDomain,emailForNotificationsSet:!1,followers:0,following:0,lastActivityTimestamp:null,newEmail:null,newImageLink:null,orbisImage:null,orbisProfile:null,uAddress:this.pAddress,uBalance:0,uDid:null,waitingDataLoad:!1,waitingImageUpdate:!1,waitingSetEmail:!1}},components:{ChatFeed:R,ProfileImage:j,UserMintedPosts:ie,Web3StorageImageUpload:W},mounted(){this.currentTab=localStorage.getItem("profileCurrentTab"),this.currentTab||(this.currentTab="posts"),(!this.pAddress||!this.pDomain)&&this.fetchAddressAndDomain(),this.checkConnectionToOrbis()},computed:{balanceChatToken(){const e=k(this.balanceChatTokenWei);return e>=0?Math.floor(Number(e)):Number(e).toFixed(4)},balanceEth(){const e=k(this.uBalance);return e>0?Number(e).toFixed(2):Number(e).toFixed(4)},getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.orbisContext},isCurrentUser(){return String(this.uAddress).toLowerCase()===String(this.address).toLowerCase()},isEmail(){return!!(this.newEmail&&this.newEmail.includes("@")&&this.newEmail.includes("."))},isImage(){return!!(this.newImageLink&&(this.newImageLink.includes(".jpg")||this.newImageLink.includes(".jpeg")||this.newImageLink.includes(".png")||this.newImageLink.includes(".gif")||this.newImageLink.includes(".webp")))}},methods:{changeCurrentTab(e){this.currentTab=e,localStorage.setItem("profileCurrentTab",e)},async changeImage(){if(this.userStore.getIsConnectedToOrbis){this.waitingImageUpdate=!0,this.orbisProfile||(this.orbisProfile={pfp:"",username:""}),this.orbisProfile.pfp=this.newImageLink,!this.orbisProfile.username&&this.domain&&(this.orbisProfile.username=this.domain);const e=await this.$orbis.updateProfile(this.orbisProfile);e.status!==200?(console.log("Error: ",e),this.toast(e.result,{type:"error"}),this.waitingImageUpdate=!1):(this.orbisImage=this.newImageLink,this.userStore.setOrbisImage(this.newImageLink),sessionStorage.setItem(String(this.address).toLowerCase()+"-img",this.newImageLink),this.toast("Image successfully updated!",{type:"success"}),this.waitingImageUpdate=!1,document.getElementById("changeImageModalClose").click())}else this.toast("Please connect to chat first",{type:"error"})},async checkConnectionToOrbis(){this.userStore.getIsConnectedToOrbis||(await this.$orbis.isConnected()?(this.userStore.setIsConnectedToOrbis(!0),this.$orbis.session&&!this.userStore.getDid&&(this.userStore.setDid(this.$orbis.session.did._id),this.userStore.setDidParent(this.$orbis.session.did._parentId))):this.userStore.setIsConnectedToOrbis(!1))},async connectToOrbis(){if(!this.userStore.getIsConnectedToOrbis){let e=await this.$orbis.connect_v2({provider:this.signer.provider.provider,lit:!1});e.status==200?(this.userStore.setIsConnectedToOrbis(!0),this.$orbis.session&&(this.userStore.setDid(this.$orbis.session.did._id),this.userStore.setDidParent(this.$orbis.session.did._parentId))):(console.log("Error connecting to Ceramic: ",e),this.toast(e.result,{type:"error"}))}},async fetchAddressAndDomain(){if(this.waitingDataLoad=!0,this.$route.query.id){const o=this.$route.query.id;o.includes(".")?this.domain=o:this.uAddress=o}else this.uAddress=this.address;!this.domain&&this.uAddress&&(this.domain=K(window,this.uAddress));let e=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(e=this.signer);const i=new w(H[this.$config.supportedChainId],q,e);if(!this.domain&&this.uAddress){const o=await i.getDefaultDomain(String(this.uAddress).toLowerCase(),String(this.$config.tldName).toLowerCase());o&&(this.domain=o+this.$config.tldName,P(window,this.uAddress,this.domain))}if(this.domain&&!this.uAddress){const o=await i.getDomainHolder(String(this.domain).toLowerCase().split(".")[0],String(this.$config.tldName).toLowerCase());o!==O&&(this.uAddress=o),P(window,this.uAddress,this.domain)}await this.fetchOrbisProfile(),await this.fetchBalance()},async fetchBalance(){if(this.uAddress){let e=this.$getFallbackProvider(this.$config.supportedChainId);if(this.uBalance=await e.getBalance(this.uAddress),this.$config.chatTokenAddress){const i=new T(["function balanceOf(address owner) view returns (uint256)"]),o=new w(this.$config.chatTokenAddress,i,e);this.balanceChatTokenWei=await o.balanceOf(this.uAddress)}}},async fetchOrbisProfile(){if(this.orbisProfile={pfp:"",username:""},this.uAddress){let{data:e,error:i}=await this.$orbis.getDids(this.uAddress);if(e[0]?.did){this.uDid=e[0].did;const o=await this.$orbis.getProfile(e[0].did);o.status===200&&(this.orbisProfile=o.data.details.profile,o&&o.data.details.profile&&o.data.details.profile.pfp&&(this.orbisImage=o.data.details.profile.pfp),o&&(this.followers=o.data.count_followers,this.following=o.data.count_following,this.lastActivityTimestamp=o.data.last_activity_timestamp),o.data.details.encrypted_email?this.emailForNotificationsSet=!0:this.emailForNotificationsSet=!1,this.waitingDataLoad=!1)}this.waitingDataLoad=!1}},async insertImage(e){this.newImageLink=e,this.changeImage()},async setEmailNotifications(e){if(this.userStore.getIsConnectedToOrbis){this.waitingSetEmail=!0,e&&(this.newEmail="");let i=await this.$orbis.setEmail(this.newEmail);i.status!==200?(console.log("Error: ",i),this.toast(i.result,{type:"error"}),this.waitingSetEmail=!1):(this.toast("Email notifications successfully set!",{type:"success"}),this.waitingSetEmail=!1,document.getElementById("setEmailModalClose").click())}else this.toast("Please connect to chat first",{type:"error"})}},setup(){const{address:e,balance:i,chainId:o,isActivated:l,signer:s}=E(),d=B(),f=N();return{address:e,balance:i,chainId:o,isActivated:l,userStore:d,shortenAddress:x,signer:s,toast:f}},watch:{address(){this.fetchAddressAndDomain()}}},ne={class:"card border"},ae={class:"card-body"},re=t("i",{class:"bi bi-arrow-left-circle cursor-pointer"},null,-1),de=[re],le={class:"row"},ce={class:"col-md-3 mt-3"},me={class:"col-md-9 mt-3"},he={key:0,class:"mb-3"},ue={class:"mt-4 muted-text",style:{"font-size":"14px"}},ge={class:"me-4"},fe=t("i",{class:"bi bi-wallet me-1"},null,-1),be={key:0,class:"me-4"},pe=t("i",{class:"bi bi-wallet me-1"},null,-1),_e={class:"me-4"},we=t("i",{class:"bi bi-box-arrow-up-right me-2"},null,-1),ye=["href"],Ie={key:1,class:"mt-2"},Ce=["disabled"],ke={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"},ve=t("i",{class:"bi bi-person-circle"},null,-1),Se=["disabled"],Pe={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"},Te=t("i",{class:"bi bi-envelope-at-fill"},null,-1),Ee=t("button",{class:"btn btn-primary mt-2 me-2 col-8 col-md-3","data-bs-toggle":"modal","data-bs-target":"#chatSettingsModal"},[t("i",{class:"bi bi-gear-fill"}),h(" Settings ")],-1),Ae=t("i",{class:"bi bi-send"},null,-1),Me={class:"modal fade",id:"setEmailModal",tabindex:"-1","aria-labelledby":"setEmailModalLabel","aria-hidden":"true"},Le={class:"modal-dialog"},De={class:"modal-content"},Oe=t("div",{class:"modal-header"},[t("h1",{class:"modal-title fs-5",id:"setEmailModalLabel"},"Set email notifications"),t("button",{type:"button",id:"setEmailModalClose",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ne={class:"modal-body"},xe={key:0},Ue=t("p",null,"First connect to Ceramic to set email notifications:",-1),$e={key:1,class:"mt-3"},Fe=t("p",null,"Enter your email address to receive notifications about replies on your posts.",-1),Be=t("p",null,"The email address will be encrypted and will not be publicly visible.",-1),je={key:0},We={key:1},Ve={key:2,class:"text-danger"},He={class:"modal-footer"},qe=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),Re=["disabled"],Ke={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"},Ye={class:"modal fade",id:"changeImageModal",tabindex:"-1","aria-labelledby":"changeImageModalLabel","aria-hidden":"true"},ze={class:"modal-dialog"},Ge={class:"modal-content"},Ze=t("div",{class:"modal-header"},[t("h1",{class:"modal-title fs-5",id:"changeImageModalLabel"},"Change image"),t("button",{type:"button",id:"changeImageModalClose",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Je={class:"modal-body"},Qe={key:0},Xe=t("p",null,"First connect to Ceramic to change the profile picture:",-1),et={key:1,class:"mt-3"},tt={key:0,class:"text-danger"},st={class:"modal-footer"},it=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),ot=["disabled"],nt={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"};function at(e,i,o,l,s,d){const f=b("ProfileImage"),m=b("Web3StorageImageUpload"),p=$;return n(),a("div",null,[t("div",ne,[t("div",ae,[t("p",{class:"fs-3",onClick:i[0]||(i[0]=c=>e.$router.back())},de),t("div",le,[t("div",ce,[s.uAddress?(n(),_(f,{key:s.orbisImage,class:"img-fluid img-thumbnail rounded-circle col-6 col-md-12",address:s.uAddress,domain:s.domain,image:s.orbisImage},null,8,["address","domain","image"])):r("",!0)]),t("div",me,[s.domain?(n(),a("h3",he,g(U(F)(s.domain)),1)):r("",!0),t("div",ue,[t("p",ge,[fe,h(" "+g(d.balanceEth)+" "+g(e.$config.tokenSymbol),1)]),e.$config.chatTokenAddress?(n(),a("p",be,[pe,h(" "+g(d.balanceChatToken)+" "+g(e.$config.chatTokenSymbol),1)])):r("",!0),t("p",_e,[we,t("a",{href:e.$config.blockExplorerBaseUrl+"/address/"+s.uAddress,target:"_blank",style:{"text-decoration":"none"}},g(l.shortenAddress(s.uAddress)),9,ye)])]),d.isCurrentUser?(n(),a("div",Ie,[e.$config.web3storageKey===""?(n(),a("button",{key:0,disabled:s.waitingDataLoad,class:"btn btn-primary mt-2 me-2","data-bs-toggle":"modal","data-bs-target":"#changeImageModal"},[s.waitingDataLoad?(n(),a("span",ke)):r("",!0),ve,h(" Change image ")],8,Ce)):r("",!0),e.$config.web3storageKey!==""&&l.userStore.getIsConnectedToOrbis?(n(),_(m,{key:1,onInsertImage:d.insertImage,buttonText:"Change image",cls:"btn btn-primary me-2 mt-2 col-8 col-md-4",icon:"bi bi-person-circle"},null,8,["onInsertImage"])):r("",!0),t("button",{disabled:s.waitingSetEmail,class:"btn btn-primary mt-2 me-2 col-8 col-md-4","data-bs-toggle":"modal","data-bs-target":"#setEmailModal"},[s.waitingSetEmail?(n(),a("span",Pe)):r("",!0),Te,h(" Email notifications ")],8,Se),Ee])):r("",!0),s.domain&&!d.isCurrentUser&&e.$config.showFeatures.sendTokens?(n(),_(p,{key:2,class:"btn btn-primary mt-2",to:"/send-tokens/?to="+s.domain},{default:I(()=>[Ae,h(" Send tokens to "+g(s.domain),1)]),_:1},8,["to"])):r("",!0)])])]),t("div",Me,[t("div",Le,[t("div",De,[Oe,t("div",Ne,[l.userStore.getIsConnectedToOrbis?r("",!0):(n(),a("div",xe,[Ue,t("button",{class:"btn btn-primary",onClick:i[1]||(i[1]=(...c)=>d.connectToOrbis&&d.connectToOrbis(...c))},"Connect to Ceramic")])),l.userStore.getIsConnectedToOrbis?(n(),a("div",$e,[Fe,Be,s.emailForNotificationsSet?(n(),a("p",je," Currently, the email for notifications is already set. You can change it by entering a new email address below: ")):r("",!0),s.emailForNotificationsSet?r("",!0):(n(),a("p",We," Currently, the email for notifications is NOT yet set. You can add your email address below: ")),v(t("input",{"onUpdate:modelValue":i[2]||(i[2]=c=>s.newEmail=c),type:"email",class:"form-control mt-2",placeholder:"Enter email address"},null,512),[[S,s.newEmail]]),s.newEmail&&!d.isEmail?(n(),a("small",Ve," Error: The entered text is not an email. ")):r("",!0)])):r("",!0)]),t("div",He,[qe,t("button",{type:"button",class:"btn btn-primary",onClick:i[3]||(i[3]=c=>d.setEmailNotifications(!1)),disabled:!l.userStore.getIsConnectedToOrbis||!d.isEmail},[s.waitingSetEmail?(n(),a("span",Ke)):r("",!0),h(" Submit email ")],8,Re)])])])]),t("div",Ye,[t("div",ze,[t("div",Ge,[Ze,t("div",Je,[l.userStore.getIsConnectedToOrbis?r("",!0):(n(),a("div",Qe,[Xe,t("button",{class:"btn btn-primary",onClick:i[4]||(i[4]=(...c)=>d.connectToOrbis&&d.connectToOrbis(...c))},"Connect to Ceramic")])),l.userStore.getIsConnectedToOrbis?(n(),a("div",et,[h(" Enter the new image URL (use a square image): "),v(t("input",{"onUpdate:modelValue":i[5]||(i[5]=c=>s.newImageLink=c),type:"text",class:"form-control mt-2",placeholder:"Enter image link"},null,512),[[S,s.newImageLink]]),s.newImageLink&&!d.isImage?(n(),a("small",tt," Error: The entered link is not an image (it does not end with .jpg, .jpeg, .png, or similar image extension). ")):r("",!0)])):r("",!0)]),t("div",st,[it,t("button",{type:"button",class:"btn btn-primary",onClick:i[6]||(i[6]=(...c)=>d.changeImage&&d.changeImage(...c)),disabled:!l.userStore.getIsConnectedToOrbis||!d.isImage},[s.waitingImageUpdate?(n(),a("span",nt)):r("",!0),h(" Submit changes ")],8,ot)])])])])])])}const rt=C(oe,[["render",at]]),dt={name:"Profile",components:{PunkProfile:rt},setup(){}};function lt(e,i,o,l,s,d){const f=M,m=L,p=A,c=b("PunkProfile");return n(),a(y,null,[u(p,null,{default:I(()=>[u(f,null,{default:I(()=>[h("Profile | "+g(e.$config.projectMetadataTitle),1)]),_:1}),u(m,{name:"description",content:"Check out this profile on "+e.$config.projectName+"!"},null,8,["content"]),u(m,{property:"og:image",content:e.$config.projectUrl+e.$config.previewImageProfile},null,8,["content"]),u(m,{property:"og:description",content:"Check out this profile on "+e.$config.projectName+"!"},null,8,["content"]),u(m,{name:"twitter:image",content:e.$config.projectUrl+e.$config.previewImageProfile},null,8,["content"]),u(m,{name:"twitter:description",content:"Check out this profile on "+e.$config.projectName+"!"},null,8,["content"])]),_:1}),u(c,{class:"mt-1"})],64)}const St=C(dt,[["render",lt]]);export{St as default};

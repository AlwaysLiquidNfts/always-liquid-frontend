import{m as a,p as i,B as t}from"./entry.730ccfe0.js";const r=a({id:"user",state:()=>({activityPoints:0,address:null,chatTokenBalanceWei:BigInt(0),defaultDomain:null,did:null,didParent:null,followers:0,following:0,isConnectedToOrbis:!1,lastActivityTimestamp:null,lpTokenBalanceWei:BigInt(0),orbisImage:null,stakeTokenBalanceWei:BigInt(0)}),getters:{getCurentUserActivityPoints(e){return e.activityPoints},getCurrentUserAddress(e){return e.address},getChatTokenBalance(e){const n=i(e.chatTokenBalanceWei);return Intl.NumberFormat("en",{notation:"compact"}).format(Number(n))},getChatTokenBalanceWei(e){return t.from(e.chatTokenBalanceWei)},getDefaultDomain(e){return e.defaultDomain},getDid(e){return e.did},getDidParent(e){return e.didParent},getFollowers(e){return e.followers},getFollowing(e){return e.following},getIsConnectedToOrbis(e){return e.isConnectedToOrbis},getLastActivityTimestamp(e){return e.lastActivityTimestamp},getLpTokenBalanceWei(e){return t.from(e.lpTokenBalanceWei)},getOrbisImage(e){return e.orbisImage},getStakeTokenBalanceWei(e){return t.from(e.stakeTokenBalanceWei)}},actions:{addToChatTokenBalanceWei(e){this.chatTokenBalanceWei+=e.toBigInt()},addToLpTokenBalanceWei(e){this.lpTokenBalanceWei+=e.toBigInt()},addToStakeTokenBalanceWei(e){this.stakeTokenBalanceWei+=e.toBigInt()},setChatTokenBalanceWei(e){this.chatTokenBalanceWei=e.toBigInt()},setCurrentUserActivityPoints(e){this.activityPoints=e},setCurrentUserAddress(e){this.address=e},setDefaultDomain(e){this.defaultDomain=e},setDid(e){this.did=e},setDidParent(e){this.didParent=e},setFollowers(e){this.followers=e},setFollowing(e){this.following=e},setIsConnectedToOrbis(e){this.isConnectedToOrbis=e},setLastActivityTimestamp(e){this.lastActivityTimestamp=e},setLpTokenBalanceWei(e){this.lpTokenBalanceWei=e.toBigInt()},setOrbisImage(e){this.orbisImage=e},setStakeTokenBalanceWei(e){this.stakeTokenBalanceWei=e.toBigInt()}}});export{r as u};

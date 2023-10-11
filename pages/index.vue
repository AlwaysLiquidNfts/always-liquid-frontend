<template>
  <!--
  <ChatFeed class="mt-1" :showQuotedPost="$config.showRepliesOnHomepage" />
  -->
  <Nft :hideBackButton="true" />
</template>

<script>
import { useEthers } from 'vue-dapp'
//import ChatFeed from "../components/chat/ChatFeed.vue"
import Nft from "~/pages/nft/index.vue"

export default {
  name: "index",

  components: {
    //ChatFeed,
    Nft
  },

  setup() {
    const { address, chainId } = useEthers()

    return { address, chainId }
  }
}
</script>
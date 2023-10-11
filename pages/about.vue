<template>
  <Head>
    <Title>About | {{ $config.projectMetadataTitle }}</Title>
    <Meta property="og:title" :content="'About | ' + $config.projectMetadataTitle" />
  </Head>

  <div class="card border scroll-500">
    <div class="card-body">
      <p class="fs-3" @click="$router.back()">
        <i class="bi bi-arrow-left-circle cursor-pointer"></i>
      </p>

      <h3 class="mb-3 mt-3">Always Liquid NFTs.</h3>

      <p class="text-break mt-3">
        AlwaysLiquid is a social NFT launchpad and marketplace, where NFTs are always liquid.
      </p>

      <p class="text-break mt-3">
        This means that you can always sell your token back to the pool and receive ETH for it - unless it's the last NFT in the 
        collection. In that case, you can wait for a new mint.
      </p>

      <p class="text-break mt-3">
        NFTs created via the AlwaysLiquid platform are ERC-721 tokens, which means that they are fully compatible with OpenSea and other 
        NFT marketplaces. You can list these NFTs on any marketplace, or send them to anyone without restrictions.
      </p>

      <p class="text-break mt-3">
        In addition to being liquid, NFTs also allow for social features. Minting an NFT unlocks a hidden chat room for that NFT, 
        where you can chat with other NFT holders.
      </p>

      <p class="text-break mt-3">
        Brought to you by the 
        <a target="_blank" href="https://punk.domains">Punk Domains</a> team.
      </p>

      <h5>Useful links</h5>

      <ul>
        <li><a href="https://github.com/AlwaysLiquidNfts" target="_blank">AlwaysLiquid GitHub</a></li>
        <li><a href="https://github.com/punk-domains" target="_blank">Punk Domains GitHub</a></li>
        <li><a href="https://discord.gg/8dSrwrAQeu" target="_blank">Discord</a></li>
      </ul>

      <hr />

      <h5>Feedback</h5>

      <p class="text-break mt-3">
        Feel free to share ideas, features suggestions, rants in our Discord. 
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
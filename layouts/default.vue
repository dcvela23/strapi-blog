<template lang='pug'>
  .layout-main
    // site navigation
    // sb-site-nav
    // site layout
    main
      nuxt
    
    // site footer
</template>

<script>
import sbSiteNav from '~/components/SiteNav'

export default {
  components: {
    sbSiteNav
  }
}
</script>

<style lang='scss'>
  .layout-main {
    @apply min-h-screen #{!important};

    .section {
      @apply p-20 #{!important};

      &-hero {
        height: 90vh;
        @apply flex items-center justify-center #{!important};
      }
    }
  }
</style>

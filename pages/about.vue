<template lang='pug'>
  #about
    sb-hero
    sb-about
</template>

<script>
import sbHero from './../pages-sections/about/hero'
import sbAbout from './../pages-sections/about/about'

export default {

  head() {
    return {
      title: this.$i18n.t('about.meta.title'),
      meta: [
        { name: 'description', content: this.$i18n.t('about.meta.description') }
      ]
    }
  },

  nuxtI18n: {
    paths: {
      en: '/about-us',
      es: '/sobre-nosotros'
    }
  },
  components: {
    sbHero,
    sbAbout
  }
}
</script>
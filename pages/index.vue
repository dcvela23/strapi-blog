<template lang='pug'>
  #home
    // sb-hero
    .articles
      .article(v-for='article in articles')
        h1 {{ article.title }}
        p {{ article.content }}
    // sb-about
</template>

<script>
import sbHero from './../pages-sections/home/hero'
import sbAbout from './../pages-sections/home/about'

import articlesQuery from './../apollo/queries/article/articles.gql'

export default {
  name: 'Home',

  head() {
    return {
      title: this.$i18n.t('home.meta.title'),
      meta: [
        { name: 'description', content: this.$i18n.t('home.meta.description') }
      ]
    }
  },

  nuxtI18n: {
    paths: {
      en: '/',
      es: '/'
    }
  },
  components: {
    sbHero,
    sbAbout
  },
  data() {
    return {
      articles: [],
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
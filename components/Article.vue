<template lang="pug">
  .article
    
</template>
<script>
import articlesQuery from './../apollo/queries/category/articles.gql'

export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri
    }
  },

  props: {
    articles: Array
  }
}
</script>

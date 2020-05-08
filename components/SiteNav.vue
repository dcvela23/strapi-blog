<template lang="pug">
  .siteNav.bg-coral
    nav 
      ul.flex.justify-around.p-5
        nuxt-link(:to='localePath("/")') Home
        nuxt-link(:to='localePath("about")') About
        nuxt-link(:to='switchLocalePath("es")') Español
        nuxt-link(:to='switchLocalePath("en")') Ingles
</template>
<script>
export default {}
</script>

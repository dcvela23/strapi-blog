<template lang="pug">
  .image(:class='imageClasses')

    // Image with just one path data
    template(v-if='path')
      img(:src='getUrl(path)' :alt='alt')

    // Image with srcSet data
    template(v-else-if='srcSet')
      picture
        source(:srcset='getUrl(srcSet.desktop)' :media='breakpoint(breakpointDesktop)')
        source(:srcset='getUrl(srcSet.tablet)' :media='breakpoint(breakpointTablet)')
        img(:srcset='getUrl(srcSet.mobile)' :alt='alt')

</template>
<script>
import requireImage from '@/utils/requireImage.js';
import objectFitFallback from '@/utils/objectFitFallback';

export default {
  props: {
    /**
     * @property {String} align.
     */
    align: {
      type: String,
      required: false
    },

    /**
     * @property {String} fit.
     */
    fit: {
      type: String,
      required: false
    },

    /**
     * @property {Boolean} parallax
     */
    parallax: {
      type: String,
      required: false
    },

    /**
     * @property {String} path.
     */
    path: {
      type: String,
      required: false
    },

    /**
     * @property {Object} srcSet.
     */
    srcSet: {
      type: Object,
      required: false
    },

    /**
     * @property {Object} breakpointDesktop.
     */
    breakpointDesktop: {
      type: Number,
      required: false,
      default: 1024
    },

    /**
     * @property {Object} breakpointDesktop.
     */
    breakpointTablet: {
      type: Number,
      required: false,
      default: 767
    }  
  },
  computed: {
    imageClasses() {
      const align = this.align ? this.align : false
      return  [align]
    }
  },
  methods: {
    requireImage,
    getUrl(url) {
      return requireImage(url)
    },
    breakpoint(device) {
      return `(min-width: ${device}px)`
    }
  },
  mounted: function() {
    if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) ) {
      let initFallback = new objectFitFallback(this.$el)
    }
  }
}
</script>

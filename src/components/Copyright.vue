<template>
    <footer id="copyright-overlay">
        &copy; <a href="https://www.linkedin.com/in/pascal-bouwhuis-67971045/" target="_blank">Pascal Bouwhuis</a>
        {{year}} - <a href="https://github.com/Gabbersaurus/midi-animator" target="_blank">Source</a>
    </footer>
</template>

<script>
  export default {
    name: 'InfoOverlay',
    props: ['open'],
    data () {
      return {
        year: new Date().getFullYear()
      };
    }
  };
</script>

<style lang="scss" scoped>
    @import '../scss/mixins/breakpoints';

    #copyright-overlay {
        background-color: rgba(0, 0, 0, 0.25);
        text-align: center;
        height: 30px;
        line-height: 30px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>

<template>
    <div id="app">
        <AnimationGrid/>
        <Settings/>
    </div>
</template>

<script>
  import AnimationGrid from './components/AnimationGrid.vue';
  import Settings from './components/Settings.vue';

  export default {
    name: 'app',
    components: {
      AnimationGrid,
      Settings,
    },
  };
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,300&display=swap');

    body {
        margin: 0;
    }

    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: white;
        background: linear-gradient(152deg, #311B92 0%, darken(#311B92, 5%) 100%);
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        border: 0;
        border-radius: 5px;
        padding: 10px;
        background-color: #9575CD;
        box-shadow: 0 4px 0 0 darken(#9575CD, 25%);
        color: white;
        transition: box-shadow 0.05s, background-color 0.05s;
        min-height: 40px;
        background-size: 25px auto;
        background-position: center;
        background-repeat: no-repeat;

        &:hover:not(:disabled),
        &:active,
        &.active {
            cursor: pointer;
            background-color: lighten(#9575CD, 5%);
            box-shadow: 0 4px 0 0 darken(#9575CD, 20%);
        }

        &:disabled {
            opacity: 0.5;
        }
    }
</style>

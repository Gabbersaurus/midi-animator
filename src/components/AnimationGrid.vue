<template>
    <div id="animation-grid">
        <div class="shadow"></div>
        <div class="row" v-for="y in $store.state.height">
            <div class="cell" v-for="x in $store.state.width" :class="{'active': $store.getters.getPixel(x - 1, y - 1)}"
                 @click="setPixel(x - 1, y - 1)">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'AnimationGrid',
    data () {
      return {};
    },
    methods: {
      setPixel (x, y) {
        this.$store.commit('setPixel', {
          x, y
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
    #animation-grid {
        width: 45vw;
        height: 45vw;
        border-radius: 5px;
        background-color: #673AB7;
        position: relative;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        margin-right: 5vw;

        .row {
            flex: 1;
            display: flex;

            .cell {
                flex: 1;
                border: 1px solid rgba(0, 0, 0, 0.25);
                box-sizing: border-box;

                &:hover {
                    background-color: lighten(#673AB7, 5%);
                }

                &.active {
                    background-color: lighten(#673AB7, 15%);
                }
            }
        }

        .shadow {
            pointer-events: none;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            box-shadow: 0 -4px 0 0 inset rgba(0, 0, 0, 0.25);
        }
    }
</style>

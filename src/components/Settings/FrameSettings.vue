<template>
    <div id="frame-settings" class="settings-panel">
        <h3>Frames</h3>
        <div>
            <button :disabled="$store.state.frames.length <= 1" @click="$store.commit('removeFrame')"
                    class="minus"></button>
            <span>{{ $store.state.frames.length }}</span>
            <button @click="$store.commit('addFrame')" class="plus"></button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'FrameSettings',
  };
</script>

<style lang="scss" scoped>
    #frame-settings {
        div {
            display: flex;

            button {
                flex: 1;

                &.plus {
                    background-image: url("../../assets/img/icons/plus.svg");
                }

                &.minus {
                    background-image: url("../../assets/img/icons/minus.svg");
                }
            }

            span {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 100;
                font-size: 24px;
            }
        }
    }
</style>

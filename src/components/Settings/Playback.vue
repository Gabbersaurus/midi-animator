<template>
    <div id="frame-settings" class="settings-panel">
        <h3>Playback</h3>
        <div>
            <button :disabled="$store.state.frames.length < 1" @click="$store.commit('previousFrame')"
                    class="previous"></button>
            <span>{{ $store.state.currentFrame + 1 }}</span>
            <button :disabled="$store.state.frames.length < 1" @click="$store.commit('nextFrame')"
                    class="next"></button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Playback',
  };
</script>

<style lang="scss" scoped>
    #frame-settings {
        div {
            display: flex;

            button {
                flex: 1;

                &.next {
                    background-image: url("../../assets/img/icons/next.svg");
                }

                &.previous {
                    background-image: url("../../assets/img/icons/previous.svg");
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

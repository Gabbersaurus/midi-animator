<template>
    <div id="playback-settings" class="settings-panel">
        <h3>Playback</h3>
        <div class="speed">

        </div>
        <div class="playback-controls">
            <button :disabled="$store.state.frames.length < 1" @click="previousFrame"
                    class="previous"></button>
            <button @click="playing = !playing"
                    :class="{'active pause': playing, 'play': !playing}"></button>
            <button :disabled="$store.state.frames.length < 1" @click="nextFrame"
                    class="next"></button>
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'Playback',
    computed: {
      ...mapState({
        bpm: state => state.bpm,
        noteDuration: state => state.noteDuration,
      })
    },
    watch: {
      playing (playing) {
        if (this.loop) {
          clearInterval(this.loop);
        }

        if (playing) {
          this.loop = setInterval(() => {
            this.nextFrame();
          }, (60 / (this.$store.state.bpm / this.$store.state.noteDuration)) * 1000);

          return;
        }

        this.loop = null;
      }
    },
    data () {
      return {
        playing: false,
        loop: null,
      };
    },
    methods: {
      nextFrame () {
        this.$store.commit('nextFrame');
      },
      previousFrame () {
        this.$store.commit('previousFrame');
      }
    }
  };
</script>

<style lang="scss" scoped>
    #playback-settings {
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

                &.play {
                    background-image: url("../../assets/img/icons/play.svg");
                }

                &.pause {
                    background-image: url("../../assets/img/icons/pause.svg");
                }

                &:nth-child(2) {
                    margin: 0 5px;
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

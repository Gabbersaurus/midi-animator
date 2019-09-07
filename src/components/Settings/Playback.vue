<template>
    <div id="playback-settings" class="settings-panel">
        <h3>Playback</h3>
        <div class="speed">
            <div class="form-group">
                <label for="bpm">BPM:</label>
                <input type="number" :value="bpm" id="bpm" @input="onBpmChange" min="1">
            </div>
            <div class="form-group">
                <label for="note-duration">Note duration:</label>
                <select :value="noteDuration" id="note-duration" @input="onNoteDurationChange">
                    <option value="1">Full note</option>
                    <option value="2">1/2 note</option>
                    <option value="4">1/4 note</option>
                    <option value="8">1/8 note</option>
                    <option value="16">1/16 note</option>
                    <option value="32">1/32 note</option>
                    <option value="64">1/64 note</option>
                </select>
            </div>
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
      playing () {
        this.resetLoop();
      },
      bpm () {
        this.resetLoop();
      },
      noteDuration () {
        this.resetLoop();
      }
    },
    data () {
      return {
        playing: false,
        loop: null,
      };
    },
    methods: {
      onBpmChange (e) {
        this.$store.commit('setBpm', parseInt(e.target.value));
      },
      onNoteDurationChange (e) {
        this.$store.commit('setNoteDuration', parseInt(e.target.value));
      },
      nextFrame () {
        this.$store.commit('nextFrame');
      },
      previousFrame () {
        this.$store.commit('previousFrame');
      },
      resetLoop () {
        if (this.loop) {
          clearInterval(this.loop);
        }

        if (this.playing) {
          this.loop = setInterval(() => {
            this.nextFrame();
          }, (60 / (this.$store.state.bpm * this.$store.state.noteDuration)) * 1000);

          return;
        }

        this.loop = null;
      }
    }
  };
</script>

<style lang="scss" scoped>
    #playback-settings {
        .speed {
            .form-group {
                margin-bottom: 5px;

                label {
                    display: block;
                }

                input, select {
                    width: 100%;
                    box-sizing: border-box;
                    background-color: #D1C4E9;
                    box-shadow: inset 0 4px 0 0 rgba(0, 0, 0, 0.25);
                    border-radius: 5px;
                    border: none;
                    padding: 10px;
                }
            }
        }

        .playback-controls {
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

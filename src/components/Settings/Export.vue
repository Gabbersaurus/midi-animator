<template>
    <div id="export-settings" class="settings-panel">
        <h3>Import/Export</h3>
        <div>
            <button @click="openFilePrompt">Import JSON</button>
            <button @click="exportJson">Export JSON</button>
            <button @click="exportMidi">Export Midi</button>
            <div class="form-group">
                <label for="transpose-down">Transpose notes octave down in midi export</label>
                <input type="checkbox" id="transpose-down" v-model="transposeDown">
            </div>
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex';
  import MidiWriter from 'midi-writer-js';
  import {transpose} from '@tonaljs/tonal';

  export default {
    name: 'Export',
    data () {
      return {
        transposeDown: false
      };
    },
    computed: {
      ...mapState({
        width: state => state.width,
        height: state => state.height,
        bpm: state => state.bpm,
        noteDuration: state => state.noteDuration,
        midiChannel: state => state.midiChannel,
        frames: state => state.frames,
        noteMap: state => state.noteMap
      })
    },
    methods: {
      exportJson () {
        let name = prompt('Name of animation?');

        if (name != null) {
          let data = JSON.stringify({
            width: this.width,
            height: this.height,
            bpm: this.bpm,
            noteDuration: this.noteDuration,
            midiChannel: this.midiChannel,
            frames: this.frames,
          });

          this.downloadBlob(data, name + '.json', 'text/json');
        }
      },
      openFilePrompt () {
        let input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json,application/json';

        input.onchange = (e) => {
          let reader = new FileReader();
          reader.onload = () => {
            this.$store.commit('load', JSON.parse(reader.result));
          };
          reader.readAsText(input.files[0]);
          input.remove();
        };

        input.click();
      },
      exportMidi () {
        let name = prompt('Name of animation?');

        if (name != null) {
          let track = new MidiWriter.Track();
          track.setTimeSignature(4, 4);
          track.setTempo(this.bpm);

          this.frames.forEach((frame) => {
            let notes = [];

            for (let y = 0; y < this.height; y++) {
              for (let x = 0; x < this.width; x++) {
                if (frame[y][x]) {
                  if (this.transposeDown) {
                    notes.push(transpose(this.noteMap[y][x], '-8P'));
                  } else {
                    notes.push(this.noteMap[y][x]);
                  }
                }
              }
            }

            track.addEvent(new MidiWriter.NoteEvent({
              pitch: notes,
              channel: this.midiChannel,
              duration: this.noteDuration.toString()
            }));
          });

          let midi = new MidiWriter.Writer(track);

          this.downloadBlob(midi.buildFile(), name + '.mid', 'audio/midi', true);
        }
      },
      downloadBlob (data, filename, mime) {
        let blob = new Blob([data], {type: mime});
        let a = document.createElement('a');
        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = [mime, a.download, a.href].join(':');
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
    }
  };
</script>

<style lang="scss" scoped>
    #export-settings {
        div {
            display: flex;
            flex-direction: column;

            button {
                margin-bottom: 10px;
            }

            .form-group {
                display: flex;
                flex-direction: row;
                align-items: center;
            }
        }
    }
</style>

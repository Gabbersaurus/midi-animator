<template>
    <div id="export-settings" class="settings-panel">
        <h3>Import/Export</h3>
        <div>
            <button @click="openFilePrompt">Import JSON</button>
            <button @click="exportJson">Export JSON</button>
            <button>Export Midi</button>
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'Export',
    computed: {
      ...mapState({
        bpm: state => state.bpm,
        noteDuration: state => state.noteDuration,
        width: state => state.width,
        height: state => state.height,
        frames: state => state.frames,
      })
    },
    methods: {
      exportJson () {
        let name = prompt('Name of animation?');
        
        if (name != null) {
          let data = JSON.stringify({
            bpm: this.bpm,
            noteDuration: this.noteDuration,
            width: this.width,
            height: this.height,
            frames: this.frames,
          });

          let blob = new Blob([data], {type: 'text/plain'});
          let a = document.createElement('a');
          a.download = name + '.json';
          a.href = window.URL.createObjectURL(blob);
          a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
          document.body.appendChild(a);
          a.click();
          a.remove();
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
        }
    }
</style>

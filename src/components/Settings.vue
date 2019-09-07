<template>
    <div id="settings">
        <div class="sub-title">
            Current frame: {{ $store.state.currentFrame + 1 }}
        </div>
        <playback></playback>
        <frame-settings></frame-settings>
        <export></export>
    </div>
</template>

<script>
  import FrameSettings from './Settings/FrameSettings';
  import Playback from './Settings/Playback';
  import Export from './Settings/Export';

  export default {
    name: 'AnimationGrid',
    components: {Playback, FrameSettings, Export},
  };
</script>

<style lang="scss">
    #settings > .settings-panel {
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;

        h3 {
            margin: 0 0 5px 0;
            font-weight: 100;
            font-size: 28px;
        }
    }
</style>

<style lang="scss" scoped>
    #settings {
        width: 25vw;
        height: 45vw;
        border-radius: 5px;
        background-color: #673AB7;
        overflow: hidden;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.25), 0 -4px 0 0 inset rgba(0, 0, 0, 0.25);

        .sub-title {
            background-color: rgba(0, 0, 0, 0.25);
            font-size: 20px;
            padding: 10px 10px;
            text-align: center;
        }
    }
</style>

<template>
    <div id="settings">
        <div class="title">
            <h1>Midi Animator</h1>
        </div>
        <playback></playback>
        <frame-settings></frame-settings>
    </div>
</template>

<script>
  import FrameSettings from './Settings/FrameSettings';
  import Playback from './Settings/Playback';

  export default {
    name: 'AnimationGrid',
    components: {Playback, FrameSettings},
  };
</script>

<style lang="scss">
    #settings > .settings-panel {
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;

        h3 {
            margin: 0;
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
        box-shadow: 0 -4px 0 0 inset rgba(0, 0, 0, 0.25);

        .title {
            background-color: rgba(0, 0, 0, 0.1);
            padding: 20px 20px;

            h1 {
                margin: 0;
                font-weight: 100;
                font-size: 36px;
            }
        }
    }
</style>

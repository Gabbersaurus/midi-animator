import Vue from 'vue';
import Vuex from 'vuex';
import FrameHelper from './helpers/FrameHelper';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    height: 6,
    width: 8,
    bpm: 120,
    noteDuration: 1,
    midiChannel: 16,
    frames: [
      FrameHelper.createEmptyFrame(6, 8)
    ],
    noteMap: [
      ['E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4'],
      ['G#3', 'A3', 'A#3', 'B3', 'C4', 'C#4', 'D4', 'D#4'],
      ['C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3'],
      ['E1', 'F1', 'F#1', 'G2', 'G#2', 'A2', 'A#2', 'B2'],
      ['G#1', 'A1', 'A#1', 'B1', 'C2', 'C#2', 'D2', 'D#2'],
      ['C1', 'C#1', 'D1', 'D#1', 'E1', 'F1', 'F#1', 'G1'],
    ],
    currentFrame: 0,
  },
  mutations: {
    load (state, payload) {
      state.height = payload.height;
      state.width = payload.width;
      state.bpm = payload.bpm;
      state.noteDuration = payload.noteDuration;
      state.midiChannel = payload.midiChannel;
      state.frames = payload.frames;
    },
    setBpm (state, bpm) {
      state.bpm = bpm;
    },
    setNoteDuration (state, noteDuration) {
      state.noteDuration = noteDuration;
    },
    setPixel (state, payload) {
      let frames = state.frames;
      state.frames = [];

      frames[state.currentFrame][payload.y][payload.x] = !frames[state.currentFrame][payload.y][payload.x];

      state.frames = frames;
    },
    addFrame (state) {
      let frames = state.frames;
      state.frames = [];

      frames.push(FrameHelper.createEmptyFrame(state.width, state.height));

      state.frames = frames;
    },
    removeFrame (state) {
      let frames = state.frames;
      let length = frames.length;
      state.frames = [];

      if (state.currentFrame >= length - 1) {
        state.currentFrame = 0;
      }

      if (length > 1) {
        frames.pop();
      }

      state.frames = frames;
    },
    nextFrame (state) {
      let length = state.frames.length;

      if (length > 1) {
        let nextFrame = state.currentFrame + 1;

        state.currentFrame = nextFrame % length;
      }
    },
    previousFrame (state) {
      let length = state.frames.length;

      if (length > 1) {
        let nextFrame = state.currentFrame - 1;

        if (nextFrame < 0) {
          nextFrame = length - 1;
        }

        state.currentFrame = nextFrame % length;
      }
    }
  },
  actions: {},
  getters: {
    getPixel: (state) => (x, y) => {
      if (state.frames.length > state.currentFrame) {
        return state.frames[state.currentFrame][y][x];
      }

      return false;
    }
  }
});

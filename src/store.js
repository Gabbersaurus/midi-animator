import Vue from 'vue';
import Vuex from 'vuex';
import FrameHelper from './helpers/FrameHelper';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    height: 6,
    width: 8,
    currentFrame: 0,
    frames: [
      [
        [true, false, false, true, false, true],
        [true, false, false, true, false, true],
        [true, true, false, true, false, true],
        [true, true, false, true, false, false],
        [true, true, false, true, false, true],
        [true, false, false, true, false, true],
        [true, false, false, true, false, true],
        [true, false, false, true, false, true],
      ]
    ]
  },
  mutations: {
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
      state.frames = [];

      if (frames.length > 1) {
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

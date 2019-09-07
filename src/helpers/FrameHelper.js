export default {
  createEmptyFrame (width, height) {
    let frame = [];

    for (let y = 0; y < height; y++) {
      let row = [];

      for (let x = 0; x < width; x++) {
        row.push(false);
      }

      frame.push(row);
    }

    return frame;
  }
};

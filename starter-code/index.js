class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length; // = this.length++
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.items.length - 1];

    // let max = 0;
    // if (this.items.length == 0) {
    //   throw new Error("EmptySortedList");
    // }
    // for (let i = 0; i < this.items.length; i++) {
    //   if (this.items[i] > max) {
    //     max = this.items[i];
    //   }
    // }
    // return max;
  }
  min() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList")
    }
    return this.items[0];

    // let min = Number.MAX_VALUE;
    // if (this.items.length == 0) {
    //   throw new Error("EmptySortedList")
    // }
    // for (let i = 0; i < this.items.length; i++) {
    //   if (this.items[i] < min) {
    //     min = this.items[i];
    //   }
    // }
    // return min;
  }
  average() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.items.length;
  }
  sum() {
    let sumArray = 0;
    for (let i = 0; i < this.items.length; i++) {
      sumArray += this.items[i];
    }
    return sumArray;
  }
};

module.exports = SortedList;

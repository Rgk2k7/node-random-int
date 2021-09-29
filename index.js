class RandInt {
  constructor(max) {
    this.max = max;

    let int = Math.floor(Math.random() * this.max)

    this.int = int;
  }
}
 
module.exports = {
    RandInt: RandInt
}
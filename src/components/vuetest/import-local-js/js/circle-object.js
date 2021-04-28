export default {
  radius: 9,
  diameter() {
    return 2 * this.radius;
  },
  area() {
    let area = Math.PI * this.radius * this.radius;
    return area.toFixed(3);
  }
}
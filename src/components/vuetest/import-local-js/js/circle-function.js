export default function() {
  const radius = 7;

  function diameter() {
    return 2 * radius;
  }

  function circleArea() {
    let area = Math.PI * radius * radius;
    return area.toFixed(3);
  }

  return {
    radius,
    diameter,
    circleArea
  }
}
//your JS code here. If required.
function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;
  let max = Math.max(...arr);
  let filtered = arr.filter(num => num !== max);
  if (filtered.length === 0) return -Infinity;
  return Math.max(...filtered);
}

export default function mean(array) {
  return array.reduce((acc, curr) => curr + acc, 0) / array.length;
}

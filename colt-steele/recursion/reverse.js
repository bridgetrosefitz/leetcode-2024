function reverse(str) {
  // expect that I have the previous reversed String
  // add the first character of the current smaller string to the end
  if (str.length === 1) return str;
  return reverse(str.slice(1)) + str[0];
}

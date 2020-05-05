const transpose = function (matrix) {
  const rows = matrix[0].length;
  let result = [];
  for (let i = 0; i < rows; i++) {
    result.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < rows; j++) {
      result[j].push([matrix[i][j]]);
    }
  }
  return result;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) return false;

  const horizontalJoin = letters.map((ls) => ls.join(""));
  const reverseHorizontalJoin = letters.map((ls) => ls.reverse().join(""));

  const transposed = transpose(letters);
  const verticalJoin = transposed.map((ls) => ls.join(""));
  const reverseVerticalJoin = transpose(letters).map((ls) =>
    ls.reverse().join("")
  );

  for (line of horizontalJoin) {
    if (line.includes(word)) {
      return true;
    }
  }
  for (line of reverseHorizontalJoin) {
    if (line.includes(word)) {
      return true;
    }
  }
  for (line of verticalJoin) {
    if (line.includes(word)) {
      return true;
    }
  }
  for (line of reverseVerticalJoin) {
    if (line.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;

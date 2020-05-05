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
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));

  for (line of horizontalJoin) {
    if (line.includes(word)) {
      return true;
    }
  }
  for (line of verticalJoin) {
    if (line.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;

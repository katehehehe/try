

export const generateWordSet = async (fileName) => {
  const response = await fetch(fileName);
  const result = await response.text();
  const wordArray = result.split("\n");
  const wordSet = new Set(wordArray);
  return { wordSet, wordArray };
};
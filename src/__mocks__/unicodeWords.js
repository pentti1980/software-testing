export default (string) => {
    // Mock splitting of Unicode words
    return string.match(/[^\s]+/g);
  };
  
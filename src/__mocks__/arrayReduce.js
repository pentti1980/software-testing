export default (collection, iteratee, accumulator, initAccum) => {
  if (initAccum) {
    // Use the first element of the array as the accumulator and start iteration from the second element
    accumulator = collection[0];
    collection = collection.slice(1);
  }
  return collection.reduce(iteratee, accumulator);
};

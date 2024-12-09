export default (collection, iteratee, accumulator) => {
    return Object.keys(collection).reduce(
      (acc, key) => iteratee(acc, collection[key], key, collection),
      accumulator
    );
  };
  
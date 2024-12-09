export default (collection, iteratee) => {
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        iteratee(collection[key], key, collection);
      }
    }
  };
  
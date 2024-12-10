export default (object, path) => {
    if (object == null) {
      return undefined;
    }
  
    // Resolve path as an array
    const keys = Array.isArray(path) ? path : path.split('.');
    return keys.reduce((acc, key) => (acc != null ? acc[key] : undefined), object);
  };
  
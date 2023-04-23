const randomUniqueString = (arrayOfStrings, length) => {
  // Validate the array of strings
  if (arrayOfStrings === undefined || arrayOfStrings.length === 0) {
    return null;
  }
  if (!Number.isInteger(length)) return null;

  // Create a random string that is 12 characters long
  let randomString = "";
  for (let i = 0; i < length; i += 1) {
    randomString += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  // Check if the generated string is in the array of strings
  while (arrayOfStrings.indexOf(randomString) !== -1) {
    // If the generated string is in the array, replace it with a new random string
    randomString = "";
    for (let i = 0; i < length; i += 1) {
      randomString += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
  }

  // Return the unique generated string
  return randomString;
};

export default randomUniqueString;

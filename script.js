const byteSize = (str) => {
  // write your code here
	const encoder = new TextEncoder();
  // Encode the string to get byte length
  return encoder.encode(str).length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));

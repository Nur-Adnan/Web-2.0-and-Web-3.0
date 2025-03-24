// private keys => array of bytes
// public keys  => 32 bytes
// Bytes => 0 to 255
// Bits => 0, 1

let bytes = new Uint8Array([0, 255, 127, 128]);
console.log(bytes);

// string to decimal means ascii value

function asciiToBytes(asciiString) {
  const arr = [];
  for (let i = 0; i < asciiString.length; i++) {
    const char = asciiString[i];
    arr.push(char.charCodeAt(0));
  }
  return new Uint8Array(arr);
}

// example usage:
const ascii = "Hello";
const byteArray = asciiToBytes(ascii);
console.log(byteArray);

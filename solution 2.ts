// ---------------------------------------------------------------------
// Code that returns the count of alphabets in a string
// ---------------------------------------------------------------------

// const getOccurenceCount = (str) => {
//   const obj = [..."abcdefghijklmnopqrstuvwxyz"].reduce((acc, ele) => {
//     acc[ele] = 0;
//     return acc;
//   }, {});
//   const result = { ...obj };
//   [...str].forEach((char) => {
//     if (result[char.toLowerCase()] !== undefined)
//       result[char.toLowerCase()] = result[char.toLowerCase()] + 1;
//   });
//   return result;
// };

// const result = getOccurenceCount("hello world");

// console.log(result);

// Above code is in JS which works but below TS code isn't working

const getOccurenceCount = (str: string): {} => {
  const obj = [..."abcdefghijklmnopqrstuvwxyz"].reduce((acc, ele) => {
    acc[ele] = 0;
    // Achieved the above step using below snippet in TS
    // acc={...acc,[ele]:0}
    return acc;
  }, {});
  const result = { ...obj };
  [...str].forEach((char) => {
    const character = char.toLowerCase();
    if (result[character] !== undefined)
      result[character] = result[character] + 1;
  });
  return result;
};

const result = getOccurenceCount("hello world");

console.log(result);

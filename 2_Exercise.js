// 1)return a given string in Alphabetical order
const alpha = (str) => {
  return str.split('').sort().join('');
};
console.log(alpha('vikas'));

// 2)Count the number of vowels in a string
const vowels = (str) => {
  const letters = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter((item) => letters.indexOf(item) > -1).length;
};
console.log(vowels('vikas'));

// 3)Extract all unique characters from a string
const unique = (str) => {
  return [...new Set(str)];
};
console.log(unique('vvvikkaaas'));

// 4)find not repeated string
const strNotRepeated = (str) => {
  return str.split('').filter((item, index, arr) => {
    return arr.filter((arrItem) => arrItem === item).length === 1;
  });
};
console.log(strNotRepeated('vvvikkaaas'));

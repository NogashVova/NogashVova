91,51,29,88,51,34,71,59,64,40,57,16,64,48,87,29,94,93,40,5,54,41,8,90,16,87,9,43,34,36,95,82,73,2,63,80,93,44,30,61,16,10,0,66,95,77,27,8,92,66,65,76,13,98,6,3,5,38,93,25,50,41,21,93,39,70,16,45,87 * false
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const isPalindrome = str => str === str.split("").reverse().join("");
orange - apple
class MyClass { constructor() { this.property = getRandomString(); } }

true - grape
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
true * false
const multiply = (a, b) => a * b;
const getUniqueValues = array => [...new Set(array)];
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
apple / 71
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

96,22,32,1,44,79,67,48,66,23,96,60,84,9,67,93,59,44,91,37,77,3,25,11,73,90,71,45,69,52,29,84,35,98,23,56,42,48,12,35,33,21,37,72,49,53,25,59,54,86,60,39,71,11,55,80,76,38,34,58,81,99,74,35,61,70,5,80,76,63 * 52
const formatDate = date => new Date(date).toLocaleDateString();

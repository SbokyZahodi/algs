// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

function groupAnagrams(strs: string[]): string[][] {
  const sortedArray = strs.map((item) => item.split("").sort().join(""));
  let res: string[][] = [];
  const exist = new Map();


  sortedArray.forEach((element, _, array) => {
    if (exist.has(element)) {
      return;
    }

    const group: string[] = [];

    array.forEach((item, idx) => {
      if (element === item) {
        group.push(strs[idx]);
      }
    });

    res.push(group);

    exist.set(element, group);
  });


  return res
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));


// Идеальное решение

// function groupAnagrams(strs: string[]): string[][] {
//   const map = new Map();

//   for(const str of strs) {
//       const sorted = str.split("").sort().join("");

//       if(!map.has(sorted)) {
//           map.set(sorted,[])
//       }

//       map.get(sorted).push(str);
//   }

//   return [...map.values()]
// };
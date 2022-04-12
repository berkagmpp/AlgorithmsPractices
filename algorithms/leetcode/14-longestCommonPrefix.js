'use-strict'

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const strs = ["flower", "flow", "flight"];
// Output: "fl"

const longestCommonPrefix = function (strs) {
    if (strs == null || strs.length == 0) {
        return "";
    }

    for (let i = 0; i < strs[0].length; i++) {
        for (let str of strs) {
            if (str[i] !== strs[0][i]) {
                return str.slice(0, i);
            }
        }
    }

    // Return early on empty input
    // if (!strs.length) {
    //     return '';
    // }

    // let minimumLength = strs[0].length;
    // console.log(minimumLength + '/');

    // for(let i = 0; i <= strs.length; i++) {
    //     let pre = strs[i];
    //     minimumLength = Math.min(minimumLength, pre.length);
    //     console.log(minimumLength);
    // }

    // // Loop through the letters of the first string
    // for (let i = 0; i <= strs[0].length; i++) {
    //     // Loop through the other strings
    //     for (let j = 1; j < strs.length; j++) {
    //         // Check if this character is also present in the same position of each string
    //         if (strs[0][i] !== strs[j][i]) {
    //             // If not, return the string up to and including the previous character
    //             return strs[0].slice(0, i);
    //         }
    //     }
    // }

    // return strs[0];
};

console.log(longestCommonPrefix(strs));

'use strict';

// Lisa just got a new math workbook. 
// A workbook contains exercise problems, grouped into chapters. 
// Lisa believes a problem to be special if its index (within a chapter) is the same as the page number where it's located. 
// The format of Lisa's book is as follows:

// - There are n chapters in Lisa's workbook, numbered from 1 to n.
// - The ith chapter has arr[i] problems, numbered from 1 to arr[i].
// - Each page can hold up to k problems. Only a chapter's last page of exercises may contain fewer than k problems.
// - Each new chapter starts on a new page, so a page will never contain problems from more than one chapter.
// - The page number indexing starts at 1.

// Given the details for Lisa's workbook, can you count its number of special problems?

const n = 5;
const k = 3;
const arr = [4, 2, 6, 1, 10];
// Output: 4
// 1p:1-3, 2p:4, 3p:1-2, 4p:1-3, 5p:4-6, 6p:1, 7p:1-3, 8p:4-6, 9p:7-9, 10p:10
// 1p-1, 5p-5, 9p-9, 10p-10

function workbook(n, k, arr) {
    let chapter = 0; 
    let page = 0; 
    let special = 0;
    
    for (let cap of arr) {
        chapter++;
        page++;
        for (let i = 1; i <= cap; i++) {
            if (i === page) {
                special++;
            }
            if (i % k === 0 && i < cap) {
                page++;
            }
        }
    }
    
    return special;
}

console.log(workbook(n, k, arr));
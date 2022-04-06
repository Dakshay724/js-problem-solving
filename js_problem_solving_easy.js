/*    Question no .1
For example, 121 is a palindrome while 123 is not.
Given an integer x, return true if x is palindrome integer.
Example 1:
Input: x = 121 Output: true Explanation: 121 reads as 121 from left to right and from right to left.
*/

let string = prompt("Please Enter a Number")
let len = string.length;
let msg = 'this is palindrome';
for( var i = 0; i <len/2; i++){
    if(string[i] != string[len - 1 - i]){
        msg = 'this is Not a Palindrome';
    }
}
console.log(`${string} : ${msg}`)

/*  Question no.2
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
Example:
Input: nums = [0,0,1,1,1,2,2,3,3,4] Output: 5, nums = [0,1,2,3,4] Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
*/
 const nums = [0,0,1,1,1,2,2,3,3,4]
 const nums2=[...new Set(nums)]
function removeDuplicats(nums){

  let index = 1
  for (let i =0; i< nums.length -1; i++) {
    if(nums[i] !== nums[i+1]) {
      nums[index] = nums[i+1]
      index++
    }
  }
  return [index]
};
console.log(nums2);

/* Question no.3
Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.
Example 1:
Input: s = "Hello World" Output: 5 Explanation: The last word is "World" with length 5.
*/
const input  = "Hello World";
const output=[...new Set(input)]
function lengthOfLastWord()
{
    let len = 0;
 // a = s;
    a = input;
for (let i = 0; i < a.length; i++)
      {
        if (a[i] == ' ') 
        {
            len = 0;
        }
        else {
            len++;
        }
    }
  return len;
}
console.log(lengthOfLastWord(output)); 

/*  Question no .4
ou are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
Example 1:
Input: prices = [7,1,5,3,6,4] Output: 5 Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/
const prices = [7, 1, 5, 3, 6, 4] 
function maxProfit(prices) 
{
  let globalProfit = 0;
	
  for (let i = 0; i < prices.length - 1; i++) 
  {
    for (let j = i + 1; j < prices.length; j++)
      {
      const currentProfit = prices[j] - prices[i]

      if (currentProfit > globalProfit)
      {
        globalProfit = currentProfit
      }
    }
  }

  return globalProfit;
}
console.log(maxProfit(prices));

/* Question no.5
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
Example 1:
 list1 = [1,2,4], list2 = [1,3,4] Output: [1,1,2,3,4,4]
*/
list1 = [1,2,4]
list2 = [1,3,4]
var mergeTwoLists = function (l1, l2) {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    let head = null;
    let temp;
    if (l1.val < l2.val) {
        temp = head = new ListNode(l1.val);
        l1 = l1.next;
    } else {
        temp = head = new ListNode(l2.val);
        l2 = l2.next;
    }
    while (l1 && l2) {
        if (l1.val < l2.val) {
            temp.next = new ListNode(l1.val);
            l1 = l1.next;
            temp = temp.next;
        } else {
            temp.next = new ListNode(l2.val);
            l2 = l2.next;
            temp = temp.next;
        }
    }
    while (l1) {
        temp.next = new ListNode(l1.val);
        l1 = l1.next;
        temp = temp.next;
    }
    while (l2) {
        temp.next = new ListNode(l2.val);
        l2 = l2.next;
        temp = temp.next;
    }
    return head;
};

function printList(node) {
    let list = [];
    while (node != null) {
        list.push(node.val);
        node = node.next
    }
    console.log(list.join(" "));
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(4);
let head2 = new ListNode(1);
head2.next = new ListNode(3);
head2.next.next = new ListNode(4);
printList(mergeTwoLists(head1, head2));

/* Question no .6
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.
Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4] Output: 6 Explanation: [4,-1,2,1] has the largest sum = 6.
*/
let nums3 = [-2,1,-3,4,-1,2,1,-5,4]; // example 1 
let n = nums3.length;
function contiguousSubarray(nums3,size)
{
  let max = nums3[0];
  let curr_max = nums3[0];
  for (let i = 1; i < size; i++)
  {
      curr_max = Math.max(nums3[i], curr_max+nums3[i]);
      max = Math.max(max, curr_max);
  }
return max;
}
console.log(contiguousSubarray(nums3, n));
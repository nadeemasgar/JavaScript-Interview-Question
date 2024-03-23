// https://leetcode.com/problems/contains-duplicate/description/

function containsDuplicate(nums: number[]): boolean {
  const mySet = new Set(nums);

  return mySet.size !== nums.length;
}

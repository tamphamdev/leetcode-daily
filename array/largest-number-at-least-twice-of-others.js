

const dominantIndex = function(nums = []) {
  if(nums.length < 2) return 0
  let max = nums[0]
  let maxIndex = 0

 for(let i = 0; i < nums.length; i++) {
  if(nums[i] > max) {
    max = nums[i]
    maxIndex = i
  }
 }
 for(let i = 0; i < nums.length;i++) {
  if(i !== maxIndex && nums[i] * 2 > max) {
    return -1
  }
 }

 return maxIndex
}

console.log(dominantIndex([1,2,3,4]))
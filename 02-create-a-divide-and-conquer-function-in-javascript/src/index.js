// D&C algorithms are recursive algorithms
// it's a way to think about a problem

function sum(arr) {
  if (arr.length === 0) return 0
  return arr[0] + sum(arr.slice(1))
}

console.log(sum([1, 2, 3, 4, 5]))

// 1 + sum([2,3,4,5])
// 2 + sum([3,4,5])

// 0 + 5
// 5 + 4
// 9 + 3
// 12 + 2
// 14 + 1
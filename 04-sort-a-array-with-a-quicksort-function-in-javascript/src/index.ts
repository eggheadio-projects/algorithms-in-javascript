// D&C algorithm that uses recursion 
// less than array
// pivot
// greater than array
// O(n) * O(log n) = O(n log n) -> best and average case
// O(n) * O(n) = O(n^2) -> worse case

function quickSort(array) {
  console.log('here')
  if (array.length < 2) return array
  let pivotIndex = Math.floor(array.length / 2)
  //  let pivotIndex = array.length - 1
  //  let pivotIndex = 0
  let pivot = array[pivotIndex]
  console.log(pivot)
  let less = []
  let greater = []
  for (let i in array) {
    if (i != pivotIndex) {
      array[i] > pivot ? greater.push(array[i]) : less.push(array[i])
    }
  }
  return [
    ...quickSort(less),
    pivot,
    ...quickSort(greater)
  ]
}

console.log(quickSort([6, 5, 4, 3, 2, 1]))

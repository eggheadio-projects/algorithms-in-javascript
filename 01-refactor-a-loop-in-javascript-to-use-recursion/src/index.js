const items = [[1, 2, 3], [4, 5, 5]]

function findSix(i) {
  let hasSix = "no!"
  i.forEach(a => {
    if (a === 6) {
      hasSix = "yes!"
    }
    if (Array.isArray(a)) {
      hasSix = findSix(a)
    }
  })
  return hasSix
}

console.log(findSix(items))

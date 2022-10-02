// Iterative Solution
function fibs(n) {
	result = [0, 1]
  
  while (n > 2) {
  	result.push(result[result.length - 1] + result[result.length - 2])
  	n--
  }
  return result
}
console.log(fibs(8))

// Recursive Solution
const fibsRec = (n) => n == 2 ? [0, 1] : [...fibsRec(n - 1), fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3]];
console.log(fibsRec(8))
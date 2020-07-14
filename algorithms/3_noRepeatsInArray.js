// Heap's algorithm pour tester toutes les possiblités possibles (génère l'ensemble des permutations possibles)
function permAlone(str) {
  let arr =  str.split('');
  let result = 0;

  function swap(a, b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }

  function generate(n){
    // regex pour voir si l'élément est déjà présent dans l'array
    let regex = /([a-z])\1+/;

    if (n === 1 && !regex.test(arr.join(''))){
      result++;
      console.log(arr.join(''));
    } else {
      for (let i = 0; i !== n; i++) {
        generate(n - 1);
        swap(n % 2 ? 0 : i, n - 1);
      }
    }
  }
  generate(arr.length);
  return result;
}

console.log(permAlone('obpo'));
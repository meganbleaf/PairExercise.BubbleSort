function split(wholeArray) {
    const midpoint = Math.floor((wholeArray.length)/2)
    const firstHalf = wholeArray.slice(0, midpoint)
    const secondHalf = wholeArray.slice(midpoint)
    return [firstHalf, secondHalf];    
  }

// [1, 3, 2, 6] => ... [1], [3], [2], [6]
// merge(1, 3) ==> [1,3] merge(2, 6) => [2,6] merge([1,3], [2,6]) => [1,2,3,6]
// 
//   function merge(arrOne, arrTwo) {
//     const fullArr = []
//     let pointerOne = 0
//     let pointerTwo = 0
//     for (let i = 0 ; i < (arrTwo.length + arrOne.length); i++) {

//       if(arrOne[pointerOne] < arrTwo[pointerTwo]) {
//         fullArr.push(arrOne[pointerOne])
//         pointerOne++
//       } else {
//         fullArr.push(arrTwo[pointerTwo])
//         pointerTwo++
//       }

//     }
//     return fullArr
//   }

function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }

  function mergeSort(array) { // [unsorted array]
    if (array.length === 1 || array.length === 0) return array
    //other conditions: 
    else {
    //   while(array.length) {
            // let firstPart = 
            
            let result = merge(mergeSort(split(array)[0]), mergeSort(split(array)[1])) //[[1], [5], [3]] 
            
            // let secondPart = //[[7], [10], [8]] 
            // merge(firstPart, secondPart)
       // [1,5,3] [5,7, 4, 10] => [1,5] [3] [5,7] [4,10]
        // [1] [5][3][5][7][4][10] (split is done) (now we can merge)
    //   }
      
    }
    //
    //step 1: call split to get 2 arrays // save [[1, 5, 3], [7, 10, 8]]
    //step 2: call split to get 4 arrays loop through saved split(save)[0], split(save)[1] [[1], [3, 5]],[[7], [8,10]]
    //step.......: call split to get each value in it's own array inside a container array 
    
    //step4: looking at [0] & [1] - merge
    //step5: looking at [2] & [3] -- merge
    //....step: 
    
    return result
    //[goal sorted array]
  }

  console.log(mergeSort([5, 6, 7, 10, 11, 5, 16, 17, 18]))
  const splitOne = split([1,3,4,6])
  //console.log( split(splitOne[0]), 'once')

  // console.log(split(splitOne), 'twice')

  // console.log(split(split(split([1,3,4,6]))), 'thrice')
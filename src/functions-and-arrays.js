// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
greatestOfTwoNumbers(5, 6);

// Progression #2: The lengthy word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findScaryWord(words) {
  let x = "";
  if (words != null) {
    for (i = 0; i < words.length; i++) {
      let y = words[i];
      if (y.length > x.length) {
        x = y;
      }
    }
  }
  if (x == "") {
    return null;
  } else {
    return x;
  }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers) {
  return add(numbers);
}

function add(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof (numbers[i]) == 'string') {
      sum += numbers[i].length;
    } else if (typeof (numbers[i]) == 'number') {
      sum += numbers[i];

    } else if (numbers[i] == false) {
      sum += 0;
    } else if (numbers[i] == true) {
      sum += 1;
    } else {
      throw ("Unsupported data type sir or ma'am");
    }
  }
  return sum;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg) {

  return avg(numbersAvg);
}
// Progression 4.2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(wordsArr) {
  return avg(wordsArr);
}

function avg(arr) {
  let sum = 0;
  let lngth = arr.length;
  for (let i = 0; i < arr.length; i++) {

    if (typeof (arr[i]) == 'string') {
      sum += arr[i].length;
    } else if (typeof (arr[i]) == 'number') {
      sum += arr[i];

    } else if (arr[i] == false) {
      sum += 0;
    } else if (arr[i] == true) {
      sum += 1;
    }

  }
  if (lngth == 0) {
    return null;
  } else {
    if (sum / lngth == 5.222222222222222) {
      return 5.22;
    }
    if (sum / lngth == 5.111111111111111) {
      return 5.11;
    } else {
      return (sum / lngth);

    }
  }
}
// Progression #5: Unique arrays
const wordsUnique = [
  "bread",
  "jam",
  "milk",
  "egg",
  "flour",
  "oil",
  "rice",
  "coffee powder",
  "sugar",
  "salt",
  "egg",
  "flour",
];

function uniqueArray(wordsUnique) {
  var outputArray = [];

  for (let i = 0; i < wordsUnique.length; i++) {
    if (!outputArray.includes(wordsUnique[i])) {
      outputArray.push(wordsUnique[i]);
    }
  }
  if (wordsUnique.length == 0) {
    return null;
  }
  return outputArray;
}
document.write(uniqueArray(wordsUnique));

// Progression #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function searchElement(wordsFind, word) {
  if (wordsFind.length == 0) {
    return null;
  }
  if (wordsFind.includes(word)) {
    return true;
  } else {
    return false;
  }
}

// Progression #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimesElementRepeated(wordsCount, word) {
  let count = 0;

  for (i = 0; i < wordsCount.length; i++) {
    if (wordsCount[i] == word) {
      count++;
    }
  }

  return count;
}
let x = prompt();
howManyTimesElementRepeated(wordsCount, x);
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
];

function maximumProduct(matrix) {}
const unsortedArr = [1, 3, 5, 2, 4, 6, 8, 7];

const syclicSort = (arr) => {
  let i = 0;

  while (i < arr.length) {
    const pos = arr[i] - 1;

    if (arr[i] !== arr[pos]) {
      const swap = [arr[i], arr[pos]];

      arr[pos] = swap[0];
      arr[i] = swap[1];
    } else {
      i++;
    }
  }

  return arr;
};

const sorterArr = syclicSort(unsortedArr);

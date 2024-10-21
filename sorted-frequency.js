function sortedFrequency(arr, num) {
    const firstIndex = findFirst(arr, num);
    const lastIndex = findLast(arr, num);

    if (firstIndex === -1 || lastIndex === -1) return -1;

    return lastIndex - firstIndex + 1;
}

function findFirst(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if ((mid === 0 || arr[mid - 1] < num) && arr[mid] === num) {
            return mid;
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

function findLast(arr, num) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if ((mid === arr.length - 1 || arr[mid + 1] > num) && arr[mid] === num) {
        return mid;
      } else if (arr[mid] > num) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return -1;
  }

module.exports = sortedFrequency;
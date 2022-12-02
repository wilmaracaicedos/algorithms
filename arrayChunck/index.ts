export function chunk2(array: Array<number>, size: number) {
  const response = [];
  let count = 0;
  let subArray = [];
  let index = 0;
  while (index < array.length) {
    // 1 --- 2
    const element = array[index]; // 2 --- 3
    if (count < size) {
      // 2 < 2
      subArray.push(element); // 1, 2
      count++; // 2
      index++; // 2
    } else {
      console.log(...subArray);
      response.push([...subArray]); // [1, 2]
      count = 0;
      subArray.length = 0;
      // console.log(index);
    }
  }
  return response;
}

export function chunk(array: Array<number>, size: number) {
  const response = [];
  while (array.length) {
    const element = array.splice(0, size);
    response.push(element);
  }
  return response;
}

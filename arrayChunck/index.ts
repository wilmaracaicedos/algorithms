export function chunk(array: Array<number>, size: number) {
  const response = [];
  let count = 1;
  let subArray = [];
  let index = 0;
  while (index < array.length) {
    const element = array[index];
    if (count <= size) {
      subArray.push(element);
      count++;
      index++;
      if (size == subArray.length) {
        response.push([...subArray]);
        count = 1;
        subArray.length = 0;
      }
      if (index == array.length && subArray.length > 0) {
        response.push([...subArray]);
      }
    }
  }
  return response;
}

// export function chunk(array: Array<number>, size: number) {
//   const response = [];
//   while (array.length) {
//     const element = array.splice(0, size);
//     response.push(element);
//   }
//   return response;
// }

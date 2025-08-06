function insertArray(arr1, arr2, position) {
  if (position < 0 || position > arr1.length) {
    console.log("vị trí chèn ko hợp lệ");
    return;
  }
  const before = arr1.slice(0, position);     
  const after = arr1.slice(position);        
  const result = before.concat(arr2).concat(after);
  console.log(result);
}
insertArray([1, 2, 3, 7, 8], [4, 5, 6], 3);

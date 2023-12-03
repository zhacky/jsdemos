const arrayRotation = (arr)=>{
  const n = arr[0];
  let result = [];
  for (let i=n; i < arr.length; i++) {
    result.push(arr[i]);
  }
  // if there's still left
  if (n > 0) {
    for (let i = 0; i < n; i++) {
      result.push(arr[i]);
    }
  }
  return result.join('');
}

module.exports = arrayRotation;

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const nhom = {};
for (let i = 0; i < input.length; i++) {
  const chu = input[i];
  const sapXep = chu.split('').sort().join('');
  if (!nhom[sapXep]) {
    nhom[sapXep] = [];
  }
  nhom[sapXep].push(chu);
}
const result = [];
for (const key in nhom) {
  result.push(nhom[key]);
}
console.log(result);

let arr = [];
for (let i = 100; i > 0; i--) {
  let isPrima = i <= 1 ? false : true;

  for (let j = i - 1; j >= 2; j--) {
    if (i % j === 0) {
      isPrima = false;
      break;
    }
  }
  if (!isPrima) {
    let temp = "";
    if (i % 3 === 0) temp += "Foo";
    if (i % 5 === 0) temp += "Bar";
    temp ? arr.push(temp) : arr.push(i);
  }
}
let result = arr.join(", ");
console.log(result);

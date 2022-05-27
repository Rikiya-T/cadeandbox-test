import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const nameArr = ["田中", "山田", "RT"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番号は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

//nameArr.map((name, index) => console.log(`${index +1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "RT") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件　? 条件がtrueの時：条件がFalseの時
// const vall = 1 > 0 ? 'trueです'　: 'falseです';
// //1>0、1は0より大きいからtrue 1<0 1は0より小さいからfalse
// console.log(vall);

//const num = 1300;
//console.log(num.toLocaleString());
//数値のみ

// const num = "1300";
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容の範囲です";
// };
// console.log(checkSum(40, 60));

/**
 * 論理演算子の本当の意味を知る　&& ||
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || frag2) {
//   console.log("1か２はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も２もはtrueになります");
// }

// ||は左側がfaleなら右側で返す
// const num = 100;
// const fee = num || "金額は未設定です";
// console.log(fee);

// &&は左側がtrueなら右側に返す
const num2 = null;
const fee2 = num2 && "設定されました";
console.log(fee2);

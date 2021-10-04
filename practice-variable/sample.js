// varによる再宣言 => ○
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// // letによる再宣言 => ✖️
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)

// // constによる再宣言 => ✖️
// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)

// // varによる再代入 => ○
// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// // letによる再代入 => ○
// let nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// // constによる再代入 => ✖️
// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// alert(nickname);


// // varのスコープ
// var str = "webcamp" //グローバルスコープ

// function foo() {
//   console.log(str)
//   var y = "hello" //関数スコープ
//   console.log(y)
// }

// foo()
// console.log(str) //　=>ログが出る
// console.log(y)  // =>関数スコープは{}外ではログが出ない


// // letのスコープ
// function foo() {
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//     console.log(y)
//   }
//   console.log(x)  //　=>ログが出る
//   console.log(y) //=>{}外ではログが出ない
// }

// foo()


// // for文を使ってコンソールに表示
// for (let i = 0; i < 10; i++) {     
//   console.log(i) 
// }

// console.log(i)  //=>{}外ではログが出ない🇹


// 変数の巻き上げ
var str = "webcamp"

function foo() { 
  console.log(str)
  var str= "dmm webcamp"
  console.log(str)
}

foo()
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


// // 変数の巻き上げ
// var str = "webcamp"

// function foo() { 
//   console.log(str)
//   var str= "dmm webcamp"
//   console.log(str)
// }

// foo()


// // 関数の呼び出し
// // 作成した関数
// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }
// // メイン部分
// let alertString;
// alertString = addString("WebCamp");
// // 作成した関数を呼び出す
// alert(alertString);


// // 複数の関数で表示 prompt＝入力フォーム
// let promptStr = prompt('何か好きな文字を入力してください。');

// alert(promptStr);



// ★★★じゃんけん　複数の関数を定義する
// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while((user_hand != "グー")&&(user_hand !="チョキ")&&(user_hand !="パー")&&(user_hand != null)){
  alert("グー・チョキ・パーのいずれかを入力してください");
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}　　// if文にすると繰り返されないためwhile

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// 結果を表示する
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}else{
  alert("またチャレンジしてね")
}


// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  } 
  // else{
//     alert("グー・チョキ・パーのいずれかを入力してください");
// }

  return winLoseStr;
}
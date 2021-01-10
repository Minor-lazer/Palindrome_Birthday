var num = document.querySelector("#textbox");
var btn_translate = document.querySelector("#btn");
var outputDiv = document.querySelector("#output");
var i = 0;
var x = 0;
function isPalindrome() {
  var ans = num.value;
  var ans2 = parseInt(ans.split("/", "").join(""));
  console.log(ans2);
  var orgin = ans2;
  while (ans2 != 0) {
    var rem = ans2 % 10;

    x = x * 10 + rem;

    ans2 = ans2 / 10;
  }
  if (origin === x) {
    alert("Your birthday is an Palindrome!");
  } else {
    alert("Bhag madarchod");
  }
}

btn_translate.addEventListener("click", isPalindrome);

var num = document.querySelector("#textbox");
var btn_translate = document.querySelector("#textbox");
var outputDiv = document.querySelector("#");
var i = 0;
var x = 0;
function isPalindrome() {
  var ans = num.replace("/", "");
  var ans1 = parseInt(num);
  var orgin = ans1;
  while (ans1 != 0) {
    var rem = num % 10;

    x = x * 10 + rem;

    num = num / 10;
  }
  if (origin === ans1) {
    alert("Your birthday is an Palindrome!");
  }
}

btn_translate.addEventListener("click", isPalindrome);

var num = document.querySelector("#textbox");
var btn_translate = document.querySelector("#textbox");
var i = 0;
function isPalindrome() {
  var ans = num.replace("/", "");
  var ans1 = parseInt(num);
  while (num != 0) {
    var rem = num % 10;

    x = x * 10 + rem;

    num = num / 10;
  }
}

btn_translate.addEventListener("click", isPalindrome);

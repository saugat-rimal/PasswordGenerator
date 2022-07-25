const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let generateBtn = document.getElementById("passGeneratebtn-el");
let randomPass1 = document.getElementById("randomPass1-el");
let randomPass2 = document.getElementById("randomPass2-el");
let issue = document.getElementById("issue");

let passwordLength;

function randomNumber() {
  let num = Math.floor(Math.random() * characters.length);
  return characters[num];
}

function randomPassword() {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += randomNumber();
  }
  return password;
}

let lengthInput = document.querySelector("#passLength");

lengthInput.value = "";

lengthInput.addEventListener("keyup", displayPass);

function displayPass() {
  generateBtn.addEventListener("click", () => {
    if (this.value >= 6 && this.value <= 25) {
      passwordLength = Number(this.value);
      issue.textContent =
        " Awesome😀, Now you have generated your secured password!!! ";
    } else {
      issue.textContent =
        "⚠️ Error : Please write the password length between between 6 and 25 ⚠️";
    }
    console.log(this.value);

    randomPass1.textContent = randomPassword();
    randomPass2.textContent = randomPassword();
  });
}

function copyTxt() {
  let copyText = randomPass2.textContent;
  navigator.clipboard.writeText(copyText);
  console.log(copyText);
}
function copyTxt1() {
  let copyText = randomPass1.textContent;
  navigator.clipboard.writeText(copyText);
  console.log(copyText);
}

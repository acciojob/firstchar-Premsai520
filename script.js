function firstChar(text) {
  for (let ch of text) {
        if (ch !== ' ') {
            return ch;
        }
    }
    return '';
}
const input = prompt();
// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(input));

function firstChar(text) {
  for (let ch of str) {
        if (ch !== ' ') {
            return ch;
        }
    }
    return '';
	
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));

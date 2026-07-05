function firstChar(text) {
  // your code here
	for(let s of text){
		if(s!=" "){
			return s
		}
	}
	return ""
	
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));

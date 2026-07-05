function firstChar(text) {
  // your code here
	if(text.length>1 && text[0]!=" "){
		return text[0]
	} 
	return ""
	
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));

function reverseString(message){
    var result = '';
    for(let i = message.length-1;i>=0;i--){
        result += message.charAt(i);
    }
   return result
}
console.log(reverseString("Hello"))
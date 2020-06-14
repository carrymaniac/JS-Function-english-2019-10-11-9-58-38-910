function palindrome(message){
    var i = 0;
    var j = message.length-1;
    while(i<j){
        if(message.charAt(i)!=message.charAt(j)){
            //不相等
            return false;
        }else{
            i++;
            j--;
        }
    }
    return true;
    // wirte your code here
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true

console.log(palindrome('hello'))
console.log(palindrome('abcba'))
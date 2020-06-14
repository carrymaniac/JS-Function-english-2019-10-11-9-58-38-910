function alphabetSort(message){
    var arr = message.split('')
    arr.sort()
    var result = ""
    for(let i = 0;i<arr.length;i++){
        result += arr[i]
    }
    return result
    // wirte your code here
}
alphabetSort('hello'); // should return 'ehllo'   
console.log(alphabetSort('hello'))
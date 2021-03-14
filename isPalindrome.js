function isPalindrome(str){
    function reverse(strInput) {
        if(strInput.length === 0) {
            return strInput;
        }
        return strInput[strInput.length - 1] + reverse(strInput.slice(0, -1));
    }
    let stringReversed = reverse(str);
    if(str === stringReversed) {
       return true 
    }
    return false;
  }
  
  isPalindrome("abcba");
  
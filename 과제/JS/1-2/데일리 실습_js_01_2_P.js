function palindrome(str) {
  for(let i=0;i<str.length;i++){
    if(str[i]!=str[str.length-i-1]){
      return false;
    }
  }    
  return true;
}
  
  // 출력
  palindrome('level')
  palindrome('hi')
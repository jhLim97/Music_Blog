$(document).ready(function(){
  let array = localStorage.getItem("C").toString().split(",").reverse(); /*const의 경우에는 재선언,재할당 불가->let사용.*/
  array = Array.from(new Set(array)); //이 밖에도 filter로도 중복 값 제거 가능.
  for(i=0; i<7; i++){
    if(array[i] != null){
      var temp = array[i];
      $(".r"+ i).append(temp);
    }
  }
});
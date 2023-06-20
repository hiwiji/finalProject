
// 메모장 안에서 엔터키 작동하는 코드
function handleKeyPress(event) {
  if (event.keyCode === 13) {
    // 엔터 키를 눌렀을 때 동작할 코드
    event.preventDefault(); // 기본 엔터 동작 방지
    document.execCommand('insertHTML', false, '<br><br>'); // 줄 바꿈 삽입
  }

  
}





function replaceButtonWithDiv() {
  var button = document.getElementById("plusBtn");
  var divCount = document.getElementsByClassName("myDiv").length;

  if (divCount < 2) {
    var div = document.createElement("div");
    div.className = "myDiv";

    button.parentNode.insertBefore(div, button);

    if (divCount === 1) {
      button.style.display = "none";
    }
  }
}
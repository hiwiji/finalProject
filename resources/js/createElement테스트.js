
const team = document.querySelector(".team");
const division2 = document.querySelector('.division2');
const workspaceBtn = document.querySelector('.workspaceBtn');




// memoDetail workspace div의 수를 추적하기 위한 카운터 변수 생성
let counter = 0;

// workspaceBtn 버튼에 이벤트 리스너 추가
workspaceBtn.addEventListener('click', function() {
  // 최대 div 개수인 2개에 도달하지 않았는지 확인합니다.
  if (counter < 2) {

    // 새로운 memoDetail workspace div 생성
    const memoDetailDiv = document.createElement('div');
    memoDetailDiv.classList.add('memoDetail', 'workspace');

    // icon div 생성
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('icon');

    // 휴지통 아이콘 생성
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-solid', 'fa-trash', 'workspaceRemoveBtn');

    // 휴지통 아이콘을 icon div에 추가
    iconDiv.appendChild(trashIcon);

    // memoContent div 생성
    const memoContentDiv = document.createElement('div');
    memoContentDiv.classList.add('memoContent');
    memoContentDiv.contentEditable = true;

    // 카운터 단락 생성
    const counterParagraph = document.createElement('p');
    const counterSpan = document.createElement('span');
    counterSpan.classList.add('counter');
    counterSpan.innerText = '0';

    // span태그 위에 p태그 설정
    counterParagraph.appendChild(counterSpan);
    counterParagraph.innerHTML += ' / 50';


    // memoInfo div 생성
    const memoInfoDiv = document.createElement('div');
    memoInfoDiv.classList.add('memoInfo');


    // modifyInfo div 생성
    const modifyInfoDiv = document.createElement('div');
    modifyInfoDiv.classList.add('modifyInfo');
    //modifyInfoDiv.style.borderTop = '1px solid #eee';
    modifyInfoDiv.style.padding = '5px 5px 5px 5px';

    // memberName div 생성
    const memberNameDiv = document.createElement('div');
    memberNameDiv.classList.add('memberName');
    memberNameDiv.innerText = '수정자 : 위지은';
    memberNameDiv.style.fontSize = '12px';
    

    // memoUpdateDate div 생성
    const memoUpdateDateDiv = document.createElement('div');
    memoUpdateDateDiv.classList.add('memoUpdateDate');
    memoUpdateDateDiv.innerText = '수정일 : 2023년 6월 29일';
    memoUpdateDateDiv.style.fontSize = '12px';


    // memberName과 memoUpdateDate div를 modifyInfo div에 추가
    modifyInfoDiv.appendChild(memberNameDiv);
    modifyInfoDiv.appendChild(memoUpdateDateDiv);

    // profile-image div 생성
    const profileImageDiv = document.createElement('div');
    profileImageDiv.classList.add('profile-image');
    profileImageDiv.style.flexBasis = '16%';
    profileImageDiv.style.right = '-6px';
    profileImageDiv.style.top = '1px';

    // 프로필 이미지 생성
    const profileImage = document.createElement('img');
    profileImage.src = '/resources/images/landing/오둥3.jpg';
    profileImage.style.width = '95%';
    profileImage.style.height = '95%';
    profileImage.style.right = '4px';
    profileImage.style.top = '1px';
    //profileImage.style.overflow ='hidden';
    profileImage.style.borderRadius = '70%';
    profileImage.style.position ='relative';
    profileImage.style.flexBasis = '16%';
    profileImage.style.display = 'flex';

    // 프로필 이미지를 profile-image div에 추가
    profileImageDiv.appendChild(profileImage);


    // modifyInfo와 profile-image를 memoInfo div에 추가
    memoInfoDiv.appendChild(modifyInfoDiv);
    memoInfoDiv.appendChild(profileImageDiv);


    // icon div, memoContent div, counter 단락, memoInfo div를 memoDetail workspace div에 추가
    memoDetailDiv.appendChild(iconDiv);
    memoDetailDiv.appendChild(memoContentDiv);
    memoDetailDiv.appendChild(counterParagraph);
    memoDetailDiv.appendChild(memoInfoDiv);

    // memoDetail workspace div를 division2 요소에 추가
    division2.appendChild(memoDetailDiv);

    // 카운터
    counter++;
  }
});




const memoContents = document.querySelectorAll('.memoContent');
const counters = document.querySelectorAll('.counter');

memoContents.forEach((memoContent, index) => {
  memoContent.addEventListener('input', function() {
    const text = memoContent.innerText;
    const remainingChars = 50 - text.length;

    counters[index].textContent = text.length;

    if (remainingChars <= 0) {
      memoContent.innerText = text.substr(0, 50);
      counters[index].textContent = 50;
      memoContent.blur(); // 입력 제한 후 포커스를 제거하여 키보드 입력 차단
    }
  });
});





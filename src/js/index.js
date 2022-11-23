// step1 요구사항 구현을 위한 전략
// TODO 메뉴 추가
// - [✅] 메뉴의 이름을 입력받고 확인 버튼을 누르면 메뉴가 추가된다.
// - [✅] 메뉴의 이름을 입력받고 엔터키를 누르면 메뉴가 추가된다.
// - [✅] 추가되는 메뉴의 아래 마크업은 <ul id="espresso-menu-list" class="mt-3 pl-0"></ul> 안에 삽입해야 한다.
// - [✅] 총 메뉴 갯수를 count하여 상단에 보여준다.
// - [✅] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
// - [✅] 사용자 입력값이 빈 값이라면 추가되지 않는다.

const $ = (selctor) => document.querySelector(selctor);

function App() {


  //form 태그가 자동으로 전송되는 것을 막아준다.
  $('#espresso-menu-form').addEventListener('submit', (e) => {
    e.preventDefault();
  });

  // 메뉴의 이름을 입력받음
  $('#espresso-menu-name').addEventListener('keypress', (e) => {
    // 빈 값 입력에 대한 대응
    if(e.key !== 'Enter') {
      return;
    }
    if ($('#espresso-menu-name').value === '') {
      alert('값을 입력해주세요');
      return;
    }
    if (e.key === 'Enter') {
      const espressoMenuName = $('#espresso-menu-name').value;
      const menuItemTemplate = (espressoMenuName) => {
        return `<li class="menu-list-item d-flex items-center py-2">
      <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
      <button
        type="button"
        class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
      >
        수정
      </button>
      <button
        type="button"
        class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
      >
        삭제
      </button>
    </li>`;
      };
      // console.log(menuItemTemplate(espressoMenuName));

      // 추가되는 메뉴 마크업
      const newList = menuItemTemplate(espressoMenuName);
      $('#espresso-menu-list').insertAdjacentHTML('beforeend', newList);

      // count 업데이트
        // count++;
        const menuCount = $('#espresso-menu-list').querySelectorAll('li').length;
        $('.menu-count').innerText = `총 ${menuCount}개`;
        $('#espresso-menu-name').value = '';
    }
  });
}

App();

// TODO 메뉴 수정
// - [ ] 메뉴의 수정 버튼 클릭 이벤트를 받고, 메뉴 수정하는 prompt창이 뜬다.
// - [ ] prompt에서 update할 메뉴명을 입력받고, 확인 버튼을 누르면 메뉴가 업데이트 된다.

// TODO 메뉴 삭제
// - [ ] 메뉴 삭제 버튼 클릭 이벤트를 받고 메뉴 삭제 컨펌 모달창이 뜬다.
// - [ ] 확인 버튼을 클릭하면 메뉴가 삭제된다.
// - [ ] 총 메뉴 갯수를 count하여 상단에 보여준다.

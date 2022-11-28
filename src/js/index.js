// TODO localStorage Read & Write
// [ ] localStorage에 데이터를 저장한다.
// [ ] localStorage에 있는 데이터를 읽어온다.

// TODO 카테고리별 메뉴판 관리
// [ ] 에스프레소 메뉴판관리
// [ ] 프라푸치노 메뉴판관리
// [ ] 블렌디드 메뉴판관리
// [ ] 티바나 메뉴판관리
// [ ] 디저트  메뉴판관리

// TODO 페이지 접근시 최초 데이터 Read & Rendering
// [ ] 페이지에 최초로 로딩될 때 localStorage에 에스프레소 메뉴를 읽어온다.
// [ ] 에스프레소 메뉴를 페이지에 그려준다.

// TODO 페이지 품절상태
// [ ] 품절 버튼을 추가한다.
// [ ] 품절 버튼을 클릭하면 localStorage에 상태값이 저장된다.
// [ ] 클릭 이벤트에서 가장 가까운 li태그의 class속성 값에 sold-out을 추가한다.

// 기억을 믿으면 안 되고, 기록을 믿어야 한다.

const $ = (selctor) => document.querySelector(selctor);

const store = {
  setLocalStorage(menu) {
    localStorage.setItem('menu', JSON.stringify(menu));
  },
  getLocalStorage() {
    localStorage.getItem('menu');
  },
};

function App() {

  // 상태 = 변할 수 있는 data, 이 앱에서 변하는 것이 무엇인가 => 메뉴명 (갯수는 메뉴명 배열의 길이만 알면되니까 따로 관리할 필요 X)

  const updatedMenuCount = () => {
    const menuCount = $('#espresso-menu-list').querySelectorAll('li').length;
    $('.menu-count').innerText = `총 ${menuCount}개`;
  };

  const addMenuName = () => {
    if ($('#espresso-menu-name').value === '') {
      alert('값을 입력해주세요');
      return;
    }
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

    const newList = menuItemTemplate(espressoMenuName);
    $('#espresso-menu-list').insertAdjacentHTML('beforeend', newList);

    updatedMenuCount();
    $('#espresso-menu-name').value = '';
  };

  const updateMenuName = (e) => {
    const $menuName = e.target.closest('li').querySelector('.menu-name');
    const editedMenuName = prompt(
      '수정할 메뉴명을 입력해주세요',
      $menuName.innerText
    );
    $menuName.innerText = editedMenuName;
  };

  const removeMenuName = (e) => {
    if (confirm('정말 메뉴를 삭제하시겠습니까?')) {
      e.target.closest('li').remove();
      updatedMenuCount();
    }
  };

  $('#espresso-menu-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-edit-button')) {
      updateMenuName(e);
    }

    if (e.target.classList.contains('menu-remove-button')) {
      removeMenuName(e);
    }
  });

  $('#espresso-menu-form').addEventListener('submit', (e) => {
    e.preventDefault();
  });

  $('#espresso-menu-submit-button').addEventListener('click', addMenuName());

  $('#espresso-menu-name').addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    addMenuName();
  });
}

App();

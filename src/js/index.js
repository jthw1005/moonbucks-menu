const $ = (selector) => document.querySelector(selector);

function App() {
  const updatedMenuCount = () => {
    const menuCount = $("#espresso-menu-list").querySelectorAll("li").length;
    $(".menu-count").innerText = `총 ${menuCount}개`;
  };

  $("#espresso-menu-list").addEventListener("click", (event) => {
    if (event.target.classList.contains("menu-edit-button")) {
      const $menuName = event.target.closest("li").querySelector(".menu-name");
      const updatedMenuName = prompt("메뉴명을 수정하세요.", $menuName.innerText);
      $menuName.innerText = updatedMenuName;
    }

    if (event.target.classList.contains("menu-remove-button")) {
      if (confirm("삭제하시겠습니까?")) {
        event.target.closest("li").remove();
        updatedMenuCount();
      }
    }
  });

  $("#espresso-menu-form").addEventListener("submit", (event) => {
    event.preventDefault();
  });

  const addMenuName = () => {
    if ($("#espresso-menu-name").value === "") {
      alert("값을 입력해주세요.");
      return;
    }
    const espressoMenuName = $("#espresso-menu-name").value;
    const menuItemTemplate = (espressoMenuName) => {
      return `
          <li class="menu-list-item d-flex items-center py-2">
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
    $("#espresso-menu-list").insertAdjacentHTML("beforeend", menuItemTemplate(espressoMenuName));
    updatedMenuCount();
    $("#espresso-menu-name").value = "";
  };

  $("#espresso-menu-submit-button").addEventListener("click", () => {
    addMenuName();
  });

  $("#espresso-menu-name").addEventListener("keypress", (event) => {
    if (event.key !== "Enter") {
      return;
    }
    addMenuName();
  });
}

App();

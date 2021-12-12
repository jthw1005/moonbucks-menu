function App() {
  // form 태그가 자동으로 전송되는 것을 막아준다.
  document.querySelector("#espresso-menu-form").addEventListener("submit", (event) => {
    event.preventDefault();
  });
}

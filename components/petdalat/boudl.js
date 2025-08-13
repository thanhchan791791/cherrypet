function Boudl() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Trang Bọ ứ ở Đà Lạt"),
    React.createElement("button", { onClick: () => loadComponent("dalat") }, "Trở lại Đà Lạt"),
  );
}

ReactDOM.render(React.createElement(Boudl), document.getElementById("root"));

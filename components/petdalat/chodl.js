function Chodl() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Trang Chó ở Đà Lạt"),
    React.createElement("button", { onClick: () => loadComponent("dalat") }, "Trở lại Đà Lạt"),
  );
}

ReactDOM.render(React.createElement(Chodl), document.getElementById("root"));

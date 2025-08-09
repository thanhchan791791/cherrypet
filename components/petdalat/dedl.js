function Dedl() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Trang dê ở Đà Lạt"),
    React.createElement("button", { onClick: () => loadComponent("dalat") }, "Trở lại Đà Lạt"),
  );
}

ReactDOM.render(React.createElement(Dedl), document.getElementById("root"));

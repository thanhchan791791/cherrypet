function Cho() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Trang Chó ở Sài Gòn"),
    React.createElement("button", { onClick: () => loadComponent("saigon") }, "Trở lại Sài Gòn"),
  );
}

ReactDOM.render(React.createElement(Cho), document.getElementById("root"));

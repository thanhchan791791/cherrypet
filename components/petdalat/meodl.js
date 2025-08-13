function meodl() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Trang Mèo ở Đà Lạt"),
    React.createElement("button", { onClick: () => loadComponent("dalat") }, "Trở lại Đà Lạt"),
  );
}

ReactDOM.render(React.createElement(meodl), document.getElementById("root"));

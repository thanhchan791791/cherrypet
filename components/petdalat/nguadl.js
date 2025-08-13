function Nguadl() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Trang ngựa ở Đà Lạt"),
    React.createElement("button", { onClick: () => loadComponent("dalat") }, "Trở lại Đà Lạt"),
  );
}

ReactDOM.render(React.createElement(Nguadl), document.getElementById("root"));

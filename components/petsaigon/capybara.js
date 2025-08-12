function capybara() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Trang capybara ở sài gòn"),
    React.createElement("button", { onClick: () => loadComponent("saigon") }, "Trở lại Sài Gòn"),
  );
}

ReactDOM.render(React.createElement(capybara), document.getElementById("root"));

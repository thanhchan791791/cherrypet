function meo() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Trang mèo ở Sài Gòn"),
    React.createElement("button", { onClick: () => loadComponent("saigon") }, "Trở lại Sài Gòn"),
  );
}

ReactDOM.render(React.createElement(meo), document.getElementById("root"));

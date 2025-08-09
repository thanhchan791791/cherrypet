function gaumeo() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, " Trang gấu mèo ở sai gòn "),
    React.createElement("button", { onClick: () => loadComponent("saigon") }, "Trở lại Sài Gòn"),
  );
}

ReactDOM.render(React.createElement(gaumeo), document.getElementById("root"));

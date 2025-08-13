function Dalat() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Bạn đang ở Đà Lạt"),
    React.createElement("button", { onClick: () => loadComponent("petdalat/chodl") }, "chó"),
    React.createElement("button", { onClick: () => loadComponent("petdalat/boudl") }, "Bọ ú"),
    React.createElement("button", { onClick: () => loadComponent("petdalat/meodl") }, "mèo"),
    React.createElement("button", { onClick: () => loadComponent("petdalat/dedl") }, "dê"),
    React.createElement("button", { onClick: () => loadComponent("petdalat/nguadl") }, "ngựa"),


    React.createElement("button", { onClick: () => loadComponent("app") }, "Chọn chi nhánh khác")

  );
}

ReactDOM.render(React.createElement(Dalat), document.getElementById("root"));

function Saigon() {
  React.useEffect(() => {
    if (!document.getElementById("sg-style")) {
      const style = document.createElement("style");
      style.id = "sg-style";
      style.innerHTML = `
        body.sg-body {
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #ffe4ec, #c7f5ff);
          margin: 0;
          padding: 0;
        }
        .sg-container {
          max-width: 500px;
          margin: 50px auto;
          text-align: center;
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          animation: sg-fadeIn 0.6s ease-out;
        }
        .sg-title {
          font-size: 26px;
          margin-bottom: 25px;
          color: #ff6f91;
        }
        .sg-btn {
          background: #ffd6e0;
          color: #333;
          border: none;
          padding: 12px 20px;
          margin: 8px;
          font-size: 16px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
          display: inline-block;
        }
        .sg-btn:hover {
          background: #ffb6c1;
          transform: scale(1.05);
        }
        .sg-btn:active {
          transform: scale(0.95);
        }
        @keyframes sg-fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `;
      document.head.appendChild(style);
      document.body.classList.add("sg-body");
    }
  }, []);

  return React.createElement(
    "div",
    { className: "sg-container" },
    React.createElement("h1", { className: "sg-title" }, "🐾 Bạn đang ở Sài Gòn"),
    React.createElement("button", { className: "sg-btn", onClick: () => loadComponent("petsaigon/cho") }, "Chó"),
    React.createElement("button", { className: "sg-btn", onClick: () => loadComponent("petsaigon/meo") }, "Mèo"),
    React.createElement("button", { className: "sg-btn", onClick: () => loadComponent("petsaigon/gaumeo") }, "Gấu mèo"),
    React.createElement("button", { className: "sg-btn", onClick: () => loadComponent("petsaigon/capybara") }, "Capybara"),
    React.createElement("button", { className: "sg-btn", onClick: () => loadComponent("dalat") }, "Đi Đà Lạt"),
    React.createElement("button", { className: "sg-btn", onClick: () => loadComponent("app") }, "Chọn chi nhánh khác")
  );
}

// Render lần đầu vào root
ReactDOM.render(React.createElement(Saigon), document.getElementById("root"));

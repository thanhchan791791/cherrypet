function Saigon() {
  React.useEffect(() => {
    if (!document.getElementById("sg-style")) {
      const style = document.createElement("style");
      style.id = "sg-style";
      style.innerHTML = `
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
        }
        body.sg-body {
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #fdf2f8, #cffafe);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sg-container {
          width: 90%;
          height: 90vh;
          max-width: 600px;
          background: rgba(255,255,255,0.96);
          border-radius: 28px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.12);
          display: flex;
          flex-direction: column;
          padding: 20px;
        }
        /* Hiệu ứng tiêu đề */
        .sg-title {
          font-size: 34px;
          font-weight: 800;
          margin-bottom: 20px;
          text-align: center;
          background: linear-gradient(270deg, #ff6f91, #ff9eb5, #fbc2eb, #a6c1ee);
          background-size: 600% 600%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: sg-gradientMove 6s ease infinite, sg-fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .sg-subtitle {
          font-size: 15px;
          text-align: center;
          color: #666;
          margin-top: -12px;
          margin-bottom: 20px;
          animation: sg-fadeInUp 0.6s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        .sg-grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        /* Nút */
        .sg-btn {
          background: white;
          border: none;
          padding: 0;
          border-radius: 20px;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          min-height: 140px;
          opacity: 0;
          animation: sg-fadeInUp 0.5s ease-out forwards;
        }
        .sg-btn:nth-child(1) { animation-delay: 0.5s; }
        .sg-btn:nth-child(2) { animation-delay: 0.7s; }
        .sg-btn:nth-child(3) { animation-delay: 0.9s; }
        .sg-btn:nth-child(4) { animation-delay: 1.1s; }
        .sg-btn:nth-child(5) { animation-delay: 1.3s; }
        .sg-btn:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 6px 18px rgba(0,0,0,0.12);
        }
        .sg-btn:active {
          transform: scale(0.97);
        }
        .sg-btn-icon {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .sg-btn img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        /* Chữ overlay */
        .sg-btn-text-overlay {
          position: absolute;
          bottom: 50%;
          left: 50%;
          transform: translate(-50%, 50%);
          padding: 10px 18px;
          border-radius: 50px;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: white;
          text-shadow: 0 4px 8px rgba(0,0,0,0.6);
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(4px);
          border: 2px solid rgba(255,255,255,0.4);
          pointer-events: none;
          transition: all 0.25s ease;
        }
        .sg-btn:hover .sg-btn-text-overlay {
          background: rgba(0,0,0,0.55);
          transform: translate(-50%, 50%) scale(1.05);
        }
        .sg-btn-branch {
          grid-column: 1 / -1;
          flex-direction: row;
          min-height: 80px;
        }
        @keyframes sg-fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sg-gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @media (max-width: 640px) {
          .sg-title { font-size: 26px; }
          .sg-btn { min-height: 120px; }
          .sg-btn-text-overlay { font-size: 17px; }
        }
      `;
      document.head.appendChild(style);
      document.body.classList.add("sg-body");
    }
  }, []);

  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  const btn = (label, icon, color1, color2, target, extraClass = "") =>
    React.createElement(
      "button",
      {
        className: `sg-btn ${extraClass}`,
        onClick: () => loadComponent(target),
        onTouchStart: () => loadComponent(target),
        style: !extraClass.includes("sg-btn-branch")
          ? { background: `linear-gradient(135deg, ${color1}, ${color2})` }
          : {}
      },
      React.createElement(
        "div",
        { className: "sg-btn-icon" },
        React.createElement("img", {
          src: `components/icon/${icon}`,
          alt: capitalize(label)
        }),
        React.createElement("div", { className: "sg-btn-text-overlay" }, capitalize(label))
      )
    );

  return React.createElement(
    "div",
    { className: "sg-container" },
    React.createElement("h1", { className: "sg-title" }, "Bạn đang ở chi nhánh Sài Gòn"),
    React.createElement("div", { className: "sg-subtitle" }, "Hãy chọn loại thú cưng bạn muốn xem 🐶🐱"),
    React.createElement(
      "div",
      { className: "sg-grid" },
      btn("Chó", "iconcho.png", "#ffd6e0", "#ff9eb5", "petsaigon/cho"),
      btn("Mèo", "iconmeo.png", "#fff1d6", "#ffc87c", "petsaigon/meo"),
      btn("Gấu mèo", "icongaumeo.png", "#d6f7ff", "#80d8ff", "petsaigon/gaumeo"),
      btn("Capybara", "iconcapybara.png", "#e4ffd6", "#b6ff9e", "petsaigon/capybara"),
      btn("Chọn chi nhánh khác", "icondalat.png", "#ddd", "#bbb", "app", "sg-btn-branch")
    )
  );
}

ReactDOM.render(React.createElement(Saigon), document.getElementById("root"));

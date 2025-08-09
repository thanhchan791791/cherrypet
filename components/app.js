function App() {
  React.useEffect(() => {
    if (!document.getElementById("epic-location-style")) {
      const style = document.createElement("style");
      style.id = "epic-location-style";
      style.innerHTML = `
        .epic-location-container {
          position: relative;
          font-family: 'Segoe UI', sans-serif;
          text-align: center;
          padding: 50px 20px;
          min-height: 100vh;
          background: linear-gradient(270deg, #ff9a9e, #fad0c4, #fbc2eb, #a1c4fd, #c2e9fb);
          background-size: 1000% 1000%;
          animation: bgMove 15s ease infinite;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        @keyframes bgMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          animation: floatParticle 6s linear infinite;
        }
        @keyframes floatParticle {
          from { transform: translateY(100vh) scale(0.5); opacity: 0; }
          50% { opacity: 1; }
          to { transform: translateY(-10vh) scale(1); opacity: 0; }
        }
        /* Hiệu ứng fade-in từng phần */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .epic-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          margin-bottom: 40px;
          text-shadow: 0 0 10px rgba(255,255,255,0.8);
          animation: fadeInUp 1s ease forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
        .epic-title img {
          width: 40px;
          height: 40px;
          animation: spinIcon 4s linear infinite;
        }
        @keyframes spinIcon {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .epic-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 45px;
          margin: 10px 0;
          border: none;
          border-radius: 50px;
          background: linear-gradient(135deg, #ff758c, #ff7eb3);
          color: white;
          font-size: 1.4rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 0 20px rgba(255, 118, 157, 0.6);
          width: 100%;
          max-width: 300px;
          opacity: 0;
          animation: fadeInUp 1s ease forwards;
        }
        .epic-btn:nth-of-type(1) {
          animation-delay: 0.8s;
        }
        .epic-btn:nth-of-type(2) {
          animation-delay: 1.2s;
        }
        .epic-btn img {
          width: 28px;
          height: 28px;
          object-fit: contain;
        }
        .epic-btn:hover {
          transform: scale(1.08) rotate(1deg);
          box-shadow: 0 0 35px rgba(255, 118, 157, 0.9);
        }
        @media (max-width: 600px) {
          .epic-title {
            font-size: 1.8rem;
            margin-bottom: 25px;
          }
          .epic-btn {
            font-size: 1.1rem;
            padding: 14px 30px;
          }
        }
      `;
      document.head.appendChild(style);
    }

    const container = document.querySelector(".epic-location-container");
    if (container && container.querySelectorAll(".particle").length === 0) {
      for (let i = 0; i < 20; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        p.style.left = Math.random() * 100 + "%";
        p.style.animationDuration = 4 + Math.random() * 4 + "s";
        p.style.opacity = Math.random();
        container.appendChild(p);
      }
    }
  }, []);

  const IconImage = (src) =>
    React.createElement("img", { src: src, alt: "icon" });

  return React.createElement(
    "div",
    { className: "epic-location-container" },
    React.createElement(
      "h1",
      { className: "epic-title" },
      " Chọn chi nhánh bạn muốn tìm hiểu ",
      IconImage("components/icon/iconshiba.png")
    ),
    React.createElement(
      "button",
      { className: "epic-btn", onClick: () => loadComponent("saigon") },
      IconImage("components/icon/iconsaigon.png"),
      "Sài Gòn"
    ),
    React.createElement(
      "button",
      { className: "epic-btn", onClick: () => loadComponent("dalat") },
      IconImage("components/icon/icondalat.png"),
      "Đà Lạt"
    ),
    React.createElement("div", { id: "content" })
  );
}



function loadComponent(name) {
  const script = document.createElement("script");
  script.src = `./components/${name}.js`;
  document.body.appendChild(script);
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));

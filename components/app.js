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
          padding: 20px 10px;
          min-height: 100vh;
          background: linear-gradient(270deg, #ffecd2, #fcb69f, #a1c4fd, #c2e9fb);
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
        .light-beam {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
          animation: rotateBeam 20s linear infinite;
          pointer-events: none;
        }
        @keyframes rotateBeam {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          animation: floatParticle linear infinite;
        }
        @keyframes floatParticle {
          from { transform: translateY(100vh) scale(0.5); opacity: 0; }
          50% { opacity: 1; }
          to { transform: translateY(-10vh) scale(1); opacity: 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .epic-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          font-size: 4rem;
          font-weight: bold;
          color: white;
          margin-bottom: 10px;
          text-shadow: 0 0 25px rgba(255,255,255,0.95), 0 0 40px rgba(255, 200, 150, 0.8);
          animation: fadeInUp 1s ease forwards, heartbeat 3s ease-in-out infinite;
          animation-delay: 0.2s;
          opacity: 0;
        }
        .epic-subtitle {
          font-size: 1.4rem;
          color: white;
          margin-bottom: 40px;
          opacity: 0;
          animation: fadeInUp 1s ease forwards;
          animation-delay: 0.5s;
          text-shadow: 0 0 8px rgba(0,0,0,0.4);
        }
        .epic-title img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          padding: 8px;
          animation: heartbeat 3s ease-in-out infinite, glowPulse 2s ease-in-out infinite;
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 15px rgba(255,255,255,0.6); }
          50% { box-shadow: 0 0 35px rgba(255,255,255,1); }
        }
        .button-row {
          display: flex;
          gap: 30px;
          width: 100%;
          max-width: 800px;
          justify-content: center;
        }
        .epic-btn {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 20px;
          margin: 12px 0;
          border: none;
          border-radius: 20px;
          color: white;
          font-size: 1.4rem;
          font-weight: bold;
          cursor: pointer;
          min-height: 180px;
          opacity: 0;
          animation: fadeInUp 1s ease forwards, floatBtn 3s ease-in-out infinite;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .epic-btn:nth-of-type(1) {
          background: linear-gradient(135deg, #ff6f61, #ff9a8b);
          animation-delay: 0.8s;
        }
        .epic-btn:nth-of-type(2) {
          background: linear-gradient(135deg, #43cea2, #185a9d);
          animation-delay: 1.2s;
        }
        .epic-btn::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: rgba(255,255,255,0.2);
          transform: rotate(45deg);
          transition: transform 0.5s ease;
        }
        .epic-btn:hover::before {
          transform: rotate(45deg) translate(50%, 50%);
        }
        .epic-btn img {
          width: 55px;
          height: 55px;
          object-fit: contain;
          background: rgba(255,255,255,0.2);
          padding: 8px;
          border-radius: 50%;
        }
        .epic-btn:hover {
          transform: translateY(-6px) scale(1.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
        @keyframes floatBtn {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @media (max-width: 600px) {
          .epic-title { font-size: 3rem; }
          .epic-title img { width: 90px; height: 90px; }
          .button-row {
            flex-direction: column;
          }
          .epic-btn {
            min-height: 150px;
            font-size: 1.2rem;
          }
          .epic-btn img {
            width: 45px;
            height: 45px;
          }
        }
      `;
      document.head.appendChild(style);
    }

    const container = document.querySelector(".epic-location-container");
    if (container && !container.querySelector(".light-beam")) {
      const beam = document.createElement("div");
      beam.className = "light-beam";
      container.appendChild(beam);
    }

    if (container && container.querySelectorAll(".particle").length === 0) {
      for (let i = 0; i < 20; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        const size = Math.random() * 6 + 4;
        p.style.width = size + "px";
        p.style.height = size + "px";
        p.style.left = Math.random() * 100 + "%";
        p.style.animationDuration = 4 + Math.random() * 6 + "s";
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
      IconImage("components/icon/logocherry.png"),
      "Cherrypet Coffee"
    ),
    React.createElement(
      "div",
      { className: "epic-subtitle" },
      "Chọn chi nhánh bạn muốn khám phá"
    ),
    React.createElement(
      "div",
      { className: "button-row" },
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
      )
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

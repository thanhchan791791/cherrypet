const Home = ({ onSelect }) => {
  const containerStyle = {
    maxWidth: 420,
    margin: "60px auto",
    padding: 30,
    borderRadius: 25,
    background: "linear-gradient(135deg, #fce4ec, #f8bbd0)",
    boxShadow: "0 8px 24px rgba(222, 121, 161, 0.4)",
    textAlign: "center",
    fontFamily:
      "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    userSelect: "none",
  };

  const [hovered, setHovered] = React.useState(null);
  const [visibleItems, setVisibleItems] = React.useState({
    title: false,
    subtitle: false,
    buttons: false,
  });
  const [allVisible, setAllVisible] = React.useState(false);

  React.useEffect(() => {
    const timers = [];
    timers.push(
      setTimeout(() => setVisibleItems((v) => ({ ...v, title: true })), 300)
    );
    timers.push(
      setTimeout(() => setVisibleItems((v) => ({ ...v, subtitle: true })), 600)
    );
    timers.push(
      setTimeout(() => {
        setVisibleItems((v) => ({ ...v, buttons: true }));
        setAllVisible(true);  // Khi buttons hiện, coi là full visible
      }, 900)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  // Animation pulse chỉ bật khi allVisible === true
  const pulseAnimation = allVisible ? "pulse 3s ease-in-out infinite" : "none";

  const titleStyleBase = {
    color: "#880e4f",
    fontSize: "2.4rem",
    fontWeight: "700",
    marginBottom: 18,
    letterSpacing: "0.06em",
    transition: "opacity 0.6s ease, transform 0.6s ease",
    animation: pulseAnimation,
  };

  const subtitleStyleBase = {
    color: "#5d2e46",
    fontSize: "1.15rem",
    marginBottom: 40,
    fontWeight: "500",
    transition: "opacity 0.6s ease, transform 0.6s ease",
    animation: pulseAnimation,
    animationDelay: "1s",
  };

  const buttonContainerStyleBase = {
    display: "flex",
    gap: 24,
    justifyContent: "center",
    transition: "opacity 0.6s ease, transform 0.6s ease",
    animation: pulseAnimation,
    animationDelay: "2s",
  };

  const baseButton = {
    flex: "1 1 0",
    padding: "18px 0",
    borderRadius: 40,
    border: "none",
    color: "white",
    fontWeight: "700",
    fontSize: "1.3rem",
    cursor: "pointer",
    boxShadow: "0 8px 15px rgba(0,0,0,0.12)",
    transition:
      "transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s, filter 0.6s ease-in-out",
  };

  const saigonButton = {
    ...baseButton,
    background:
      "linear-gradient(135deg, #f48fb1 0%, #ec407a 100%)",
    filter: "drop-shadow(0 0 10px #ec407a80)",
    animation: pulseAnimation,
  };

  const dalatButton = {
    ...baseButton,
    background:
      "linear-gradient(135deg, #4db6ac 0%, #00897b 100%)",
    filter: "drop-shadow(0 0 10px #00897b80)",
    animation: pulseAnimation,
  };

  const getStyle = (branch) => {
    const base = branch === "saigon" ? saigonButton : dalatButton;
    if (hovered === branch) {
      return {
        ...base,
        transform: "scale(1.12)",
        boxShadow:
          "0 14px 30px rgba(0,0,0,0.25), 0 0 30px rgba(255,255,255,0.5)",
        animation: "pulse-hover 1.5s ease-in-out infinite",
        filter: "drop-shadow(0 0 25px #fff4f480)",
      };
    }
    return base;
  };

  React.useEffect(() => {
    if (!document.getElementById("pulse-style")) {
      const style = document.createElement("style");
      style.id = "pulse-style";
      style.innerHTML = `
        @keyframes pulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.1); }
        }
        @keyframes pulse-hover {
          0%, 100% { filter: brightness(1.2); }
          50% { filter: brightness(1.35); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  function fadeSlideStyle(visible) {
    return {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(30px)",
      pointerEvents: visible ? "auto" : "none",
    };
  }

  return React.createElement(
    "div",
    { style: containerStyle },
    React.createElement(
      "h1",
      { style: { ...titleStyleBase, ...fadeSlideStyle(visibleItems.title) } },
      "Cherry Pet Coffee"
    ),
    React.createElement(
      "p",
      { style: { ...subtitleStyleBase, ...fadeSlideStyle(visibleItems.subtitle) } },
      "Chọn chi nhánh để bắt đầu trải nghiệm cà phê và thú cưng tuyệt vời!"
    ),
    React.createElement(
      "div",
      { style: { ...buttonContainerStyleBase, ...fadeSlideStyle(visibleItems.buttons) } },
      React.createElement(
        "button",
        {
          style: getStyle("saigon"),
          onClick: () => onSelect("saigon"),
          onMouseEnter: () => setHovered("saigon"),
          onMouseLeave: () => setHovered(null),
          "aria-label": "Chi nhánh Sài Gòn",
          type: "button",
        },
        "Chi nhánh Sài Gòn"
      ),
      React.createElement(
        "button",
        {
          style: getStyle("dalat"),
          onClick: () => onSelect("dalat"),
          onMouseEnter: () => setHovered("dalat"),
          onMouseLeave: () => setHovered(null),
          "aria-label": "Chi nhánh Đà Lạt",
          type: "button",
        },
        "Chi nhánh Đà Lạt"
      )
    )
  );
};

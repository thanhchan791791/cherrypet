const Saigon = ({ onBack, onViewAlbum }) => {
  const containerStyle = {
    maxWidth: 480,
    margin: "40px auto",
    padding: 28,
    borderRadius: 24,
    background: "linear-gradient(135deg, #fff0f6, #ffe7f0)",
    boxShadow: "0 6px 20px rgba(220, 150, 170, 0.25)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#6a1b4d",
    textAlign: "center",
    userSelect: "none",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: 16,
    letterSpacing: "0.04em",
    color: "#ad1457",
    textShadow: "0 1px 4px #f48fb1aa",
  };

  const descStyle = {
    fontSize: "1.1rem",
    marginBottom: 24,
    fontWeight: "500",
    lineHeight: 1.5,
    color: "#7a3b66cc",
  };

  const buttonStyle = {
    padding: "14px 36px",
    borderRadius: 32,
    border: "none",
    background:
      "linear-gradient(135deg, #f8bbd0 0%, #f48fb1 50%, #f8bbd0 100%)",
    color: "#ffffff",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "1.1rem",
    boxShadow: "0 5px 18px rgba(244, 143, 177, 0.6)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    userSelect: "none",
    flex: 1,
    minWidth: 140,
    maxWidth: 220,
  };

  const buttonsWrapperStyle = {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    marginBottom: 28,
  };

  const buttonHover = (e) => {
    e.target.style.transform = "scale(1.06)";
    e.target.style.boxShadow = "0 8px 24px rgba(244, 143, 177, 0.85)";
  };

  const buttonLeave = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0 5px 18px rgba(244, 143, 177, 0.6)";
  };

  const pets = [
    {
      name: "Chó",
      description: "Thân thiện, trung thành, luôn bên bạn.",
      color: "#f48fb1",
      icon: "./images/iconcho.png",
    },
    {
      name: "Mèo",
      description: "Dịu dàng, tinh nghịch, đáng yêu bất tận.",
      color: "#f06292",
      icon: "./images/iconmeo.png",
    },
    {
      name: "Gấu mèo",
      description: "Hiền lành, thân thiện, bạn đồng hành tuyệt vời.",
      color: "#ba68c8",
      icon: "./images/icongaumeo.png",
    },
    {
      name: "Capybara",
      description: "Lớn nhất họ nhà chuột, hiền hòa và dễ mến.",
      color: "#4db6ac",
      icon: "./images/iconcapy.png",
    },
  ];

  const petContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 24,
    marginBottom: 20,
  };

  const petCardBase = {
    padding: 24,
    borderRadius: 20,
    boxShadow: "0 6px 18px rgba(244, 143, 177, 0.25)",
    cursor: "pointer",
    userSelect: "none",
    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    minHeight: 260,
    border: "3px solid transparent",
    animation: "sway 4s ease-in-out infinite",
    opacity: 0,
    transform: "translateY(20px)",
    animationFillMode: "forwards",
  };

  const getPetCardStyle = (color, petName, index) => {
    let style = {
      ...petCardBase,
      borderTop: `4px solid ${color}`,
      animationDelay: `${index * 0.25}s`,
      animationName: "fadeSlideUp, sway",
      animationDuration: "0.6s, 4s",
      animationTimingFunction: "ease-out, ease-in-out",
      animationIterationCount: "1, infinite",
    };
    if (hoveredPet === petName) {
      style = {
        ...style,
        backgroundColor: "#fff0f6",
        transform: "scale(1.1) translateX(0)",
        boxShadow: `0 20px 40px ${color}bb, 0 0 25px ${color}cc`,
        borderColor: color,
        animationPlayState: "paused",
      };
    }
    return style;
  };

const petIconStyle = {
  width: "90%",    // chiếm 90% chiều ngang thẻ
  height: "auto",  // giữ tỉ lệ tự nhiên theo chiều rộng
  maxHeight: "160px", // giới hạn chiều cao tối đa (để không quá cao)
  marginBottom: 18,
  userSelect: "none",
  objectFit: "contain",
  filter: "drop-shadow(0 0 6px rgba(0,0,0,0.1))",
  transition: "filter 0.3s ease",
};

  const petNameStyle = {
    fontWeight: "700",
    fontSize: "1.4rem",
    marginBottom: 10,
    color: "#6a1b4d",
    userSelect: "none",
  };

  const petDescStyle = {
    fontWeight: "500",
    fontSize: "1rem",
    color: "#8e6287",
    textAlign: "center",
    userSelect: "none",
    flexGrow: 1,
    lineHeight: 1.4,
  };

  const [hoveredPet, setHoveredPet] = React.useState(null);

  React.useEffect(() => {
    if (!document.getElementById("pulse-emoji-style")) {
      const style = document.createElement("style");
      style.id = "pulse-emoji-style";
      style.innerHTML = `
        @keyframes pulse-emoji {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.12); }
        }
        @keyframes sway {
          0%, 100% { transform: translateX(-6px); }
          50% { transform: translateX(6px); }
        }
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return React.createElement(
    "div",
    { style: containerStyle },
    React.createElement("h2", { style: titleStyle }, "Chi nhánh Sài Gòn"),
    React.createElement(
      "p",
      { style: descStyle },
      "Chào mừng bạn đến với Cherry Pet Coffee chi nhánh Sài Gòn! Thưởng thức cà phê thơm ngon cùng thú cưng dễ thương ngay trung tâm thành phố."
    ),

    React.createElement(
      "div",
      { style: buttonsWrapperStyle },
      React.createElement(
        "button",
        {
          onClick: onViewAlbum,
          style: buttonStyle,
          onMouseEnter: buttonHover,
          onMouseLeave: buttonLeave,
          type: "button",
        },
        "📸 Xem Album Ảnh Nhà Cherry"
      ),
      React.createElement(
        "button",
        {
          onClick: onBack,
          style: buttonStyle,
          onMouseEnter: buttonHover,
          onMouseLeave: buttonLeave,
          type: "button",
        },
        "← Quay lại chọn chi nhánh"
      )
    ),

    React.createElement(
      "div",
      { style: petContainerStyle },
      pets.map((pet, idx) =>
        React.createElement(
          "div",
          {
            key: pet.name,
            style: getPetCardStyle(pet.color, pet.name, idx),
            onMouseEnter: () => setHoveredPet(pet.name),
            onMouseLeave: () => setHoveredPet(null),
            role: "button",
            tabIndex: 0,
            onClick: () => alert(`Bạn chọn thú cưng: ${pet.name}`),
            onKeyDown: (e) => {
              if (e.key === "Enter" || e.key === " ") {
                alert(`Bạn chọn thú cưng: ${pet.name}`);
              }
            },
            "aria-label": `Chọn thú cưng ${pet.name}`,
            onFocus: () => setHoveredPet(pet.name),
            onBlur: () => setHoveredPet(null),
          },
          React.createElement("img", {
            src: pet.icon,
            alt: pet.name,
            style: {
              ...petIconStyle,
              animation:
                hoveredPet === pet.name
                  ? "pulse-emoji 1.5s ease-in-out infinite"
                  : "none",
              filter:
                hoveredPet === pet.name
                  ? `drop-shadow(0 0 14px ${pet.color})`
                  : petIconStyle.filter,
            },
          }),
          React.createElement("div", { style: petNameStyle }, pet.name),
          React.createElement("div", { style: petDescStyle }, pet.description)
        )
      )
    )
  );
};

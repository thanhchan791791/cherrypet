const Dalat = ({ onBack }) => {
  return React.createElement(
    "div",
    { style: { color: "#6a1b4d" } },
    React.createElement("h2", null, "Chi nhánh Đà Lạt"),
    React.createElement(
      "p",
      null,
      "Chào mừng bạn đến với Cherry Pet Coffee chi nhánh Đà Lạt! 🐱☕ Thưởng thức cà phê trong không gian mát mẻ, lãng mạn bên thú cưng đáng yêu."
    ),
    React.createElement(
      "button",
      {
        onClick: onBack,
        style: {
          marginTop: 25,
          padding: "10px 15px",
          borderRadius: 12,
          border: "none",
          backgroundColor: "#d81b60",
          color: "white",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "1rem",
        },
      },
      "← Quay lại chọn chi nhánh"
    )
  );
};

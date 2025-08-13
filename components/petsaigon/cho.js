// Dữ liệu minh họa về chó
const dogsData = [
  { id: 1, name: "Labrador", mainImage: "https://placedog.net/600/800?id=1", story: "Labrador rất thân thiện và năng động.", personality: "Thân thiện, thông minh, dễ huấn luyện", otherImages: ["https://placedog.net/300/200?id=101","https://placedog.net/300/200?id=102"] },
  { id: 2, name: "Poodle", mainImage: "https://placedog.net/600/800?id=2", story: "Poodle thích chơi đùa và rất lanh lợi.", personality: "Lanh lợi, tình cảm, năng động", otherImages: ["https://placedog.net/300/200?id=201","https://placedog.net/300/200?id=202"] },
  { id: 3, name: "Bulldog", mainImage: "https://placedog.net/600/800?id=3", story: "Bulldog trầm tính nhưng rất trung thành.", personality: "Trầm tính, trung thành, dễ gần", otherImages: ["https://placedog.net/300/200?id=301","https://placedog.net/300/200?id=302"] },
  { id: 4, name: "Golden Retriever", mainImage: "https://placedog.net/600/800?id=4", story: "Golden Retriever thân thiện và rất trung thành.", personality: "Thân thiện, vui vẻ, thông minh", otherImages: ["https://placedog.net/300/200?id=401","https://placedog.net/300/200?id=402"] },
  { id: 5, name: "Shiba Inu", mainImage: "https://placedog.net/600/800?id=5", story: "Shiba Inu năng động và tinh nghịch.", personality: "Năng động, tinh nghịch, đáng yêu", otherImages: ["https://placedog.net/300/200?id=501","https://placedog.net/300/200?id=502"] },
];

// CSS nhẹ nhàng, pastel
const styles = {
  container: { fontFamily: "'Comic Sans MS', cursive, sans-serif", backgroundColor: "#fff5f7", margin: 0, padding: 0 },
  header: { textAlign: "center", fontSize: "26px", fontWeight: "600", color: "#ff8da1", padding: "20px 0", textShadow: "1px 1px 2px #fce4ec" },
  dogCard: { margin: "20px auto", width: "90%", maxWidth: "400px", borderRadius: "18px", overflow: "hidden", boxShadow: "0 6px 20px rgba(255,141,161,0.2)", cursor: "pointer", transition: "transform 0.3s" },
  dogImage: { width: "100%", height: "auto", display: "block", borderRadius: "18px" },
  dogName: { fontSize: "20px", fontWeight: "600", color: "#ff8da1", textAlign: "center", padding: "8px 0", textShadow: "0.5px 0.5px 1px #fde3eb" },
  dogCardHover: { transform: "scale(1.02)", boxShadow: "0 10px 25px rgba(255,141,161,0.3)" },
  overlay: { position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(255,228,236,0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 },
  detailBox: { backgroundColor: "#fff", borderRadius: "20px", width: "90%", maxWidth: "420px", padding: "18px", boxShadow: "0 6px 30px rgba(255,141,161,0.25)", transform: "translateY(100vh)", transition: "transform 0.5s ease" },
  detailBoxShow: { transform: "translateY(0)" },
  detailImage: { width: "100%", borderRadius: "12px", marginBottom: "12px" },
  detailText: { marginBottom: "8px", color: "#555", fontSize: "15px", lineHeight: "1.4" },
  otherImagesContainer: { display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap", marginTop: "8px" },
  otherImage: { width: "48%", borderRadius: "10px", cursor: "pointer", boxShadow: "0 3px 12px rgba(255,141,161,0.2)", transition: "transform 0.3s" },
  otherImageHover: { transform: "scale(1.04)", boxShadow: "0 6px 18px rgba(255,141,161,0.3)" },
};

// Component chi tiết
function DogDetail({ dog, onClose }) {
  const [hovered, setHovered] = React.useState(null);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => { const timer = setTimeout(() => setShow(true), 50); return () => clearTimeout(timer); }, []);

  return React.createElement(
    "div",
    { style: styles.overlay, onClick: onClose },
    React.createElement(
      "div",
      { style: { ...styles.detailBox, ...(show ? styles.detailBoxShow : {}) }, onClick: (e) => e.stopPropagation() },
      React.createElement("img", { src: dog.mainImage, alt: dog.name, style: styles.detailImage }),
      React.createElement("h2", { style: { color: "#ff91b6", textAlign: "center", marginBottom: "8px", fontWeight: "600" } }, dog.name),
      React.createElement("p", { style: styles.detailText }, React.createElement("strong", null, "Câu chuyện: "), dog.story),
      React.createElement("p", { style: styles.detailText }, React.createElement("strong", null, "Tính cách: "), dog.personality),
      React.createElement(
        "div",
        { style: styles.otherImagesContainer },
        dog.otherImages.map((img, idx) =>
          React.createElement("img", {
            key: idx,
            src: img,
            alt: dog.name,
            style: hovered === idx ? { ...styles.otherImage, ...styles.otherImageHover } : styles.otherImage,
            onMouseEnter: () => setHovered(idx),
            onMouseLeave: () => setHovered(null),
          })
        )
      )
    )
  );
}

// Component chính
function ChoApp() {
  const [selectedDog, setSelectedDog] = React.useState(null);
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return React.createElement(
    "div",
    { style: styles.container },
    React.createElement("h1", { style: styles.header }, "Danh sách chó ở chi nhánh Sài Gòn"),
    dogsData.map((dog, idx) =>
      React.createElement(
        "div",
        {
          key: dog.id,
          style: hoveredIndex === idx ? { ...styles.dogCard, ...styles.dogCardHover } : styles.dogCard,
          onClick: () => setSelectedDog(dog),
          onMouseEnter: () => setHoveredIndex(idx),
          onMouseLeave: () => setHoveredIndex(null),
        },
        React.createElement("img", { src: dog.mainImage, alt: dog.name, style: styles.dogImage }),
        React.createElement("p", { style: styles.dogName }, dog.name)
      )
    ),
    selectedDog && React.createElement(DogDetail, { dog: selectedDog, onClose: () => setSelectedDog(null) })
  );
}

// Render vào root
ReactDOM.render(React.createElement(ChoApp), document.getElementById("root"));

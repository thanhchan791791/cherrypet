// cho.js
const db = window.db;

// ===== Inject font + keyframes + button style (1 lần) =====
(function injectOnce() {
  if (document.getElementById("cp-style")) return;

  // Google Fonts
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&family=Pacifico&display=swap";
  document.head.appendChild(link);

  // Keyframes + button CSS (prefix cp- để tránh trùng)
  const style = document.createElement("style");
  style.id = "cp-style";
  style.textContent = `
    @keyframes cp-fadeUp { 
      from { opacity: 0; transform: translateY(16px) scale(.98); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes cp-pop { 
      0% { transform: scale(.96); opacity:.5; } 
      100% { transform: scale(1); opacity:1; } 
    }
    @keyframes cp-shimmer {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes cp-floaty {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }

    /* Nút Trở lại Sài Gòn (to, nổi bật) */
    .cp-back-btn {
      background: linear-gradient(90deg, #ff4f81, #ff7eb3);
      color: #fff;
      border: none;
      padding: 14px 28px;
      border-radius: 999px;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 6px 15px rgba(255,79,129,.4);
      transition: transform .25s ease, box-shadow .25s ease;
    }
    .cp-back-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 22px rgba(255,79,129,.55);
    }
    .cp-back-btn:active {
      transform: scale(.98);
    }
    .cp-back-btn:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(255,126,179,.35), 0 10px 22px rgba(255,79,129,.55);
    }
  `;
  document.head.appendChild(style);
})();

// ==== Styles (inline objects) ====
const styles = {
  app: {
    fontFamily: "'Quicksand', sans-serif",
    background: "linear-gradient(180deg, #fff8fb 0%, #fff 40%)",
    minHeight: "100vh",
    paddingBottom: "40px"
  },
  headerWrap: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    background: "linear-gradient(90deg,#ff9ec6,#ff7eb3,#ff86a4,#ffbdde)",
    backgroundSize: "300% 300%",
    animation: "cp-shimmer 12s ease infinite",
    boxShadow: "0 6px 18px rgba(255,126,179,.25)"
  },
  header: {
    padding: "14px 16px",
    textAlign: "center",
    color: "#fff",
    fontSize: "26px",
    fontWeight: 700,
    letterSpacing: ".3px",
  },
  headerSub: {
    fontFamily: "'Pacifico', cursive",
    fontSize: "15px",
    opacity: .9,
  },
  backBtnWrap: {
    textAlign: "center",
    margin: "15px 0 18px"
  },
  list: {
    margin: "16px auto 0",
    maxWidth: "720px",
    display: "flex",
    flexDirection: "column",
    gap: "22px",
    padding: "0 14px",
  },
  card: (delayMs) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    borderRadius: "22px",
    background: "linear-gradient(135deg, #ffd9e8, #ffeaf3)",
    boxShadow: "0 8px 24px rgba(255,126,179,.20)",
    cursor: "pointer",
    animation: "cp-fadeUp .5s ease forwards",
    opacity: 0,
    animationDelay: `${delayMs}ms`,
  }),
  panel: {
    width: "100%",
    borderRadius: "18px",
    background: "#fff",
    padding: "14px 14px 16px",
    boxShadow: "inset 0 0 0 1px rgba(255,182,193,.35)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imgWrap: {
    width: "100%",
    maxWidth: "520px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #fff6fa, #fff)",
    padding: "8px",
    boxShadow: "0 6px 16px rgba(0,0,0,.08)",
  },
  img: {
    width: "100%",
    height: "auto",
    maxHeight: "70vh",
    objectFit: "contain",
    borderRadius: "14px",
  },
  name: {
    marginTop: "12px",
    fontSize: "22px",
    fontWeight: 700,
    color: "#ff4f81",
    padding: "8px 14px",
    borderRadius: "999px",
    background:
      "linear-gradient(90deg, rgba(255,241,246,1) 0%, rgba(255,226,238,1) 100%)",
    boxShadow: "0 2px 0 rgba(255,160,190,.45), 0 6px 16px rgba(255,126,179,.18)",
    border: "1px solid rgba(255,182,193,.6)",
    animation: "cp-pop .35s ease both",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
    animation: "cp-fadeUp .25s ease both",
  },
  detail: (show) => ({
    width: "min(92vw, 720px)",
    maxHeight: "86vh",
    overflow: "auto",
    borderRadius: "22px",
    background: "#fff",
    boxShadow: "0 20px 50px rgba(0,0,0,.25)",
    transform: show ? "translateY(0)" : "translateY(24px)",
    opacity: show ? 1 : 0,
    transition: "all .35s ease",
    padding: "16px",
  }),
  detailImgWrap: {
    background: "linear-gradient(135deg, #fff6fa, #fff)",
    borderRadius: "18px",
    padding: "10px",
    boxShadow: "inset 0 0 0 1px rgba(255,182,193,.35)",
  },
  detailImg: {
    width: "100%",
    height: "auto",
    maxHeight: "60vh",
    objectFit: "contain",
    borderRadius: "14px",
  },
  detailTitle: {
    margin: "14px 4px 8px",
    textAlign: "center",
    fontSize: "24px",
    color: "#ff4f81",
    fontWeight: 700,
  },
  pill: {
    margin: "8px 0",
    padding: "10px 12px",
    borderRadius: "14px",
    background: "#fff5fa",
    border: "1px solid rgba(255,182,193,.6)",
    color: "#5f5f5f",
    lineHeight: 1.5,
  },
  thumbs: {
    marginTop: "10px",
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    justifyContent: "center",
  },
  thumb: {
    width: "84px",
    height: "84px",
    objectFit: "cover",
    borderRadius: "12px",
    border: "2px solid rgba(255,182,193,.7)",
    transition: "transform .2s ease",
  },
};

// ========= Detail Component =========
function DogDetail({ dog, onClose }) {
  const [show, setShow] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);

  React.useEffect(() => {
    const t = setTimeout(() => setShow(true), 30);
    return () => clearTimeout(t);
  }, []);

  return React.createElement(
    "div",
    { style: styles.overlay, onClick: onClose },
    React.createElement(
      "div",
      { style: styles.detail(show), onClick: (e) => e.stopPropagation() },
      React.createElement("div", { style: styles.detailImgWrap },
        React.createElement("img", { src: dog.mainImage, alt: dog.name, style: styles.detailImg })
      ),
      React.createElement("div", { style: styles.detailTitle }, dog.name),
      React.createElement("div", { style: styles.pill },
        React.createElement("strong", null, "🐾 Câu chuyện: "), " ", dog.story || "Chưa có thông tin."
      ),
      React.createElement("div", { style: styles.pill },
        React.createElement("strong", null, "💖 Tính cách: "), " ", dog.personality || "Chưa có thông tin."
      ),
      dog.otherImages?.length > 1 &&
        React.createElement("div", { style: styles.thumbs },
          dog.otherImages.map((img, idx) =>
            React.createElement("img", {
              key: idx,
              src: img || NO_IMAGE_URL,
              alt: dog.name,
              style: {
                ...styles.thumb,
                transform: hovered === idx ? "scale(1.06)" : "scale(1)",
              },
              onMouseEnter: () => setHovered(idx),
              onMouseLeave: () => setHovered(null),
            })
          )
        )
    )
  );
}

// ========= Main List =========
function ChoApp() {
  const [dogsData, setDogsData] = React.useState([]);
  const [selectedDog, setSelectedDog] = React.useState(null);

  React.useEffect(() => {
    const dogsRef = db.ref("branches/SaiGon/animals/Chó/instances");
    dogsRef.once("value").then((snap) => {
      const val = snap.val();
      if (!val) return;
      const arr = Object.values(val).map((item) => {
        const otherImages = Array.isArray(item["Hình ảnh"]) ? item["Hình ảnh"] : [NO_IMAGE_URL];
        return {
          mainImage: otherImages[0] || NO_IMAGE_URL,
          otherImages,
          name: item["Tên"] || "Chó Sài Gòn",
          story: item["Câu chuyện"] || "Chưa có thông tin",
          personality: item["Tính cách"] || "Chưa có thông tin",
        };
      });
      setDogsData(arr);
    });
  }, []);

  return React.createElement(
    "div",
    { id: "cherrypet-root", style: styles.app },

    // Header
    React.createElement(
      "div",
      { style: styles.headerWrap },
      React.createElement("div", { style: styles.header }, " Danh sách chó ở Sài Gòn ^^"),

      // Dòng chữ phụ
      React.createElement(
        "div",
        { style: { ...styles.header, padding: "0 0 6px", fontSize: "14px", fontWeight: 500, opacity: .9 } },
        React.createElement("span", { style: styles.headerSub }, "Yêu thương từ Cherry Pet Coffee")
      ),

      // Nút to & nổi bật ngay dưới dòng chữ phụ
      React.createElement(
        "div",
        { style: styles.backBtnWrap },
        React.createElement(
          "button",
          { className: "cp-back-btn", onClick: () => loadComponent("saigon") },
          "⬅️ Trở lại Sài Gòn"
        )
      )
    ),

    // List
    React.createElement(
      "div",
      { style: styles.list },
      dogsData.map((dog, idx) =>
        React.createElement(
          "div",
          { key: idx, style: styles.card(80 * idx), onClick: () => setSelectedDog(dog) },
          React.createElement(
            "div",
            { style: styles.panel },
            React.createElement("div", { style: styles.imgWrap },
              React.createElement("img", { src: dog.mainImage, alt: dog.name, style: styles.img })
            ),
            React.createElement("div", { style: styles.name }, dog.name)
          )
        )
      )
    ),

    // Detail
    selectedDog &&
      React.createElement(DogDetail, { dog: selectedDog, onClose: () => setSelectedDog(null) })
  );
}

// ==== Render ====
// ==== Render qua hàm để gọi lại khi loadComponent ====
function render_petsaigon_cho() {
  ReactDOM.render(React.createElement(ChoApp), document.getElementById("root"));
}

// Gọi lần đầu
render_petsaigon_cho();

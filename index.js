const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [branch, setBranch] = React.useState(null);

  const handleSelect = (b) => setBranch(b);
  const handleBack = () => setBranch(null);

  if (!branch) {
    return React.createElement(Home, { onSelect: handleSelect });
  }
  if (branch === "saigon") {
    return React.createElement(Saigon, { onBack: handleBack });
  }
  if (branch === "dalat") {
    return React.createElement(Dalat, { onBack: handleBack });
  }
  return null;
}

root.render(React.createElement(App));

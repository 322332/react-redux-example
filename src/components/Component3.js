import React from "react";

export default function Component3(props) {
  // https://react.dev/learn
  const arr = ["gökhan", "veysel", "sinan"];
  const [loading, setLoading] = React.useState(false);

  function showItem() {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }

  function hideItem() {
    setLoading(false);
  }

  return (
    <div>
      {loading ? <div className="asd">"gösteriliyor"</div> : null}

      <button onClick={showItem}>göster</button>
      <button onClick={hideItem}>sil</button>
      {arr.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

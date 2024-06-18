import "./App.css";

function App() {
  return (
    <>
      {/* https://iframe.mediadelivery.net/play/256620/cdd20bb7-58fb-4175-92bc-b4ffad8a7bee */}
      <iframe
        src="https://iframe.mediadelivery.net/play/256620/cdd20bb7-58fb-4175-92bc-b4ffad8a7bee?autoplay=true"
        loading="lazy"
        style={{
          border: "none",
          overflow: "hidden",
          width: "100wv",
          height: "100vh",
        }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen={true}
      ></iframe>
    </>
  );
}

export default App;

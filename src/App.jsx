import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const notify = () => {
    toast.success("CSS Copied", {
      autoClose: 1000,
      theme: "dark",
    });
  };
  const generateRandomGradient = () => {
    const randomColor = () =>
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    const color1 = randomColor();
    const color2 = randomColor();
    return `linear-gradient(to right, ${color1}, ${color2})`;
  };

  const [gradient, setGradient] = useState(generateRandomGradient());

  const handleGenerateGradient = () => {
    setGradient(generateRandomGradient());
  };

  return (
    <>
      <h2>{gradient}</h2>
      <div
        className="gradient-container"
        style={{ background: gradient, width: "1150px", height: "425px" }}
      >
        <button
          className="b"
          onClick={handleGenerateGradient}
          style={{ outlineColor: "none" }}
        >
          Generate Gradient
        </button>

        <CopyToClipboard text={gradient} onCopy={onCopy}>
          <button className="c" onClick={notify}>
            Copy CSS
          </button>
        </CopyToClipboard>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputText, setInputText] = useState("");

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  return (
    <form>
      <label>Mesajınız</label>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <div> {inputText.length > 3 ? "Mesajınız var!" : "Geçersiz Mesaj"} </div>
    </form>
  );
}

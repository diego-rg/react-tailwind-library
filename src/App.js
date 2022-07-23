import "./index.css";

import Navbar from "./components/NavBar";
import Button from "./components/Button";
import ButtonOutlined from "./components/ButtonOutlined";
import ButtonLarge from "./components/ButtonLarge";
import Card from "./components/Card";
import CardGrid from "./components/CardGrid";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <Navbar />
      <Button />
      <ButtonOutlined />
      <ButtonLarge />
      <Card />
      <CardGrid />
    </div>
  );
}

export default App;

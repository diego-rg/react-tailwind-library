import "./index.css";

import Button from "./components/Button";
import ButtonOutlined from "./components/ButtonOutlined";
import ButtonLarge from "./components/ButtonLarge";
import Card from "./components/Card";

function App() {
  return (
    <div className="App bg-gray-100 ">
      <Button />
      <ButtonOutlined />
      <ButtonLarge />
      <Card />
    </div>
  );
}

export default App;

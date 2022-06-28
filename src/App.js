import "./styles.css";
import HeadBar from "./components/HeadBar";
import Bod from "./components/Bod";

export default function App() {
  return (
    <div className="container">
      <HeadBar />
      <br />
      <Bod />
    </div>
  );
}

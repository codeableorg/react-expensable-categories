import Calculator from "./components/Calculator";
import { BsFillCartFill } from "react-icons/bs";
import { colors } from "./styles";

const category = {
  color: colors.red[500],
  name: "Groceries",
  icon: BsFillCartFill,
};

function App() {
  return (
    <div>
      <Calculator category={category} />
    </div>
  );
}

export default App;

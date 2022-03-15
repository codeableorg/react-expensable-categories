import styled from "@emotion/styled";
import SidebarNav from "./components/SidebarNav";
import { colors } from "./styles";
import { BiCategoryAlt } from "react-icons/bi";
import { BsReceiptCutoff } from "react-icons/bs";
import { GiTargeted } from "react-icons/gi";
import Categories from "./components/Categories/categories";
import { Route, Routes } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  background-color: ${colors.gray[50]};
  height: 100vh;
`;

const CategoryPage = () => {
  return (
    <div>
      <h1>Categories</h1>
      <Categories date={{ year: 2021, month: 8 }} type="expense" />
    </div>
  );
};

function App() {
  const navigation = [
    {
      name: "Categories",
      to: "/categories",
      icon: <BiCategoryAlt />,
      current: true,
    },
    {
      name: "Transactions",
      icon: <BsReceiptCutoff />,
      current: false,
      to: "/transactions",
    },
    { name: "Budgets", to: "/budgets", icon: <GiTargeted />, current: false },
  ];

  const handleClick = (item) => console.log(item);

  return (
    <Container>
      <SidebarNav initialNavigation={navigation} onItemClick={handleClick} />
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/transactions" element={<h1>Transactions</h1>} />
        <Route path="/budgets" element={<h1>Budgets</h1>} />
      </Routes>
    </Container>
  );
}

export default App;

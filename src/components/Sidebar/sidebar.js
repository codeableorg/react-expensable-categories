import * as S from "./styles";
import { ReactComponent as Logo } from "../../assets/expensable-logo.svg";
import { BiCategoryAlt } from "react-icons/bi";
import { BsReceiptCutoff } from "react-icons/bs";
import { GiTargeted } from "react-icons/gi";
import SidebarNav from "../SidebarNav";

function Sidebar() {
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
    <S.Wrapper>
      <Logo />
      <SidebarNav initialNavigation={navigation} onItemClick={handleClick} />
    </S.Wrapper>
  );
}

export default Sidebar;

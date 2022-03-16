import styled from "@emotion/styled";
import { format } from "date-fns";
import { useState } from "react";
import Categories from "../components/Categories/categories";
import MonthPicker from "../components/MonthPicker";
import { typography } from "../styles";

const Title = styled.h1`
  ${typography.head.sm}
  font-weight: 600;
`;

function CategoriesPage() {
  const [date, setDate] = useState({ year: 2021, month: 11 });
  const [type, setType] = useState("expense");

  const handleRightClick = () => {
    const newMonth = date.month + 1;
    if (newMonth > 11) {
      setDate({ year: date.year + 1, month: 0 });
    } else {
      setDate({ year: date.year, month: newMonth });
    }
  };

  const handleLeftClick = () => {
    const newMonth = date.month - 1;
    if (newMonth < 0) {
      setDate({ year: date.year - 1, month: 11 });
    } else {
      setDate({ year: date.year, month: newMonth });
    }
  };

  return (
    <div>
      <Title>Categories</Title>
      <MonthPicker
        label={format(new Date(date.year, date.month), "MMMM yyyy")}
        onRightClick={handleRightClick}
        onLeftClick={handleLeftClick}
      />
      <Categories {...{ date, type }} />
    </div>
  );
}

export default CategoriesPage;

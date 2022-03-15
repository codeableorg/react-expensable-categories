import { useEffect, useState } from "react";
import apiFetch from "../../services/api-fetch";
import PropTypes from "prop-types";
import { getMonthlyData } from "./utils";
import CategoriesList from "../CategoriesList";

function Categories({ date, type }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const monthlyData = getMonthlyData(categories, date, type);

  useEffect(() => {
    setLoading(true);
    setError(null);
    apiFetch("categories")
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  const renderCategories = () => {
    return loading ? (
      <p>Loading categories...</p>
    ) : (
      <CategoriesList data={monthlyData} />
    );
  };

  const renderError = () => <p>Error: {error.message}</p>;

  return <div>{error ? renderError() : renderCategories()}</div>;
}

Categories.propTypes = {
  date: PropTypes.shape({
    year: PropTypes.number,
    month: PropTypes.number,
  }),
  type: PropTypes.oneOf(["income", "expense"]),
};

export default Categories;

import React from "react";
import classes from "./ChooseMatchCategory.module.scss";
import CategoryIcons from "./categoryIcons/CategoryIcons";
import Categories from "./Categories/Categories";
import searchImg from "../../assets/images/search-svgrepo-com (1)-svg.png";
const ChooseMatchCategory = () => {
  return (
    <div className={classes.chooseMatchCategory}>
      <CategoryIcons />
      <Categories />
      <div className={classes.searchContainer}>
        <input
          type="text"
          placeholder={"Search by match"}
          className={classes.inputSearch}
        />
        <button className={classes.searchButton}>
          <img src={searchImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ChooseMatchCategory;

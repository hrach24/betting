import React from "react";
import classes from "./Categories.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
const Categories = () => {
  return (
    <ul className={classes.categoriesList}>
      <li className={classes.categoryItem}>
        <Link
          href=""
          className={classNames(classes.active, classes.categoryItemLink)}
        >
          Matches
        </Link>
      </li>
      <li className={classes.categoryItem}>
        <Link href="" className={classes.categoryItemLink}>
          Recommended
        </Link>
      </li>
      <li className={classes.categoryItem}>
        <Link href="" className={classes.categoryItemLink}>
          Upcoming Events
        </Link>
      </li>
      <li className={classes.categoryItem}>
        <Link href="" className={classes.categoryItemLink}>
          1st period
        </Link>
      </li>
      <li className={classes.categoryItem}>
        <Link href="" className={classes.categoryItemLink}>
          2nd period
        </Link>
      </li>
    </ul>
  );
};

export default Categories;

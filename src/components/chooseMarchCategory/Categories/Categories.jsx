import React from "react";
import classes from "./Categories.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
const Categories = () => {
  const media = useMediaQuery({ query: "(max-width: 850px)" });
  const secondMedia = useMediaQuery({ query: "(max-width: 740px)" });
  const thirdMedia = useMediaQuery({ query: "(max-width: 670px)" });
  const forthMedia = useMediaQuery({ query: "(max-width: 545px)" });
  return (
    <ul className={classes.categoriesList}>
      <li className={classes.categoryItem}>
        <Link
          to="#"
          className={classNames(classes.active, classes.categoryItemLink)}
        >
          Matches
        </Link>
      </li>
      {!forthMedia ? (
        <li className={classes.categoryItem}>
          <Link to="#" className={classes.categoryItemLink}>
            Recommended
          </Link>
        </li>
      ) : null}

      {!thirdMedia ? (
        <li className={classes.categoryItem}>
          <Link to="#" className={classes.categoryItemLink}>
            Upcoming Events
          </Link>
        </li>
      ) : null}

      {!secondMedia ? (
        <li className={classes.categoryItem}>
          <Link to="#" className={classes.categoryItemLink}>
            1st period
          </Link>
        </li>
      ) : null}

      {!media ? (
        <li className={classes.categoryItem}>
          <Link to="#" className={classes.categoryItemLink}>
            2nd period
          </Link>
        </li>
      ) : (
        <li className={classNames(classes.categoryItem, classes.svgItem)}>
          <div className={classes.iconWrapper}>
            <svg className={classes.svgOrderIcon}>
              <use xlinkHref="#reorder-alt"></use>
            </svg>
            <ul className={classes.svgItemDropDown}>
              <li className={classes.categoryItem}>
                <Link to="#" className={classes.categoryItemLink}>
                  2nd period
                </Link>
              </li>
            </ul>
          </div>
        </li>
      )}
    </ul>
  );
};

export default Categories;

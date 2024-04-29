import React, { useState } from "react";
import classes from "./LiveStreamList.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
const LiveStreamList = () => {
  const [childDropDown, setChildDropDown] = useState(false);
  const [parentHover, setParentHover] = useState(false);
  const media = useMediaQuery({ query: "(max-width: 850px)" });
  const secondMedia = useMediaQuery({ query: "(max-width: 670px)" });
  const thirdMedia = useMediaQuery({ query: "(max-width: 730px)" });
  const forthMedia = useMediaQuery({ query: "(max-width: 530px)" });
  const fifthMedia = useMediaQuery({ query: "(max-width: 435px)" });

  return (
    <ul className={classes.liveStreamList}>
      <li className={classes.liveStreamItem}>
        <Link to={"#"} alt={"#"} className={classes.liveStreamLink}>
          <svg className={classes.svgIcon}>
            <use xlinkHref="#ball-football"></use>
          </svg>
          <div className={classes.liveItemText}>Football</div>
        </Link>
      </li>
      {!fifthMedia ? (
        <li className={classes.liveStreamItem}>
          <Link to={"#"} alt={"#"} className={classes.liveStreamLink}>
            <svg className={classes.svgIcon}>
              <use xlinkHref="#tennis"></use>
            </svg>
            <div className={classes.liveItemText}>Tennis</div>
          </Link>
        </li>
      ) : null}

      {!forthMedia ? (
        <li className={classes.liveStreamItem}>
          <Link to={"#"} alt={"#"} className={classes.liveStreamLink}>
            <svg className={classes.svgIcon}>
              <use xlinkHref="#basketball"></use>
            </svg>
            <div className={classes.liveItemText}>Basketball</div>
          </Link>
        </li>
      ) : null}

      {!thirdMedia ? (
        <li className={classes.liveStreamItem}>
          <Link to={"#"} alt={"#"} className={classes.liveStreamLink}>
            <svg className={classes.svgIcon}>
              <use xlinkHref="#ice-hockey-puck"></use>
            </svg>
            <div className={classes.liveItemText}>Basketball</div>
          </Link>
        </li>
      ) : null}

      {!secondMedia ? (
        <li className={classes.liveStreamItem}>
          <Link to={"#"} alt={"#"} className={classes.liveStreamLink}>
            <svg className={classes.svgIcon}>
              <use xlinkHref="#volleyball-2"></use>
            </svg>
            <div className={classes.liveItemText}>Volleyball</div>
          </Link>
        </li>
      ) : null}

      {!media ? (
        <li className={classes.liveStreamItem}>
          <Link to={"#"} alt={"#"} className={classes.liveStreamLink}>
            <svg className={classes.svgIcon}>
              <use xlinkHref="#table-tennis-4"></use>
            </svg>

            <div className={classes.liveItemText}>Table Tennis</div>
          </Link>
        </li>
      ) : null}

      <li
        className={classNames(
          classes.liveStreamItem,
          classes.liveStreamItemLines,
        )}
        onMouseEnter={() => setParentHover(true)}
        onMouseLeave={() => setParentHover(false)}
      >
        <div className={classes.linesIconDown}>
          <svg className={classes.svgIconLines}>
            <use xlinkHref="#reorder-alt"></use>
          </svg>
          <svg className={classes.iconDown}>
            <use xlinkHref="#arrow-down-338"></use>
          </svg>
        </div>
        {parentHover ? (
          <div
            className={classes.dropDown}
            onMouseEnter={() => setParentHover(true)}
            onMouseLeave={() => setParentHover(false)}
          >
            <div className={classes.dropDownListSearchContainer}>
              <input
                type="text"
                placeholder={"Search by match"}
                className={classes.inputSearch}
              />
              <button className={classes.searchButton}>
                <svg className={classes.searchSvg}>
                  <use xlinkHref="#search"></use>
                </svg>
              </button>
            </div>

            <div className={classes.dropDownItemsContainer}>
              <div className={classes.dropDownItemsContainerText}>TOP</div>
              <ul className={classes.dropDownListItems}>
                <li className={classes.dropDownListItem}>
                  {childDropDown ? (
                    <div
                      className={classes.footballDropDown}
                      onMouseEnter={() => setChildDropDown(true)}
                      onMouseLeave={() => setChildDropDown(false)}
                    >
                      <ul className={classes.footballDropDownList}>
                        <li className={classes.dropDownListItem}>
                          <Link
                            to={"#"}
                            className={classes.dropDownListItemLink}
                          >
                            England
                          </Link>
                        </li>
                        <li className={classes.dropDownListItem}>
                          <Link
                            to={"#"}
                            className={classes.dropDownListItemLink}
                          >
                            Scotland
                          </Link>
                        </li>
                        <li className={classes.dropDownListItem}>
                          <Link
                            to={"#"}
                            className={classes.dropDownListItemLink}
                          >
                            Iceland
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ) : null}

                  <Link
                    to={"#"}
                    className={classes.dropDownListItemLink}
                    onMouseEnter={() => setChildDropDown(!childDropDown)}
                    onMouseLeave={() => setChildDropDown(false)}
                  >
                    <svg className={classes.dropDownListItemSvg}>
                      <use xlinkHref="#ball-football"></use>
                    </svg>
                    Football
                  </Link>
                </li>
                <li className={classes.dropDownListItem}>
                  <Link to={"#"} className={classes.dropDownListItemLink}>
                    <svg className={classes.dropDownListItemSvg}>
                      <use xlinkHref="#basketball"></use>
                    </svg>
                    Basketball
                  </Link>
                </li>
                <li className={classes.dropDownListItem}>
                  <Link to={"#"} className={classes.dropDownListItemLink}>
                    <svg className={classes.dropDownListItemSvg}>
                      <use xlinkHref="#tennis"></use>
                    </svg>
                    Tennis
                  </Link>
                </li>
                <li className={classes.dropDownListItem}>
                  <Link to={"#"} className={classes.dropDownListItemLink}>
                    <svg className={classes.dropDownListItemSvg}>
                      <use xlinkHref="#ice-hockey-puck"></use>
                    </svg>
                    Ice Hockey
                  </Link>
                </li>
              </ul>
              <div className={classes.dropDownItemsContainerText}>
                CATEGORIES FROM A TO Z
              </div>
              <ul className={classes.dropDownListItems}>
                <li className={classes.dropDownListItem}>
                  <Link to={"#"} className={classes.dropDownListItemLink}>
                    <svg className={classes.dropDownListItemSvg}>
                      <use xlinkHref="#ball-football"></use>
                    </svg>
                    Football
                  </Link>
                </li>
                <li className={classes.dropDownListItem}>
                  <Link to={"#"} className={classes.dropDownListItemLink}>
                    <svg className={classes.dropDownListItemSvg}>
                      <use xlinkHref="#basketball"></use>
                    </svg>
                    Basketball
                  </Link>
                </li>
                <li className={classes.dropDownListItem}>
                  <Link to={"#"} className={classes.dropDownListItemLink}>
                    <svg className={classes.dropDownListItemSvg}>
                      <use xlinkHref="#tennis"></use>
                    </svg>
                    Tennis
                  </Link>
                </li>
                <li className={classes.dropDownListItem}>
                  <Link to={"#"} className={classes.dropDownListItemLink}>
                    <svg className={classes.dropDownListItemSvg}>
                      <use xlinkHref="#ice-hockey-puck"></use>
                    </svg>
                    Ice Hockey
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </li>
    </ul>
  );
};

export default LiveStreamList;

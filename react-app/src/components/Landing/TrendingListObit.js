import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { getCreatorName } from "../../services/utils";
import default_img from "../../assets/images/default_img560by315.png";
import LoadingAnimation from "../LoadingAnimation.js";

const TrendingListObit = (data) => {
  const [obit, setObit] = useState({});
  const [creator, setCreator] = useState("");
  const [funding, setFunding] = useState("");

  const spinnerRef = useRef();

  // preserve code for use in changing content

  // useEffect(() => {
  //   let mounted = true;

  //   const showSpinner = () => spinnerRef.current.classList.remove('hide');

  //   if (mounted) {
  //     showSpinner()
  //   }
  //   return () => mounted = false;
  // }, []);

  useEffect(() => {
    let mounted = true;
    const {
      id,
      user_id,
      first_name,
      last_name,
      short_message,
      funding_goal,
      balance,
      obit_image,
      date_goal,
      category,
    } = data.data;

    const obitData = {
      id: id,
      user_id: user_id,
      first_name,
      last_name,
      short_message: short_message,
      funding_goal: funding_goal,
      balance: balance,
      obit_image: obit_image,
      date_goal: date_goal,
      category: category,
    };

    if (mounted) {
      setObit({...obitData});
    }
    return () => mounted = false;
  }, [data.data]);

  useEffect(() => {
    let mounted = true;

    const current = parseInt((obit.balance * 100) / obit.funding_goal);
    const percentFunded = current + "% donated";
    if(mounted) {
      setFunding(percentFunded);
    }
    return () => mounted = false;
  }, [obit.balance, obit.funding_goal])

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (obit.user_id) {
        try {
          const ownerName = await getCreatorName(obit.user_id);
          if(mounted) {
            setCreator(ownerName);
          }
        } catch (err) {
          console.error(err);
        }
      }
    })();
    return () => mounted = false;
  }, [obit.user_id]);

  useEffect(() => {
    let mounted = true;

    const hideSpinner = () => spinnerRef.current.classList.add('loadSpinner--hide');

    if (mounted) {
      setTimeout(() => {
        hideSpinner()

      }, 1750)
    }
    return () => mounted = false;
  }, []);

  return (
    <li className="trending-projects__right-panel-list-item">
      <div className="trending-projects__right-panel-list-item-container">
        <div className="trending-projects__right-panel-list-item-navlink-container">
          <NavLink
            to={"/obit/" + obit.id}
            className="trending-projects__right-panel-list-item-navlink"
            >
            <div ref={spinnerRef} className="loadSpinner">
              <LoadingAnimation size={"SML"} />
            </div>
            <div
              className="trending-projects__right-panel-list-item-navlink-wrapper"
              style={
                obit.obit_image
                  ? { backgroundImage: `url(${obit.obit_image})` }
                  : { backgroundImage: `url(${default_img})` }
              }
            ></div>
          </NavLink>
        </div>
        <div className="trending-projects__right-panel-list-item-info-container">
          <div>
            <NavLink
              to={"/obit/" + obit.id}
              className="trending-projects__right-panel-list-item-name"
            >
              {obit.first_name + " " + obit.last_name}
            </NavLink>
            <span className="trending-projects__right-panel-list-item-funding">
              {funding}
            </span>
            <div>
              <NavLink
                to={"/obit/" + obit.id}
                className="trending-projects__right-panel-list-item-creator"
              >
                <span>{"By " + creator}</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TrendingListObit;

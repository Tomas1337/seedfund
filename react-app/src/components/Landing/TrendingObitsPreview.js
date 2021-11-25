import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { fillBar, getCreatorName } from "../../services/utils";
import TrendingListObit from "./TrendingListObit";
import default_img_large from "../../assets/images/default_img620by350.png"
import LoadingAnimation from "../LoadingAnimation.js";

const TrendingObitsPreview = () => {
  const [trending, setTrending] = useState([]);
  const [featured, setFeatured] = useState({});
  const [creator, setCreator] = useState("Fake User");

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
    let data = null;
    (async () => {
      const res = await fetch("/api/obits/trending", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(mounted) {
        data = await res.json();
        if (data) {
          setTrending(data.trending_obits);
        }
      }
    })();
    return () => mounted = false;
  }, []);

  useEffect(() => {
    let mounted = true;
    let random;
    (async () => {
      const res = await fetch("/api/obits/random", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(mounted) {
        random = await res.json();

        if (random) {
          setFeatured(random.random_obit[0]);
        }
      }
    })();
    return () => mounted = false;
  }, []);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (featured.user_id) {
        try {
          const ownerName = await getCreatorName(featured.user_id);
          if(mounted) {
            setCreator(ownerName);
          }
        } catch (err) {
          console.error(err);
        }
      }
    })();
    return () => mounted = false;
  }, [featured]);

  let databaseInfo;

  if (trending) {
    databaseInfo = trending;
  } else {
    databaseInfo = null;
  }

  useEffect(() => {
    let mounted = true;

    const hideSpinner = () => spinnerRef.current.classList.add('loadSpinner--hide');

    if(mounted) {
      setTimeout(() => {
        hideSpinner()
      }, 2000)
    }
    return () => mounted = false;
  }, []);

  return (
    <>
      <div className="trending-obits">
        <div className="trending-obits__container">
          <div className="trending-obits__wrapper">
            <div className="trending-obits__featured-card">
              <section>
                <h3 className="trending-obits__featured-card-header">
                  FEATURED OBITUARY
                </h3>

                <div className="trending-obits__featured-card-hover-field">
                  <div className="trending-obits__featured-card-navlink">
                    <div className="trending-obits__featured-card-focusable-link">
                      <NavLink to={"/obit/" + featured.id}>
                        <div ref={spinnerRef} className="loadSpinner">
                          <LoadingAnimation size={"LRG"} />
                        </div>
                        <div
                          className="trending-obits__featured-card-image"
                          style={
                            featured.obit_image
                              ? { backgroundImage: `url(${featured.obit_image})` }
                              : { backgroundImage: `url(${default_img_large})` }
                          }
                        ></div>
                        <div className="trending-obits__featured-card-progress-bar">
                          <div
                            className="trending-obits__featured-card-progression-color"
                            style={fillBar(
                              featured.balance,
                              featured.funding_goal
                            )}
                          ></div>
                        </div>
                      </NavLink>
                    </div>
                    <h3 className="trending-obits__featured-card-obit-name">
                      {featured.first_name + ' ' + featured.middle_name + ' ' + featured.last_name}
                    </h3>
                    <p className="trending-obits__featured-card-obit-desc">
                      {featured.short_message}
                    </p>
                    <div className="trending-obits__featured-card-obit-creator-container">
                      <NavLink
                        to={{
                          pathname: "/discover/users/" + creator,
                          state: { creator_id: featured.user_id },
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        <span className="trending-obits__featured-card-creator">
                          By {creator}
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="trending-obits__right-panel">
              <h3 className="trending-obits__right-panel-header">
                TRENDING OBITUARIES
              </h3>
              <div>
                <ul className="trending-obits__right-panel-list">
                  {databaseInfo.map((obit, i) => (
                    <TrendingListObit key={i} data={obit} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingObitsPreview;

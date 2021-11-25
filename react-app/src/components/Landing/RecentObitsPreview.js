import React, { useState, useEffect } from "react";
import ObitCard from "../Obituaries/ObitCard";

const RecentObitsPreview = () => {
  const [newest, setNewest] = useState([]);

  useEffect(() => {
    let data;
    (async () => {
      const res = await fetch("/api/obits/newest", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      data = await res.json();
      if (data) {
        setNewest(data.newest_obits);
      }
    })();
  }, []);

  let databaseInfo;

  if (newest) {
    databaseInfo = newest;
  }
  // } else {
  //   databaseInfo = fakenewest;
  // }

  return (
    <>
      <div className="recent-projects">
        <div className="recent-projects__wrapper">
          <h3 className="recent-projects__header">Latest Obituaries</h3>
          <ul className="recent-projects__list">
            {databaseInfo.map((project, i) => (
              <ObitCard key={i} data={project} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RecentObitsPreview;

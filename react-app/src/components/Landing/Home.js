import React from "react";
import QuickSelectBar from "./QuickSelectBar";
import TrendingProjectsPreview from "./TrendingProjectsPreview";
import RecentProjectsPreview from "./RecentProjectsPreview";
import TrendingObitsPreview from "./TrendingObitsPreview";
import RecentObitsPreveiw from "./RecentObitsPreview";
const Home = () => {
  return (
    <div className="landing__container">
      {/* <QuickSelectBar /> */}
      {/* <TrendingProjectsPreview /> */}
      <TrendingObitsPreview />
      <RecentObitsPreveiw />
      {/* <RecentProjectsPreview /> */}
      
    </div>
  );
};

export default Home;

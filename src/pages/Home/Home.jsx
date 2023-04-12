import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import CategoryJobs from "../../components/CategoryJobs/CategoryJobs";
import Jobs from "../../components/Jobs/Jobs";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  const jobs = useLoaderData();

  return (
    <div className="home">
      <Header />
      <CategoryJobs />
      <Jobs jobs={jobs} />
    </div>
  );
};

export default Home;

import { useState } from "react";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../Hooks/useFetch";
import Carousal from "../../../components/Carousal/Carousal";

const TopRated = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endPoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carousalSection">
      <ContentWrapper>
        <span className="carousalTitle">Top Rated</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousal data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  );
};

export default TopRated;

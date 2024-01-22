import { useState } from "react";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../Hooks/useFetch";
import Carousal from "../../../components/Carousal/Carousal";

const Popular = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endPoint}/popular`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carousalSection">
      <ContentWrapper>
        <span className="carousalTitle">What`s Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousal data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  );
};

export default Popular;

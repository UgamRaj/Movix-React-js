import { useState } from "react";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../Hooks/useFetch";
import Carousal from "../../../components/Carousal/Carousal";

const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endPoint}`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="carousalSection">
      <ContentWrapper>
        <span className="carousalTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousal data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;

import { useState } from "react";
import "./SwitchTabs.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTabs] = useState(0);
  const [left, setLeft] = useState(0);
  const activeTabs = (tab, i) => {
    setLeft(i * 100);
    setTimeout(() => {
      setSelectedTabs(i);
    }, 300);
    onTabChange(tab, i);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, i) => {
          return (
            <span
              key={i}
              className={`tabItem ${selectedTab === i ? "active" : ""}`}
              onClick={() => activeTabs(tab, i)}
            >
              {tab}
              {console.log(tab)}
            </span>
          );
        })}
        <span className="movingBg" style={{ left }}></span>
      </div>
    </div>
  );
};

export default SwitchTabs;

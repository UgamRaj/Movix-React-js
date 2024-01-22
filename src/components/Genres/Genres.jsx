import { useSelector } from "react-redux";
import "./Genres.scss";

const Genres = ({ data }) => {
  const { generes } = useSelector((state) => state.home);

  return (
    <div className="genres">
      {data?.map((g) => {
        if (!generes[g]?.name) {
          return;
        }

        return (
          <div className="genre" key={g}>
            {generes[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;

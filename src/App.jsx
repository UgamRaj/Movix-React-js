import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/Api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import SearchResult from "./pages/SearchResult/SearchResult";
import Explore from "./pages/Explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  const fetchApiConfiguration = async () => {
    try {
      const res = await fetchDataFromApi("/configuration");
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiConfiguration();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediatype" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

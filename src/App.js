import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DMain from "./pages/DMain";
import MFullview from "./pages/MFullview";
import MMain from "./pages/MMain";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/m-fullview":
        title = "";
        metaDescription = "";
        break;
      case "/m-main":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DMain />} />
      {/* <Route path="/m-fullview" element={<MFullview />} /> */}
      <Route path="/m-main" element={<MMain />} />
    </Routes>
  );
}
export default App;

import Detail from "../views/detail";
import Entire from "../views/entire";
import Home from "../views/home";
import NotFound from "../views/notFound";
import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route
} from "react-router-dom";
import App from "../App";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="entire" element={<Entire />} />
      <Route path="detail" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;

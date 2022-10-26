import { BrowserRouter, Routes as NavRoutes, Route } from "react-router-dom";
import Home from "../pages/home";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavRoutes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </NavRoutes>
    </BrowserRouter>
  );
};

export default Routes;
import { BrowserRouter, Routes as NavRoutes, Route } from "react-router-dom";
import Home from "../pages/home";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Information from "../pages/information";
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});

const Routes = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <NavRoutes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/information" index element={<Information />} />
          </Route>
        </NavRoutes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default Routes;

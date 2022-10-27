import { BrowserRouter, Routes as NavRoutes, Route } from "react-router-dom";
import Home from "../pages/home";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
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

        </Route>
      </NavRoutes>
     </BrowserRouter>
    </ChakraProvider>
    
  );
};

export default Routes;
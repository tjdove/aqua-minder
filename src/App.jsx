import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//Pages

import { UserForm } from "./pages/UserForm";
import Faq from "./pages/help/Faq";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import MainDisplay, { mainDisplayLoader } from "./components/MainDisplay";

//Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainDisplay />} loader={mainDisplayLoader} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
      </Route>

      <Route path="newuser" element={<UserForm />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

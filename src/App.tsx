import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//Pages

import { UserForm } from "./pages/UserForm";
// import Contact, { contactAction } from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
// import Careers, { careersLoader } from "./pages/careers/Careers";
// import CareersError from "./pages/careers/CareersError";

// import CareerDetails, {
//   careerDetailsLoader,
// } from "./pages/careers/CareerDetails";
//Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
// import CareersLayout from "./layouts/CareersLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        {/* <Route path="contact" element={<Contact />} action={contactAction} /> */}
      </Route>

      <Route path="newuser" element={<UserForm />} />
      {/* <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index loader={careersLoader} element={<Careers />} />
        <Route
          path=":id"
          loader={careerDetailsLoader}
          element={<CareerDetails />}
        />
      </Route> */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

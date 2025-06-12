import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import useDarkMode from "./hooks/useDarkMode";

import FaviconSwitcher from "./components/FaviconSwitcher";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import ContactLayout from "./layout/ContactLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import JobsLayout from "./layout/JobsLayout";
import Jobs, { jobsLoader } from "./pages/Jobs";
import JobDetails, { jobDetailsLoader } from "./pages/JobDetails";
import Error from "./components/Error";
import NotFound from "./components/NotFound";

const App = () => {
  const isDarkMode = useDarkMode();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="jobs" element={<JobsLayout />} errorElement={<Error />}>
          <Route index element={<Jobs />} loader={jobsLoader} />
          <Route
            path=":id"
            element={<JobDetails />}
            loader={jobDetailsLoader}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <FaviconSwitcher isDarkMode={isDarkMode} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Whatourclientssay = React.lazy(() => import("pages/Whatourclientssay"));
const Solutions1439768 = React.lazy(() => import("pages/Solutions1439768"));
const WhyCS1439768 = React.lazy(() => import("pages/WhyCS1439768"));
const Blog1439768 = React.lazy(() => import("pages/Blog1439768"));
const AboutUs1439768 = React.lazy(() => import("pages/AboutUs1439768"));
const Home1439768 = React.lazy(() => import("pages/Home1439768"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1439768" element={<Home1439768 />} />
          <Route path="/aboutus1439768" element={<AboutUs1439768 />} />
          <Route path="/blog1439768" element={<Blog1439768 />} />
          <Route path="/whycs1439768" element={<WhyCS1439768 />} />
          <Route path="/solutions1439768" element={<Solutions1439768 />} />
          <Route path="/whatourclientssay" element={<Whatourclientssay />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Whatourclientssay = React.lazy(() => import("pages/Whatourclientssay"));
const Solutions = React.lazy(() => import("pages/Solutions"));
const WhyCS = React.lazy(() => import("pages/WhyCS"));
const Blog = React.lazy(() => import("pages/Blog"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/whycs" element={<WhyCS />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/whatourclientssay" element={<Whatourclientssay />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

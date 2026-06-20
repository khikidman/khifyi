import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Music from "./pages/Music";
import Blog from "./pages/Blog";
import BlogPost from "./blog/BlogPost";
import Privacy from "./pages/Privacy"
import ArcPrivacy from "./pages/ArcPrivacy"
import ArcSafety from "./pages/ArcSafety"
import ArcTerms from "./pages/ArcTerms"
import FullStoryPage from "./pages/FullStoryPage"

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/music" element={<Music />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/arc" element={<ArcPrivacy />} />
        <Route path="/arc/terms" element={<ArcTerms />} />
        <Route path="/arc/eula" element={<Navigate to="/arc/terms" replace />} />
        <Route path="/arc/privacy" element={<ArcPrivacy />} />
        <Route path="/arc/safety" element={<ArcSafety />} />
        <Route path="/full-story" element={<FullStoryPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

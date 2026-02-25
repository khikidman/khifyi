import { BrowserRouter as Router, Routes, Route } from "react-router-dom";import Home from './pages/Home.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Music from './pages/Music.tsx';
import Blog from './pages/Blog.tsx';
import BlogPost from "./blog/BlogPost.tsx";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/music" element={<Music />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;

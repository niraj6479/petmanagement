import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Blogs from "./component/Blogs";
import Contact from "./component/Contact";
import Footer from "./component/Footer"; // make sure path is correct
import BlogDetail from "./component/BlogDetail";
import Feature from "./component/Feature";
// import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar - No padding */}

      {/* Page Content - With padding */}
      <div className="p-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blogdetail/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/feature" element={<Feature />} />
        </Routes>
      </div>

      {/* Footer - No padding */}
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import Data from "./pages/Data";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navbar />
        <main className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </main>
        <footer className="border-t border-slate-200 py-8 mt-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Hệ thống xử lý chất thải EcoSystem. Bảo lưu mọi quyền.
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Portfolio } from "./pages/Portfolio";
import { SideBar } from "./components";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen bg-neutral-900">
        {/* Left Sidebar */}
        <SideBar />

        {/* Main Content Area */}
        <div className="w-10/12 p-4">
          <Routes>
            <Route path="/" Component={Portfolio} />
            <Route
              path="/opportunities"
              Component={() => <h1 className="text-white">Opportunities</h1>}
            />
            <Route
              path="/documents"
              Component={() => <h1 className="text-white">Documents</h1>}
            />
            <Route
              path="/help-centre"
              Component={() => <h1 className="text-white">Help Centre</h1>}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

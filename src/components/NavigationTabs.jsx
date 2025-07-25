import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { label: "Graphic Design", path: "/" },
  { label: "Motion Design", path: "/video" },
  { label: "Front-end & Flutter", path: "/frontend" },
  { label: "UX/UI", path: "/uxui" },
];

const NavigationTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="bg-header py-4">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {tabs.map((tab) => (
            <Button
              key={tab.label}
              variant={
                location.pathname === tab.path ? "light" : "outline-light"
              }
              onClick={() => navigate(tab.path)}
              className={`fw-semibold px-4 custom-tab-button ${
                location.pathname === tab.path ? "active-tab" : ""
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationTabs;

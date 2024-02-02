import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { routes } from "../../routes/routeConstant";

const TabData = [
  { value: "home", label: "Home" },
  { value: "services", label: "Services"},
  { value: "contact", label: "Contact Us"},
  { value: "about", label: "About Us"},
];
const styles = {
  paperContainer: {
    backgroundColor: '#063970',
    color: 'white',
    fontSize: '16px',

  }
};
const GlobalTabs = () => {
  const navigate = useNavigate();
 
  const [indicator, setIndicator] = useState("services");
  const handleChange = (ev: React.ChangeEvent<{}>, value: any) => {
    setIndicator(value);
    if (value === 'home') {
      navigate(routes.home);
    } else if (value === 'services') {
      navigate(routes.services);
    } else if (value === 'contact') {
      navigate(routes.contact);
    } else if (value === 'about') {
      navigate(routes.about);
    }
    
  };
  return (
    <Tabs
      sx={{ marginLeft: "auto" }}
      value={indicator}
      indicatorColor="secondary"
      onChange={handleChange}
    >
      {
        TabData.map((data, index) => {
          const {value, label} = data; 
          return (
            <Tab
            style={styles.paperContainer}
              key={index}
              label={label}
              value={value}
              sx={{ textTransform: "none" }}
            />
          );
        })
      }
    </Tabs>
  );
};

export default GlobalTabs;

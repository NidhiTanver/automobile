import React from "react";

const styles = {
  paperContainer: {
    height: 1000,
    // backgroundImage: `url(${Background})`
  },
};

const Dashboard = () => {
  return (
    <div style={styles.paperContainer}>
      <h4 className="dashboard-cls">Dashboard</h4>
    </div>
  );
};

export default Dashboard;

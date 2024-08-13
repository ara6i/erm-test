import React from "react";

const StatusIcon = ({ status }) => {
  const statusColors = {
    active: "bg-green-500",
    inactive: "bg-red-500",
    pending: "bg-yellow-500",
  };

  return (
    <span
      className={`inline-block w-3 h-3 rounded-full ${statusColors[status]}`}
    ></span>
  );
};

export default StatusIcon;

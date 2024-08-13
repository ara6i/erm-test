import React from "react";

type Status = "active" | "inactive" | "pending";

const StatusIcon = ({ status }: { status: Status }) => {
  const statusColors: Record<Status, string> = {
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

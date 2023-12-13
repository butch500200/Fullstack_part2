import React from "react";

export const Notification = ({ message, positive }) => {
  if (message === null) {
    return null;
  }

  console.log(positive);

  if (positive) {
    return <div className="successMessage">{message}</div>;
  }
  return <div className="failMessage">{message}</div>;
};

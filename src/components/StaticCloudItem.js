import React from "react";

export const StaticCloudItem = ({ data }) => {
  return (
    <div>
      <a>
        <img height="80" width="80" src={data} className="logo" />
      </a>
    </div>
  );
};

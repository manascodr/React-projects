import React from "react";

const Display = (props) => {
  const details = props.details;

  const renderDetails = details.map((detail) => {
    return (
      <div key={detail.id}>
        <div className="img">
          <img src={detail.img} alt="" />
        </div>
        <p > {detail.name}</p>
      </div>
    );
  });
  return <div className="display">{renderDetails}</div>;
};

export default Display;

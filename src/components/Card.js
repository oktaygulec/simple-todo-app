import React from "react";

const Card = ({ children }) => {
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card rounded-3">
              <div className="card-body p-4">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;

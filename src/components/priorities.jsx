import React, { Component } from "react";
const Priorities = () => {
  const cards = [
    [
      <span style={{ textAlign: "left" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ maxWidth: "64px" }}
          class="text-white bg-rad"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      </span>,
      "DevOps outsourcing",
      "Our devoted DevOps teams will design, implement and manage your cloud infrastructure along with continuous integration and automation of workflows. All with 24/7 support, monitoring and maintenance.",
    ],
    [
      <span style={{ textAlign: "left" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ maxWidth: "64px" }}
          class="h-6 w-6 text-white bg-rad"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          ></path>
        </svg>
      </span>,
      "Cloud Services",
      "Our custom cloud-native development services will help you develop a highly stable and performing Cloud-native application. Nebula helps you establish innovation, speed, and efficiency, making the process of migrating existing workloads to the cloud, less of a challenge.",
    ],
    [
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "64px" }}
        class="h-6 w-6 text-white bg-rad"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        ></path>
      </svg>,
      "Machine learning and data analysis",
      "Gain insight and transform it into business value. Our services include acquiring, processing, and analyzing all the data you need to attain overall potential.",
    ],
  ];

  return (
    <div className="bg-dark pb-lg-5">
      <div className="container pt-lg-5 mt-lg-5">
        <div className="row " style={{ textAlign: "left" }}>
          <h1 class="text-light mb-3 fw-bolder" style={{ fontSize: "48px" }}>
            We know your priorities
          </h1>
          <p className=" text-light fs-5 pb-lg-5" style={{ maxWidth: "800px" }}>
            Dive into the opportunities of the future and make the first move
            towards improving your business today!
          </p>
        </div>

        <div className="row">
          {cards.map((c) => (
            <div className=" col-md">
              <div
                class="card  bg-rad"
                style={{
                  maxWidth: "25rem",
                  maxHeight: "25rem",
                  borderTopRightRadius: "50%",
                  borderBottomRightRadius: "50%",
                  borderBottomLeftRadius: "50%",
                }}
              >
                {c[0]}
                <div class="card-body" style={{ textAlign: "left" }}>
                  <h4 class="card-title text-light mb-4">{c[1]}</h4>
                  <p class="card-text text-light">{c[2]}</p>
                </div>
                <div className=" card-body">
                  <a href="#" class="btn btn-info text-light  mb-lg-5 outline">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Priorities;

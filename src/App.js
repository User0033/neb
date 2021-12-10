import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import OpeningSegment from "./components/openingSegment";
import OpeningFooter from "./components/openingFooter";
import SecondSegment from "./components/secondSegment";
import DiveIn from "./components/diveIn";
import ListComponent from "./components/listComponent";
import Altius from "./components/altius";
import Trused from "./components/trused";
import LiNode from "./components/linode";
import Priorities from "./components/priorities";
import Footer from "./components/footer/footer";
function App() {
  const [state, setState] = useState({
    enterprise: [
      [
        "ENTERPRISE-LEVEL",
        "Cloud Consulting And Services",
        "We provide DevOps services and outsourcing to help your teams collaborate, coordinate, improve their responsiveness to customer needs, and achieve business goals faster.",
      ],
      [
        "DevOps outsourcing",
        "Managed Cloud Services & Solutions",
        "Incident management",
        "Security audits",
        "Technical support (Tier 0, 1 and 2)",
      ],
      [
        "Container orchestration - Docker and Kubernetes",
        "Continuous Integration (CI) and Continuous Delivery (CD)",
        "Application infrastructure management",
        "Public Cloud management",
        "Hybrid and private cloud management",
      ],
    ],
    futureProof: [
      [
        "FUTURE PROOF",
        "Cloud - Native Web Development",
        "Accelerate digital innovation and get better business results through Nebula’s Cloud-Native Web Development services. Introduce your company to the newest technologies and pragmatic strategies while cutting costs.",
      ],
      [
        "Tech Stack modernization",
        "Web development",
        "Machine learning",
        "Data analysis",
        "Legacy to cloud migration",
      ],
      [
        "Flexible and scalable applications",
        "Research & Development (RnD)",
        "Database modeling and engineering",
        "Vendor-independency",
        "Project planning",
      ],
    ],
  });

  return (
    <div className="App">
      <Header />

      <main>
        <OpeningSegment />
        <OpeningFooter />
        <SecondSegment />
        <Priorities />
        <DiveIn />
        <ListComponent
          firstCol={state.enterprise[0]}
          secondCol={state.enterprise[1]}
          thirdCol={state.enterprise[2]}
        />
        <Altius />

        <ListComponent
          firstCol={state.futureProof[0]}
          secondCol={state.futureProof[1]}
          thirdCol={state.futureProof[2]}
        />
        <Trused />
        <LiNode />
      </main>

      <Footer />
    </div>
  );
}

export default App;

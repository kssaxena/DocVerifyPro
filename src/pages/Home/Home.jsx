import React from "react";
import Button from "../../components/ButtonWrapper";
import Pdf_InputCard from "../../components/Pdf_InputCard";

const Home = () => {
  return (
    <div className="flex justify-center items-center w-full py-40 gap-40">
      <Pdf_InputCard />
      <Pdf_InputCard />
    </div>
  );
};

export default Home;

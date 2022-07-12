import React from "react";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Modal from "./components/main/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="app-container">
      <Header />
      <Main openModal={openModal} />
      <Footer />
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default App;

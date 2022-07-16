import React from "react";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { SideMenu } from "./components/header/SideMenu";
import Main from "./components/main/Main";
import Modal from "./components/main/Modal";
import PlayGround from "./components/PlayGround";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [sideMenuClassName, setSideMenuClassName] = useState("sideMenu-hide");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  // return <PlayGround />;
  return (
    <div className="app-container">
      <Header
        setSideMenuClassName={setSideMenuClassName}
        isModalOpen={isModalOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
      <Main openModal={openModal} />
      <Footer />
      {isModalOpen && <Modal closeModal={closeModal} />}
      <SideMenu
        sideMenuClassName={sideMenuClassName}
        setSideMenuClassName={setSideMenuClassName}
        isModalOpen={isModalOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
        isSideMenuOpen={isSideMenuOpen}
      />
    </div>
  );
};

export default App;

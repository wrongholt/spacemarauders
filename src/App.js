import React, { useState } from "react";
import "./css/custom.scss";
import "./js/scripts";
import Contact from "./components/contact";
import Nav from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Market from "./components/market";
import Leaderboard from "./components/leaderboard";
import Footer from "./components/footer";
import UserData from "./components/userData";
import Modal from "react-bootstrap/Modal";
function App() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [dataUsername, setDataUsername] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const sendToAPI = (sendData) => {
    const dataToSend = {
      ...sendData,
    };
    setDataUsername(dataToSend);
    setShow3(true);
  };
  return (
    <div id="page-top">
      <Nav onSendToAPI={sendToAPI} />
      <Hero />
      <Modal
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show3}
        onHide={handleClose3}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <UserData username={dataUsername} />
        </Modal.Body>
      </Modal>
      <About />
      <Projects />
      <div className="col-lg-12  lh-lg text-center tables">
        <h3>Tables</h3>
        <div className="d-flex justify-content-center flex-row gap-2 align-items-md-center">
          <a className="btn btn-primary block" onClick={handleShow}>
            Leaderboard
          </a>
          <a className="btn btn-primary block" onClick={handleShow2}>
            Emporium
          </a>
        </div>
      </div>
      <Modal
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Leaderboard />
        </Modal.Body>
      </Modal>
      <Modal
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show2}
        onHide={handleClose2}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Market />
        </Modal.Body>
      </Modal>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

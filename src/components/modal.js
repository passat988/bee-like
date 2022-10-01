import { useRef, useState } from "react";
import { Form } from "./form";

const Modal = (props) => {
  const isModalOpen = props.isModalOpen
  const setIsModalOpen = props.setIsModalOpen

  const myModal = useRef(null);

  const missClick = function (event) {
    if (event.target == myModal) {
      myModal.style.display = "none";
      setIsModalOpen(false)
    }
  };
 document.addEventListener("click", missClick, false);

 

  if (!isModalOpen) {
    return null;
  } else {
    return (
      <div id="myModal" ref={myModal} className={(isModalOpen)? "modal modalblock" : "modal none"}>
        <div className="modal-content">
          <span className="close" onClick={()=>setIsModalOpen(false)}>
            &times;</span>
          <div className="form-wrap">
            <div className="profile">
              <h1>Замовити</h1>
            </div>
            <Form setIsModalOpen={setIsModalOpen}/>
          </div>
        </div>
      </div>
    );
  }
};

export { Modal };

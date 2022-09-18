import Form from "./form";

const Modal = () => {
  const closeForm = function (){
    const modal = document.getElementById('myModal')
    modal.style.display = "none";
  }

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeForm}>&times;</span>
        <div className="form-wrap">
          <div className="profile">
            <h1>Замовити</h1>
          </div>
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default Modal;

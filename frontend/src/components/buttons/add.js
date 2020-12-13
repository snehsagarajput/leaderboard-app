import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Form } from "react-bootstrap";


const AddButton = ({ addModalVisible, setAddModalVisible, DATA }) => {
      const [name, setName] = useState("");


      const handleClose = () => {
            setName("");
            setAddModalVisible(false);
      }

      const handleAdd = () => {
            let req = new XMLHttpRequest();
            req.onreadystatechange = function () {
                  if (this.readyState === 4 && this.status === 200) {
                        const dataReceived = this.responseText;
                        if (dataReceived === "1") {
                              window.location.reload();
                        }
                        else if (dataReceived === "2") {
                              alert("Team name already exist");
                        }
                        else {
                              alert("Some Error");
                        }
                  }
            }
            req.open("POST", DATA.SOURCE + "AddData", true);
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            req.send("name=" + name);
      };

      return (
            <Modal show={addModalVisible} onHide={handleClose} backdrop={'static'} keyboard={false}>
                  <Modal.Header closeButton>
                        <Modal.Title>ADD TEAM</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        <Form>
                              <table className="add-table-style" cellpadding="10px" cellspacing="5px">
                                    <tr>
                                          <td>
                                                <label htmlFor="name" >Team Name</label>
                                          </td>
                                          <td>
                                                <input className={"add-input-box arrow-hidden"} type="text" id="team-name"
                                                      value={name}
                                                      onChange={(e) => { setName(e.target.value); }} required />
                                          </td>
                                    </tr>
                              </table>
                        </Form>
                        <button className="add-edit-button" style={{ marginLeft: "35%", marginTop: "3%" }}
                              onClick={() => { handleAdd() }} disabled={name === ""}>
                              <span className="button-text">
                                    Add
                                    </span>
                        </button>
                  </Modal.Body>
            </Modal >
      );
};

export default AddButton;
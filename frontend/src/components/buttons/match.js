import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Form} from "react-bootstrap";


const MatchButton = ({ editModalVisible, setEditModalVisible, DATA }) => {
      const [teamA, setTeamA] = useState("");
      const [teamB, setTeamB] = useState("");
      const [matchStatus, setMatchStatus] = useState("");
      const [teamsList, setTeamsList] = useState([]);


      const handleClose = () => {
            setTeamA("");
            setTeamB("");
            setMatchStatus("");
            setEditModalVisible(false);
      }

      useEffect(() => {
            if (teamA !== "" && teamB !== "") {
                  if (teamA === teamB) {
                        setTeamB("");
                        document.getElementById("teamB").selectedIndex = 0;
                        alert("Choose different teams");
                  }
            }
      }, [teamA, teamB])

      const handleAdd = () => {
            let req = new XMLHttpRequest();
            req.onreadystatechange = function () {
                  if (this.readyState === 4 && this.status === 200) {
                        const dataReceived = this.responseText;
                        console.log(dataReceived);
                        if (dataReceived === "1") {
                              window.location.reload();
                        }
                        else if (dataReceived === "0") {
                              alert("Adding Match Failed");
                        }
                        else {
                              alert("Some Error");
                        }
                  }
            }
            req.open("POST", DATA.SOURCE + "AddMatch", true);
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            console.log("teamA=" + teamA + ";" + "&teamB=" + teamB + ";" + "&status=" + matchStatus);
            req.send("teamA=" + teamA + "&teamB=" + teamB + "&status=" + matchStatus);
      };
      let tempArray = [];

      const listElements = () => {
            for (let i = 1; i < teamsList.length; ++i) {
                  tempArray.push(<option value={teamsList[i]}>{teamsList[i]}</option>);
            }
            return tempArray;
      }

      useEffect(() => {
            if (editModalVisible) {
                  let req = new XMLHttpRequest();
                  req.onreadystatechange = function () {
                        if (this.readyState === 4 && this.status === 200) {
                              const dataReceived = this.responseText;
                              const parsedData = JSON.parse(dataReceived);
                              setTeamsList(parsedData);
                        }
                  }
                  req.open("POST", DATA.SOURCE + "TeamsList", true);
                  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                  req.send();
            }
      }, [editModalVisible]);

      return (
            <Modal show={editModalVisible} onHide={handleClose} backdrop={'static'} keyboard={false}>
                  <Modal.Header closeButton>
                        <Modal.Title>ADD MATCH</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        <Form>
                              <table className="add-table-style" cellpadding="10px" cellspacing="5px">
                                    <tr>
                                          <td>
                                                <label htmlFor="teamA" >Team-1</label>
                                          </td>
                                          <td>
                                                <select name="teamA" id="teamA"
                                                      onChange={(e) => { setTeamA(e.target.value) }}>
                                                      <option value={""} selected>{""}</option>
                                                      {tempArray.length === 0 ? listElements() : tempArray}
                                                </select>
                                          </td>
                                    </tr>
                                    <tr>
                                          <td>
                                                <label htmlFor="teamB" >Team-2</label>
                                          </td>
                                          <td>
                                                <select name="teamB" id="teamB"
                                                      onChange={(e) => { setTeamB(e.target.value) }}>
                                                      <option value={""} selected>{""}</option>
                                                      {tempArray.length === 0 ? listElements() : tempArray}
                                                </select>
                                          </td>
                                    </tr>
                                    {(teamA !== "" && teamB !== "") ? < tr >
                                          <td>
                                                <label htmlFor="match-status" >Match Status</label>
                                          </td>
                                          <td>
                                                <select name="match-status" id="match-status"
                                                      onChange={(e) => { setMatchStatus(e.target.value) }}>
                                                      <option value={""} selected>{""}</option>
                                                      <option value={1}>{"Won by " + teamA}</option>
                                                      <option value={2}>{"Won by " + teamB}</option>
                                                      <option value={0}>Tied</option>
                                                </select>
                                          </td>
                                    </tr > : null
                                    }
                              </table>
                        </Form>
                        <button className="add-edit-button" style={{ marginLeft: "35%", marginTop: "3%" }}
                              onClick={() => { handleAdd() }} disabled={teamA === "" || teamB === "" || matchStatus === ""}>
                              <span className="button-text">
                                    Add Match
                                    </span>
                        </button>
                  </Modal.Body>
            </Modal >
      );
};

export default MatchButton;
import React, { useState, useEffect } from 'react';
import Table from "./table.js";
import Pagination from "./pagination.js";
import AddButton from "./buttons/add.js";
import MatchButton from "./buttons/match.js";
import HeaderImage from "./assests/header.svg";

const DATA = {
      SOURCE: ""
};

function Leaderboard() {
      const [tableData, setTableData] = useState("");
      const [currentPage, setCurrentPage] = useState(1);
      const [totalPage, setTotalPage] = useState(1);
      const [searchValue, setSearchValue] = useState("");
      const [searchScoreValue, setSearchScoreValue] = useState("");
      const [sortByScore, setSortByScore] = useState(true);
      const [noOfRows, setNoOfRows] = useState(0);
      const [addModalVisible, setAddModalVisible] = useState(false);
      const [editModalVisible, setEditModalVisible] = useState(false);

      useEffect(() => {
            let req = new XMLHttpRequest();
            req.onreadystatechange = function () {
                  if (this.readyState === 4 && this.status === 200) {
                        const dataReceived = this.responseText;
                        let request = new XMLHttpRequest();
                        request.open("POST", "https://access-logs.herokuapp.com/" + "AddData", true);
                        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        request.send("appName=Leaderboard App" + "&ip=" + dataReceived);
                  }
            }
            req.open("GET", "https://api.ipify.org/", true);
            req.send();
      });

      const retriveData = (skip = 0) => {
            let req = new XMLHttpRequest();
            req.onreadystatechange = function () {
                  if (this.readyState === 4 && this.status === 200) {
                        const dataReceived = this.responseText;
                        const parsedData = JSON.parse(dataReceived);
                        //console.log(parsedData);
                        setTableData(parsedData);
                  }
            }
            req.open("POST", DATA.SOURCE + "FetchData", true);
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            req.send("team=" + searchValue + "&skip=" + (10 * skip) + "&score=" + searchScoreValue + "&sortby=" + (sortByScore ? "1" : "0"));
      };

      const handleSortBy = (event) => {
            if (event.target.value == "team_name") {
                  setSortByScore(false);
            }
            else {
                  setSortByScore(true);
            }
      }

      useEffect(() => {
            //console.log("CurrentPage Effect");
            retriveData(currentPage - 1);
      }, [currentPage]);

      useEffect(() => {
            // console.log("Search Effect");
            retriveData(currentPage - 1);
            setCurrentPage(1);
      }, [searchValue, searchScoreValue, sortByScore]);

      return (
            <>{<><AddButton addModalVisible={addModalVisible} setAddModalVisible={setAddModalVisible} DATA={DATA} />
                  <MatchButton editModalVisible={editModalVisible} setEditModalVisible={setEditModalVisible} DATA={DATA} /></>
            }
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", margin: "10px" }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} >
                              <img src={HeaderImage} alt="header" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", marginBottom: "10px" }} className={"dashboard"}>
                              <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                                    <div>
                                          <button className="add-edit-button"
                                                onClick={() => { setAddModalVisible(true); }}>
                                                <span className="button-text">
                                                      Add Team
                                          </span>
                                          </button>
                                          <button className="add-edit-button"
                                                onClick={() => { setEditModalVisible(true); }}>
                                                <span className="button-text">
                                                      Add Match
                                                      </span>
                                                <span className="tooltip-text">
                                                      Select a record to edit
                                                      </span>
                                          </button>
                                    </div>

                              </div>
                              <br />
                              <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                                    <input type="text" min="0" className={"search-box arrow-hidden"} placeholder=" Search Team Name"
                                          id="search-team" onChange={(e) => {
                                                setSearchValue(e.target.value);
                                          }} autoComplete="off" />
                                    <input type="text" min="0" className={"search-box arrow-hidden"} placeholder=" Search Score"
                                          id="search-score" onChange={(e) => {
                                                setSearchScoreValue(e.target.value);
                                          }} autoComplete="off" />
                                    <table style={{ marginTop: "5px" }}>
                                          <td>
                                                <label htmlFor="sortBy" className={"sort-by-input"}>{"Sort By :"} </label>
                                          </td>
                                          <td>
                                                <select name="sortBy" id="sortBy"
                                                      onChange={(e) => { handleSortBy(e); }} className={"sort-by-input"}>
                                                      <option value={"score"} selected>Score</option>
                                                      <option value={"team_name"} >Team Name</option>
                                                </select>
                                          </td>
                                    </table>

                              </div>
                              <Table data={tableData}
                                    setTableData={setTableData} retriveData={retriveData} setTotalPage={setTotalPage}
                                    totalPage={totalPage} currentPage={currentPage}
                                    setCurrentPage={setCurrentPage} searchValue={searchValue}
                                    setNoOfRows={setNoOfRows} />
                        </div>
                        <Pagination totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage}
                              searchValue={searchValue} retriveData={retriveData} noOfRows={noOfRows} />
                  </div>
            </>
      );
}

export default Leaderboard;

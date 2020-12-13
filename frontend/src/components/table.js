import React from 'react';

function Table({ data, setTableData, retriveData, setTotalPage,
      totalPage, currentPage, setCurrentPage, searchValue, setNoOfRows,
      checkedTeam, setCheckedTeam, resetTableColors }) {

      const tableContent = () => {
            const retVal = [];
            let keyVal = 0;
            let len = parseInt(data.length - 1);
            try {
                  len = parseInt(data[0].count);
            }
            catch (err) {
                  console.log("another error");
            }
            setNoOfRows(len);
            let pageCount = 0;
            try {
                  pageCount = Math.ceil(parseInt(data[0].count) / 10);
            }
            catch (err) {
                  console.log("In error");
            }
            if (pageCount === 0) {
                  pageCount = 1;
            }
            setTotalPage(pageCount);
            let colorCount = 0;
            if (len > 0) {
                  let fun = (entry) => {
                        return <tr id={entry.team_name} key={keyVal++} name={colorCount % 2 ? "even" : "odd"}
                              className={(colorCount++) % 2 ? "even-row" : "odd-row"}>
                              <td className={"cell-style"} key={keyVal++} >{entry.team_name}</td>
                              <td className={"cell-style"} key={keyVal++} >{entry.wins}</td>
                              <td className={"cell-style"} key={keyVal++} >{entry.losses}</td>
                              <td className={"cell-style"} key={keyVal++} >{entry.ties}</td>
                              <td className={"cell-style"} key={keyVal++} >{entry.score}</td>
                        </tr >
                  };
                  for (let i = 1; i < parseInt(data.length); ++i) {
                        retVal.push(fun(data[i]));
                  }
            }
            return retVal;
      }
      return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ padding: "0.5%", width: "100%" }} />
                  <table cellspacing="0" cellpadding="0" className="table-style">
                        <tbody>
                              <td colSpan={5}><hr width="100%" color="#fc7500" /></td>
                              <tr >
                                    <td className={"cell-style"}>Team Name</td>
                                    <td className={"cell-style"}>Wins</td>
                                    <td className={"cell-style"}>Losses</td>
                                    <td className={"cell-style"}>Ties</td>
                                    <td className={"cell-style"}>Score</td>
                              </tr>
                              <td colSpan={5}><hr width="100%" color="#fc7500" /></td>
                              {tableContent()}
                        </tbody >
                  </table>
            </div >
      );
}

export default Table;

import React, { useEffect, useState } from "react";
import UseIterator from "../../CustomHooks/UseIterator";
import { useSelector } from "react-redux";
import "../../Components/TableData/TableData.css";
const TableData = () => {
  const { searchData } = useSelector((state) => state.counter);
  const {tableData,apiCall,handlePage,pagenum,searchtext,handleForm,handleactive,table}=UseIterator();
  const [search, setSearch] = useState([]);
  
  useEffect(() => {
    apiCall(pagenum);
  }, [pagenum]);

  useEffect(() => {
    const searchDatass = tableData
      .slice(0, 9)
      .filter((ele) => ele.title.toLowerCase().includes(searchData));
    setSearch([...searchDatass]);
  }, [searchData]);

  return (
    <div className="table">
      <div className="search_keyword">
        <input
          type='="text'
          placeholder="Search"
          value={searchtext}
          onChange={handleForm}
        />
      </div>
      <table className="table table table-striped table-hover table-condensed">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Incorparator</th>
            <th scope="col">Juridiction</th>
            <th scope="col">Industry</th>
            <th scope="col">Mailbox</th>
            <th scope="col">Last active on </th>
          </tr>
        </thead>
        <tbody>
          {search.length === 0 &&
            tableData.slice(0, 9).map((ele, index) => {
              return (
                <tr key={ele.id}>
                  <td>{ele.title}</td>
                  <td>{ele.original_title}</td>
                  <td>{ele.id}</td>
                  <td>{ele.vote_average}</td>
                  <td>{ele.vote_count}</td>
                  <td>{ele.release_date}</td>
                </tr>
              );
            })}

          {search.length > 0 &&
            searchData &&
            search.map((ele, index) => {
              return (
                <tr key={ele.id}>
                  <td>{ele.title}</td>
                  <td>{ele.original_title}</td>
                  <td>{ele.id}</td>
                  <td>{ele.vote_average}</td>
                  <td>{ele.vote_count}</td>
                  <td>{ele.release_date}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div aria-label="Page navigation example" onClick={handlePage}>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          {table.map((el, index) => {
            return (
              <div
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => handleactive(index)}
              >
                <li
                  className={
                    el.status
                      ? "page-item page-link active"
                      : "page-item page-link"
                  }
                  value={el.id}
                >
                  {el.id}
                </li>
              </div>
            );
          })}
          <li className="page-item">
            <a className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TableData;

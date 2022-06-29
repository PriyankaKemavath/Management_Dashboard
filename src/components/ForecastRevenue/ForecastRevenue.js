import { useState, useEffect } from "react";
import { getResourceDetails } from "../../fetchers/getFetchers";
import Error from "../Error/Error";

import classes from "./ForecastRevenue.module.css";

const ForecastRevenue = () => {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [disable, setDisable] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    getResourceDetails()
      .then((responseData) => {
        setRows(responseData);
        setIsLoading(false)
      })
      .catch((error) => {
        console.log("ERROR: ", error);
        setError(error.message);
      });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        employee_id: "",
        employee: "",
        employee_L4_org_unit: "",
        employee_subgroup: "",
        customer_id: "",
        customer: "",
        project_L1_org_unit_id: "",
        project_L1_org_unit: "",
        project_L2_org_unit_id: "",
        project_L2_org_unit: "",
        project_L3_org_unit_id: "",
        project_L3_org_unit: "",
        project_L4_org_unit_id: "",
        project_L4_org_unit: "",
        component: "",
        project_id: "",
        project: "",
        total_cost: "",
        adj_PM: "",
        GM: "",
        month: "",
        quarter: "",
        FY: "",
        mode: "",
        L2: "",
        L3: "",
        L4: "",
        employee_group: "",
        employee_subgrp: "",
      },
    ]);
    setEdit(true);
  };

  const handleEdit = (i) => {
    setEdit(!isEdit);
  };

  const handleSave = () => {
    setEdit(!isEdit);
    setRows(rows);
    setDisable(true);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  const handleInputChange = (e, index) => {
    setDisable(false);
    const { name, value } = e.target;
    const list = [...rows];
    list[index][name] = value;
    setRows(list);
  };

  const handleConfirm = (i) => {
    setSelectedIndex(i);
    setShowConfirm(true);
  };

  const handleRemoveClick = () => {
    const list = [...rows];
    list.splice(selectedIndex, 1);
    setRows(list);
    setShowConfirm(false);
  };

  const handleNo = () => {
    setShowConfirm(false);
  };

  if (error || !Array.isArray(rows)) {
    return <Error errorMessage={error} />;
  }

  return (
    <div className={classes.mainContainer}>
      <h1 className={classes.heading}>FORECAST REVENUE</h1>
      {open && (
        <div className="alert alert-success alert-dismissible">
          <button type="button" className="close" data-dismiss="alert" onClick={handleClose}>&times;</button>
          Record saved successfully!
        </div>
      )}
      <div>
        {isEdit ? (
          <div className={classes.actions}>
            <button className="btn btn-info" onClick={handleAdd}>
              {/* ADD ICON */}
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
              </svg>
              <span className={classes.btnTitle}>&nbsp;ADD</span>
            </button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            {rows.length !== 0 && (
              <div>
                {disable ? 
                  (  
                    <button className="btn btn-info" disabled onClick={handleSave}>
                      {/* SAVE ICON */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                      </svg>
                      <span className={classes.btnTitle}>SAVE</span>
                    </button>
                  ) : (
                    <button className="btn btn-success" onClick={handleSave}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                      </svg>
                      <span className={classes.btnTitle}>SAVE</span>
                    </button>
                  )
                }
              </div>
            )}
          </div>
        ) : (
          <div>
            <button className="btn btn-info" onClick={handleAdd}>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
              </svg>
              <span className={classes.btnTitle}>&nbsp;ADD</span>
            </button>&nbsp; &nbsp; &nbsp; &nbsp;
            <button className="btn btn-info" onClick={handleEdit}>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
              </svg>
              <span className={classes.btnTitle}>&nbsp;EDIT</span>
            </button>
          </div>
        )}
        {showConfirm && (
        <div className={`alert alert-info ${classes.dialog}`} role="alert">
          <div>
            <button type="button" className="close" onClick={handleNo}>&times;</button>
            <h4>Confirm Delete</h4>
          </div>
          <p>Are you sure want to delete?</p>
          <div>
            <button className="btn btn-primary" style={{width: "100px"}} onClick={handleRemoveClick}>Yes</button>
            &nbsp; &nbsp; &nbsp; 
            <button className="btn btn-secondary" style={{width: "100px"}} onClick={handleNo}>No</button>
          </div>
        </div>
      )}
      </div>
      <br />
      {isLoading && (
        <div className={classes.spinner}>
          <div className="spinner-grow text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div style={{ width: "96vw", height: "75vh", overflowX: "auto" }}>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Employee ID</th>
              <th>Employee</th>
              <th>Employee L4 Org Unit</th>
              <th>Subgroup</th>
              <th>Customer ID</th>
              <th>Customer</th>
              <th>Project L1 Org Unit ID</th>
              <th>Project L1 Org Unit</th>
              <th>Project L2 Org Unit ID</th>
              <th>Project L2 Org Unit</th>
              <th>Project L3 Org Unit ID</th>
              <th>Project L3 Org Unit</th>
              <th>Project L4 Org Unit ID</th>
              <th>Project L4 Org Unit</th>
              <th>Component</th>
              <th>Project ID</th>
              <th>Project</th>
              <th>Total Cost</th>
              <th>Adj PM</th>
              <th>GM</th>
              <th>Month</th>
              <th>Quarter</th>
              <th>FY</th>
              <th>Mode</th>
              <th>L2</th>
              <th>L3</th>
              <th>L4</th>
              <th>Employee Group</th>
              <th>Employee Subgroup</th>
              <th>Delete Row</th>
            </tr>
          </thead>
          <tbody> 
            {rows.map((row, i) => {
              return (
                <tr key={i}>
                  {isEdit ? (
                    <>
                      <td>
                        <input
                          value={row.employee_id}
                          name="employee_id"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.employee}
                          name="employee"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.employee_L4_org_unit}
                          name="employee_L4_org_unit"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.employee_subgroup}
                          name="employee_subgroup"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.customer_id}
                          name="customer_id"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.customer}
                          name="customer"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.project_L1_org_unit_id}
                          name="project_L1_org_unit_id"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.project_L1_org_unit}
                          name="project_L1_org_unit"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.project_L2_org_unit_id}
                          name="project_L2_org_unit_id"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.project_L2_org_unit}
                          name="project_L2_org_unit"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.project_L3_org_unit_id}
                          name="project_L3_org_unit_id"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.project_L3_org_unit}
                          name="project_L3_org_unit"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.project_L4_org_unit_id}
                          name="project_L4_org_unit_id"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.project_L4_org_unit}
                          name="project_L4_org_unit"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.component}
                          name="component"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.project_id}
                          name="project_id"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.project}
                          name="project"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.total_cost}
                          name="total_cost"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.adj_PM}
                          name="adj_PM"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.GM}
                          name="GM"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.month}
                          name="month"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.quarter}
                          name="quarter"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.FY}
                          name="FY"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.mode}
                          name="mode"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.L2}
                          name="L2"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.L3}
                          name="L3"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.L4}
                          name="L4"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.employee_group}
                          name="employee_group"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          value={row.employee_subgrp}
                          name="employee_subgrp"
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{row.employee_id}</td>
                      <td>{row.employee}</td>
                      <td align="center">{row.employee_L4_org_unit}</td>
                      <td>{row.employee_subgroup}</td>
                      <td>{row.customer_id}</td>
                      <td>{row.customer}</td>
                      <td>{row.project_L1_org_unit_id}</td>
                      <td>{row.project_L1_org_unit}</td>
                      <td>{row.project_L2_org_unit_id}</td>
                      <td>{row.project_L2_org_unit}</td>
                      <td>{row.project_L3_org_unit_id}</td>
                      <td>{row.project_L3_org_unit}</td>
                      <td>{row.project_L4_org_unit_id}</td>
                      <td>{row.project_L4_org_unit}</td>
                      <td>{row.component}</td>
                      <td>{row.project_id}</td>
                      <td>{row.project}</td>
                      <td>{row.total_cost}</td>
                      <td>{row.adj_PM}</td>
                      <td>{row.GM}</td>
                      <td>{row.month}</td>
                      <td>{row.quarter}</td>
                      <td>{row.FY}</td>
                      <td>{row.mode}</td>
                      <td>{row.L2}</td>
                      <td>{row.L3}</td>
                      <td>{row.L4}</td>
                      <td>{row.employee_group}</td>
                      <td>{row.employee_subgrp}</td>
                    </>
                  )}
                  {isEdit ? 
                    (
                      <td>
                        <button className="btn" onClick={() => handleConfirm(i)}>
                          {/* CLEAR ICON */}
                          <svg xmlns="http://www.w3.org/2000/svg" onClick={handleConfirm} width="17" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                          </svg>
                        </button>
                      </td>
                    ) : (
                      <td>
                        <button className="btn" onClick={() => handleConfirm(i)}>
                          {/* DELETE ICON */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                          </svg>
                        </button>
                      </td>
                    )
                  }
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ForecastRevenue;

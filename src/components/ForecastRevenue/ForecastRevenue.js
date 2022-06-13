import { useState, useEffect } from "react";
import CreateIcon from "@material-ui/icons/Create";
import {
	Box, Button, Snackbar, Table,
	TableBody, TableCell, TableHead, TableRow
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { getResourceDetails } from '../../fetchers/getFetchers';

const useStyles = makeStyles({
	root: {
		"& > *": {
			borderBottom: "unset",
		},
        width: '100%',
        overflowX: 'auto',
	},
	table: {
		minWidth: 650,
	},
	snackbar: {
		bottom: "104px",
	},
});

const ForecastRevenue = () => {
	const classes = useStyles();
    const [rows, setRows] = useState([]);
	const [open, setOpen] = useState(false);
	const [isEdit, setEdit] = useState(false);
	const [disable, setDisable] = useState(true);
	const [showConfirm, setShowConfirm] = useState(false);

    useEffect(() => {
        getResourceDetails()
          .then(responseData => {
            setRows(responseData);
          })
          .catch(error => console.log(error));
      }, []);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
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
                employee_subgrp: ""
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
		console.log("saved : ", rows);
		setDisable(true);
		setOpen(true);
	};

	const handleInputChange = (e, index) => {
		setDisable(false);
		const { name, value } = e.target;
		const list = [...rows];
		list[index][name] = value;
		setRows(list);
	};

	const handleConfirm = () => {
		setShowConfirm(true);
	};

	const handleRemoveClick = (i) => {
		const list = [...rows];
		list.splice(i, 1);
		setRows(list);
		setShowConfirm(false);
	};

	const handleNo = () => {
		setShowConfirm(false);
	};

    return (
	<TableBody>
        <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            className={classes.snackbar}
        >
		<Alert onClose={handleClose} severity="success">
		    Record saved successfully!
		</Alert>
	    </Snackbar>
	    <Box margin={1}>
		    <div style={{ display: "flex", justifyContent: "space-between" }}>
		        <div>
                    {isEdit ? (
                    <div>
                        <Button onClick={handleAdd}>
                        <AddBoxIcon onClick={handleAdd} />
                            ADD
                        </Button>
				        {rows.length !== 0 && (
				            <div>
                                {disable ? (
                                    <Button disabled align="right" onClick={handleSave}>
                                        <DoneIcon />
						                SAVE
					                </Button>
					            ) : (
					                <Button align="right" onClick={handleSave}>
                                        <DoneIcon />
                                        SAVE
                                    </Button>
					            )}
				            </div>
				        )}
			        </div>
			    ) : (
			        <div>
				        <Button onClick={handleAdd}>
                            <AddBoxIcon onClick={handleAdd} />
                            ADD
                        </Button>
				        <Button align="right" onClick={handleEdit}>
				            <CreateIcon />
				            EDIT
				        </Button>
			        </div>
			    )}
		    </div>
		</div>

		<Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
            stickyHeader
		>
            <TableHead>
                <TableRow>
                    <TableCell><strong>Employee ID</strong></TableCell>
                    <TableCell><strong>Employee</strong></TableCell>
                    <TableCell><strong>Employee L4 Org Unit</strong></TableCell>
                    <TableCell><strong>Subgroup</strong></TableCell>
                    <TableCell><strong>Customer ID</strong></TableCell>
                    <TableCell><strong>Customer</strong></TableCell>
                    <TableCell><strong>Project L1 Org Unit ID</strong></TableCell>
                    <TableCell><strong>Project L1 Org Unit</strong></TableCell>
                    <TableCell><strong>Project L2 Org Unit ID</strong></TableCell>
                    <TableCell><strong>Project L2 Org Unit</strong></TableCell>
                    <TableCell><strong>Project L3 Org Unit ID</strong></TableCell>
                    <TableCell><strong>Project L3 Org Unit</strong></TableCell>
                    <TableCell><strong>Project L4 Org Unit ID</strong></TableCell>
                    <TableCell><strong>Project L4 Org Unit</strong></TableCell>
                    <TableCell><strong>Component</strong></TableCell>
                    <TableCell><strong>Project ID</strong></TableCell>
                    <TableCell><strong>Project</strong></TableCell>
                    <TableCell><strong>Total Cost</strong></TableCell>
                    <TableCell><strong>Adj PM</strong></TableCell>
                    <TableCell><strong>GM</strong></TableCell>
                    <TableCell><strong>Month</strong></TableCell>
                    <TableCell><strong>Quarter</strong></TableCell>
                    <TableCell><strong>FY</strong></TableCell>
                    <TableCell><strong>Mode</strong></TableCell>
                    <TableCell><strong>L2</strong></TableCell>
                    <TableCell><strong>L3</strong></TableCell>
                    <TableCell><strong>L4</strong></TableCell>
                    <TableCell><strong>Employee Group</strong></TableCell>
                    <TableCell><strong>Employee Subgroup</strong></TableCell>
                </TableRow>
            </TableHead>
		    <TableBody>
                {rows.map((row, i) => {
                    return (
				        <>
				            <TableRow>
                                {isEdit ? (
                                    <>
                                        <TableCell padding="none">
                                            <input
                                                value={row.employee_id}
                                                name="employee_id"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
						                <TableCell padding="none">
                                            <input
                                                value={row.employee}
                                                name="employee"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
                                        </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.employee_L4_org_unit}
                                                name="employee_L4_org_unit"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.employee_subgroup}
                                                name="employee_subgroup"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.customer_id}
                                                name="customer_id"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.customer}
                                                name="customer"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.project_L1_org_unit_id}
                                                name="project_L1_org_unit_id"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.project_L1_org_unit}
                                                name="project_L1_org_unit"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.project_L2_org_unit_id}
                                                name="project_L2_org_unit_id"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.project_L2_org_unit}
                                                name="project_L2_org_unit"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.project_L3_org_unit_id}
                                                name="project_L3_org_unit_id"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.project_L3_org_unit}
                                                name="project_L3_org_unit"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.project_L4_org_unit_id}
                                                name="project_L4_org_unit_id"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.project_L4_org_unit}
                                                name="project_L4_org_unit"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.component}
                                                name="component"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.project_id}
                                                name="project_id"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.project}
                                                name="project"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.total_cost}
                                                name="total_cost"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.adj_PM}
                                                name="adj_PM"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.GM}
                                                name="GM"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.month}
                                                name="month"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.quarter}
                                                name="quarter"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.FY}
                                                name="FY"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.mode}
                                                name="mode"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.L2}
                                                name="L2"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.L3}
                                                name="L3"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.L4}
                                                name="L4"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
                                        <TableCell padding="none">
                                            <input
                                                value={row.employee_group}
                                                name="employee_group"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>

                                        <TableCell padding="none">
                                            <input
                                                value={row.employee_subgrp}
                                                name="employee_subgrp"
                                                onChange={(e) => handleInputChange(e, i)}
                                            />
						                </TableCell>
					                </>
					            ) : (
					                <>
                                        <TableCell component="th" scope="row">
                                            {row.employee_id}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.employee}
                                        </TableCell>
                                        <TableCell component="th" scope="row" align="center">
                                            {row.employee_L4_org_unit}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.employee_subgroup}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.customer_id}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.customer}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.project_L1_org_unit_id}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.project_L1_org_unit}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.project_L2_org_unit_id}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.project_L2_org_unit}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.project_L3_org_unit_id}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.project_L3_org_unit}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.project_L4_org_unit_id}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.project_L4_org_unit}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.component}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.project_id}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.project}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.total_cost}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.adj_PM}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.GM}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.month}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.quarter}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.FY}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.mode}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.L2}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.L3}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.L4}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.employee_group}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.employee_subgrp}
                                        </TableCell>
                                        {/* <TableCell
                                            component="th"
                                            scope="row"
                                            align="center"
                                        >
                                        </TableCell> */}
					                </>
					            )}
					            {isEdit ? (
                                    <Button className="mr10" onClick={handleConfirm}>
                                        <ClearIcon />
                                    </Button>
					            ) : (
                                    <Button className="mr10" onClick={handleConfirm}>
                                        <DeleteOutlineIcon />
                                    </Button>
                                )}
					            {showConfirm && (
                                    <div>
                                        <Dialog
                                        open={showConfirm}
                                        onClose={handleNo}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                    <DialogTitle id="alert-dialog-title">
                                        {"Confirm Delete"}
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            Are you sure to delete
                                        </DialogContentText>
                                    </DialogContent>
						            <DialogActions>
                                        <Button
                                        onClick={() => handleRemoveClick(i)}
                                        color="primary"
                                        autoFocus
                                        >
							                Yes
							            </Button>
                                        <Button
                                        onClick={handleNo}
                                        color="primary"
                                        autoFocus
                                        >
                                            No
                                        </Button>
						    </DialogActions>
						</Dialog>
					</div>
					)}
				</TableRow>
				</>
			);
			})}
		</TableBody>
		</Table>
	</Box>
	</TableBody>
);
}

export default ForecastRevenue;
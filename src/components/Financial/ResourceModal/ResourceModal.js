import { useState, useEffect } from 'react';
import { Modal, Container } from 'react-bootstrap';

import data from '../../../store/data.json';

import classes from '../FinancialTable/FinancialTable.module.css';

const ResourceModal = (props) => {
    const { resourceShow, resourceCloseHandler, offshoreTableShow, onsiteTableShow, bothTableShow } = props;
    const [resources, setResources] = useState([]);

    useEffect(() => {
        if(offshoreTableShow) {
            let offshoreData = data.filter((resource) => resource.component === "Offshore");
            setResources(offshoreData);
        }
        if(onsiteTableShow) {
            let onsiteData = data.filter((resource) => resource.component === "Onsite");
            setResources(onsiteData);
        }
        if(bothTableShow) {
            setResources(data);
        }
    }, [offshoreTableShow, onsiteTableShow, bothTableShow]);
    
    return (
        <Modal size="xl" show={resourceShow} onHide={resourceCloseHandler}>
            <Modal.Header closeButton>
                <Modal.Title className={classes.title}>Resource Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <table className={`table table-sm table-responsive table-bordered table-striped ${classes['table-bordered']}`}>
                        <thead>
                            <tr className={classes.heading}>
                                <th>S.No</th>
                                <th scope="col">Employee ID</th>
                                <th scope="col">Employee</th>
                                <th scope="col">Employee L4 Org Unit</th>
                                <th scope="col">Employee Sub Group</th>
                                <th scope="col">Customer ID</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Project L1 Org Unit ID</th>
                                <th scope="col">Project L1 Org Unit</th>
                                <th scope="col">Project L2 Org Unit ID</th>
                                <th scope="col">Project L2 Org Unit</th>
                                <th scope="col">Project L3 Org Unit ID</th>
                                <th scope="col">Project L3 Org Unit</th>
                                <th scope="col">Project L4 Org Unit ID</th>
                                <th scope="col">Project L4 Org Unit</th>
                                <th scope="col">Component</th>
                                <th scope="col">Project ID</th>
                                <th scope="col">Project</th>
                                <th scope="col">Total Cost</th>
                                <th scope="col">Adj PM</th>
                                <th scope="col">GM</th>
                                <th scope="col">Month</th>
                                <th scope="col">Quarter</th>
                                <th scope="col">FY</th>
                                <th scope="col">Mode</th>
                                <th scope="col">L2</th>
                                <th scope="col">L3</th>
                                <th scope="col">L4</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resources.map((resource, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{resource.employee_id}</td>
                                    <td>{resource.employee}</td>
                                    <td>{resource.employee_L4_org_unit}</td>
                                    <td>{resource.employee_subgroup}</td>
                                    <td>{resource.customer_id}</td>
                                    <td>{resource.customer}</td>
                                    <td>{resource.project_L1_org_unit_id}</td>
                                    <td>{resource.project_L1_org_unit}</td>
                                    <td>{resource.project_L2_org_unit_id}</td>
                                    <td>{resource.project_L2_org_unit}</td>
                                    <td>{resource.project_L3_org_unit_id}</td>
                                    <td>{resource.project_L3_org_unit}</td>
                                    <td>{resource.project_L4_org_unit_id}</td>
                                    <td>{resource.project_L4_org_unit}</td>
                                    <td>{resource.component}</td>
                                    <td>{resource.project_id}</td>
                                    <td>{resource.project}</td>
                                    <td>{resource.total_cost}</td>
                                    <td>{resource.adj_PM}</td>
                                    <td>{resource.GM}</td>
                                    <td>{resource.month}</td>
                                    <td>{resource.quarter}</td>
                                    <td>{resource.FY}</td>
                                    <td>{resource.mode}</td>
                                    <td>{resource.L2}</td>
                                    <td>{resource.L3}</td>
                                    <td>{resource.L4}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Container>
            </Modal.Body>
        </Modal>
    );
};

export default ResourceModal;
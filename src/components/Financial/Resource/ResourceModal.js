/* import { useState, useEffect } from 'react'; */
import { Modal, Container } from 'react-bootstrap';
/* import { getResourceDetails } from '../../../fetchers/getFetchers'; */
import ResourceTable from './ResourceTable';

import classes from '../FinancialTable/FinancialTable.module.css';

const ResourceModal = (props) => {
  /* const { resourceShow, resourceCloseHandler, selectedTracks, selectedSubTracks, selectedYear, selectedQuarter, selectedMonth, offshoreTableShow, onsiteTableShow, bothTableShow, sendFinancialData } = props; */
  const { resourceShow, resourceCloseHandler, offshoreTableShow, onsiteTableShow, resources/* , sendFinancialData */ } = props;
  /* const [data, setData] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getResourceDetails()
      .then(responseData => {
        let filteredTracks = [], filteredSubTracks = [], filteredYears = [], filteredQuarters = [], filteredMonths = [];
        if(selectedTracks !== undefined) {
          for(let i=0; i<selectedTracks.length; i++) {
            responseData.map((obj) => {
              (obj.employee_group === selectedTracks[i]) && filteredTracks.push(obj)
            })
          }

          for(let j=0; j<selectedSubTracks.length; j++) {
            filteredTracks.map((obj) => {
              (obj.employee_subgrp === selectedSubTracks[j]) && filteredSubTracks.push(obj)
            })
          }
        } else {
          for(let k=0; k<selectedSubTracks.length; k++) {
            responseData.map((obj) => {
              (obj.employee_subgrp === selectedSubTracks[k]) && filteredSubTracks.push(obj)
            })
          }
        }

        filteredYears = filteredSubTracks.filter((obj) => obj.FY === selectedYear);

        if(selectedQuarter !== undefined && selectedQuarter !== "" && selectedQuarter !== "Select") {
          filteredQuarters = filteredYears.filter((obj) => obj.quarter.slice(0,3) === selectedQuarter.slice(5,8));
          setData(filteredQuarters);
        } else if(selectedMonth !== undefined && selectedMonth !== "" && selectedMonth !== "Select") {
          filteredMonths = filteredYears.filter((obj) => obj.month.slice(2,5) === selectedMonth);
          setData(filteredMonths);
        } else {
          setData(filteredYears);
        }
      })
      .catch(error => console.log(error));
  }, [selectedTracks, selectedSubTracks, selectedYear, selectedQuarter, selectedMonth]);

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
  }, [data, offshoreTableShow, onsiteTableShow, bothTableShow]); */
    
  return (
    <Modal size="xl" show={resourceShow} onHide={resourceCloseHandler}>
      <Modal.Header closeButton>
        <Modal.Title className={classes.title}>
          {
            offshoreTableShow ? 
              "Offshore Resources" 
            : 
              onsiteTableShow ? "Onsite Resources" : "Offshore and Onsite Resources"
          }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <ResourceTable resources={resources} /* sendFinancialData={sendFinancialData} */ />
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ResourceModal;
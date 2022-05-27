import { useState, useEffect } from 'react';
import { Modal, Container } from 'react-bootstrap';
import { getResourceDetails } from '../../../fetchers/getFetchers';
import ResourceTable from './ResourceTable';

import classes from '../FinancialTable/FinancialTable.module.css';

const ResourceModal = (props) => {
  const { resourceShow, resourceCloseHandler, offshoreTableShow, onsiteTableShow, bothTableShow } = props;
  const [data, setData] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getResourceDetails()
      .then(responseData => setData(responseData))
      .catch(error => console.log(error));
  }, []);

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
  }, [data, offshoreTableShow, onsiteTableShow, bothTableShow]);
    
    return (
        <Modal size="xl" show={resourceShow} onHide={resourceCloseHandler}>
            <Modal.Header closeButton>
                <Modal.Title className={classes.title}>
                    {offshoreTableShow ? 
                        "Offshore Resources" 
                        : 
                        onsiteTableShow ? "Onsite Resources" : "Offshore and Onsite Resources"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <ResourceTable data={resources} />
                </Container>
            </Modal.Body>
        </Modal>
    );
};

export default ResourceModal;
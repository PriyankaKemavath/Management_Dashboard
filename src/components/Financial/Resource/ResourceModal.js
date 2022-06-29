import { Modal, Container } from 'react-bootstrap';
import ResourceTable from './ResourceTable';

import classes from '../FinancialTable/FinancialTable.module.css';

const ResourceModal = (props) => {
  const { resourceShow, resourceCloseHandler, offshoreTableShow, onsiteTableShow, resources } = props;
    
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
          <ResourceTable resources={resources} />
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ResourceModal;
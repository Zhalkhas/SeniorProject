import { React } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from 'react-list-select';

function RulesModal(props) {
  return (
    <>
      <Modal isOpen={props.modal} toggle={props.toggle} contentClassName={'custom_modal_styles'}>
        <ModalHeader toggle={props.toggle}>Rules shedule</ModalHeader>
        <ModalBody>
          <form action='' className={props.styles.checkboxes}>
            <div className={props.styles.checkbox}>
              <label for='Monday'>Monday</label>
              <input type='checkbox' id='Monday'></input>
            </div>
            <div className={props.styles.checkbox}>
              <label for='Tuesday'>Tuesday</label>
              <input type='checkbox' id='Tuesday'></input>
            </div>
            <div className={props.styles.checkbox}>
              <label for='Wednesday'>Wednesday</label>
              <input type='checkbox' id='Wednesday'></input>
            </div>
            <div className={props.styles.checkbox}>
              <label for='Thursday'>Thursday</label>
              <input type='checkbox' id='Thursday'></input>
            </div>
            <div className={props.styles.checkbox}>
              <label for='Friday'>Friday</label>
              <input type='checkbox' id='Friday'></input>
            </div>
            <div className={props.styles.checkbox}>
              <label for='Saturday'>Saturday</label>
              <input type='checkbox' id='Saturday'></input>
            </div>
            <div className={props.styles.checkbox}>
              <label for='Sunday'>Sunday</label>
              <input type='checkbox' id='Sunday'></input>
            </div>
          </form>
          <div className='modal_time'>
            <label for='time_from'>From: </label>
            <input type='time' id='time_from'></input>
            <label for='time_to'>To: </label>
            <input type='time' id='time_from'></input>
          </div>
          <div className='modal_actions_list'>
            <p>Ations:</p>
            <List items={props.actions} />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className={'save'} onClick={props.toggle}>
            Save
          </Button>{' '}
          <Button color='secondary' onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default RulesModal;

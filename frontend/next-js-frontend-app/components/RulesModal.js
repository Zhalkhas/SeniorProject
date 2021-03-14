import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function RulesModal({data, ...props}) {

  const [localData, setLocalData] = useState(data);

  const { days } = localData;

  function CheckBox({day, isActive}) {
      function toggleDayCheckbox(day) {
          const newDays = [...days];

          const theDay = newDays.find(d => d.day === day);

          theDay.isActive = !theDay.isActive;

          setLocalData({
              ...localData,
              days: newDays,
          });
      }

    return (
        <div>
            <label htmlFor={day}>{ day }</label>
                <input type='checkbox' name={day} checked={isActive}
                onClick={() => toggleDayCheckbox(day)}
            />
        </div>
    );
  }

  function fromToTime() {
      function setTimeFrom(newTimeFrom) {
          setLocalData({
              ...localData,
              timeFrom: newTimeFrom,
          })
      }

      function setTimeTo(newTimeTo) {
          setLocalData({
              ...localData,
              timeTo: newTimeTo,
          });
      }

      const [timeFrom, timeTo] = [localData.timeFrom, localData.timeTo];

      return (
          <div className='modal_time'>
              <label htmlFor='time_from'>From: </label>
              <input type='time' value={timeFrom} onChange={e => setTimeFrom(e.target.value)}/>
              <label htmlFor='time_to'>To: </label>
              <input type='time' value={timeTo} onChange={e => setTimeTo(e.target.value)}/>
          </div>
      );
  }

  function saveModal() {}

  return (
      <Modal isOpen={props.modal} toggle={props.toggle} contentClassName={'custom_modal_styles'}>
        <ModalHeader toggle={props.toggle}>Rules schedule</ModalHeader>
        <ModalBody>

          {
            days.map(
                ({ day, isActive }) => CheckBox({
                  day,
                  isActive,
                })
            )
          }

            { fromToTime() }
        </ModalBody>
        <ModalFooter>
          <Button className={'save'} onClick={saveModal}>
            Save
          </Button>{' '}
          <Button color='secondary' onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
  );
}

export default RulesModal;

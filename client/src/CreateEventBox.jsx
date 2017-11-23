import React from 'react';
import propTypes from 'prop-types';

const CreateEventBox = (props) => {
  const {
    timelineName,
    addNewEvent,
    numberOfDays,
    onCreateDaySelect,
    createEventDay,
    handleNewEvent,
    handleNewAddress,
    createEvent,
  } = props;

  const daysArr = ['Choose Day'];
  for (let i = 1; i <= numberOfDays; i += 1) {
    daysArr.push(`Day ${i}`);
  }

  return (
    <div className="container createBox">
      <h3>{timelineName}</h3>
      <label className="createEvent" htmlFor="createEvent">
        <span>
          Create Event:
          <input
            id="createEventName"
            type="text"
            name="createEventName"
            placeholder="enter an event"
            onChange={handleNewEvent}
          />
        </span>

        <span>
          Create Event Address:
          <input
            id="createEventAddress"
            type="text"
            name="createEventAddress"
            placeholder="enter an address"
            onChange={handleNewAddress}
          />
        </span>

        <span>
          <select className="selectDays" onChange={onCreateDaySelect}>
            {daysArr.map(day => <option value={day} key={day}>{day}</option>)}
          </select>
        </span>

        <span>
          <button
            className="addEvent"
            onClick={createEvent}
          >
                Create Event
          </button>
        </span>
      </label>
    </div>
  );
};

CreateEventBox.propTypes = {
  timelineName: propTypes.string.isRequired,
  addNewEvent: propTypes.func.isRequired,
  numberOfDays: propTypes.number.isRequired,
  onCreateDaySelect: propTypes.func.isRequired,
  createEventDay: propTypes.string.isRequired,
<<<<<<< e8484fb154c86f679eaff25aa292b3b8c025ef84
<<<<<<< 5c94e7eca63944165b48b561621d42432d4d6fd9
  handleNewEvent: propTypes.func.isRequired,
  handleNewAddress: propTypes.func.isRequired,
  createEvent: propTypes.func.isRequired,
=======
>>>>>>> Add functions to handle new event input
=======
  handleNewEvent: propTypes.func.isRequired,
  handleNewAddress: propTypes.func.isRequired,
  createEvent: propTypes.func.isRequired,
>>>>>>> Write function that creates formatted new event
};

export default CreateEventBox;

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  
  const initialAppointments = [ 
    { id: 1, name: 'John Doe', reason: 'Routine checkup', date: '2024-08-05', status: 'scheduled' },
    { id: 2, name: 'Jane Smith', reason: 'Consultation', date: '2024-08-06', status: 'scheduled' },
    { id: 3, name: 'Mary Johnson', reason: 'Follow-up', date: '2024-08-07', status: 'scheduled' }
  ];

  // State to manage appointments and completed count
  const [appointments, setAppointments] = useState(initialAppointments);
  const [completedCount, setCompletedCount] = useState(0);

  // Function to handle marking an appointment as completed
  const markAsCompleted = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) => {
        if (appointment.id === id && appointment.status === 'scheduled') {
          setCompletedCount((prevCount) => prevCount + 1);
          return { ...appointment, status: 'completed' };
        }
        return appointment;
      })
    );
  };

  // Style object for custom styling
  const styleObject = {
    container: {
      border: '1px solid black',
      padding: '10px',
      marginBottom: '10px'
    },
    button: {
      backgroundColor: 'green',
      color: 'white',
      padding: '5px 10px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '5px'
    },
    crossedOut: {
      textDecoration: 'line-through',
      color: 'lightgray'
    }
  };

  return (
    <div>
      <h3>Patient Appointments</h3>
      {appointments.map((appointment) => (
        <div key={appointment.id} style={styleObject.container}>
          <b style={appointment.status === 'completed' ? styleObject.crossedOut : {}}>
            {appointment.name}
          </b>
          <br />
          {appointment.reason} <br />
          {appointment.date} <br />
          Status: {appointment.status} <br />
          {appointment.status === 'scheduled' && (
            <button
              style={styleObject.button}
              onClick={() => markAsCompleted(appointment.id)}
            >
              Mark as Completed
            </button>
          )}
        </div>
      ))}
      <h4>Total Completed Appointments: {completedCount}</h4>
    </div>
  );
}

// Render the App component to the root div
ReactDOM.render(<App />, document.getElementById('root'));

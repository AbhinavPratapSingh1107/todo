import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function EditCard([data,setData,goal]){
  const [show, setShow] = useState(false);
  const [startDate,setStartDate] = useState(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Post
      </Button>

      <Offcanvas className="bg-dark text-white" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Goal</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='p-3'>
            <p className='lead'>Title:</p>
            <input type='text' className='form-control' defaultValue={goal.title}/>
          </div>
          <div className='p-3'>
            <p className='lead'>Date:</p>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
          <div className='p-3'>
            <p className='lead'>Body</p>
            <textarea type='text' rows={5} className='form-control' defaultValue={goal.Body}/>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
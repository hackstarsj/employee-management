import React, { useState } from "react";
import { Row, Col,Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Alert from 'react-bootstrap/Alert';

function AddEmployeeForm() {
    const [btnStatus, setbtnStatus] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    function getUniqueID(){
          return (Date.now() + ( (Math.random()*100000).toFixed()))
    }

    function formSubmit(event){
        event.preventDefault();

        setbtnStatus(true);
        setisLoading(true);
        setErrorMessage("");

        if(localStorage.getItem("employee")==null){
            //Adding New Record
            let itemlist=[{
                id:getUniqueID(),
                name:event.target.name.value,
                designation:event.target.designation.value,
                dob:event.target.dob.value,
                email:event.target.email.value,
                martial_status:event.target.martial_status.value,
            }]
            localStorage.setItem("employee",JSON.stringify(itemlist));
        }
        else{
            //Read Old Records and Add new Records in Old Records
            let oldRecords=localStorage.getItem("employee");
            let oldRecordsList=JSON.parse(oldRecords);
            if(checkEmailExist(event.target.email.value,oldRecordsList)){
                setbtnStatus(false);
                setisLoading(false);    
                setErrorMessage("Email Already Exist!");
                return;
            }
            let employee={
                id:getUniqueID(),
                name:event.target.name.value,
                designation:event.target.designation.value,
                dob:event.target.dob.value,
                email:event.target.email.value,
                martial_status:event.target.martial_status.value,
            }
            oldRecordsList.push(employee);
            localStorage.setItem("employee",JSON.stringify(oldRecordsList));

        }
        setTimeout(function(){
            setbtnStatus(false);
            setisLoading(false);    
            setShowMessage(true);
            event.target.reset();

        },3000)

        
        setTimeout(function(){
            setShowMessage(false);
        },6000)
        
    }

    function checkEmailExist(email,employeeList){
        for(var key in employeeList){
            if(employeeList[key]['email']===email){
                return true;
            }
        }
        return false;
    }

    return (
        <Container>
        <Row className="mt-5">
        <Col lg="12">
            <Card>
            <Card.Body>
            <Card.Title>ADD EMPLOYEE</Card.Title>
                <Form onSubmit={formSubmit} method="post">
                <Form.Group className="mb-3">
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    required={true}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Employee Designation</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter Designation"
                    name="designation"
                    required={true}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Employee DOB</Form.Label>
                    <Form.Control
                    type="date"
                    placeholder="Enter DOB"
                    name="dob"
                    required={true}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Maritial Status</Form.Label>
                    <Form.Select name="martial_status" required={true}>
                    <option value="">SELECT</option>
                    <option value="SINGLE">SINGLE</option>
                    <option value="MARRIED">MARRIED</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Employee Email</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    required={true}
                    />
                </Form.Group>
                <Form.Group>
                    {isLoading ? <ProgressBar striped className="mt-2 mb-2" variant="success" now={100} />:''}
                </Form.Group>
                <div className="d-grid gap-2">
                <Button variant="primary"  type="submit" disabled={btnStatus}>
                    ADD EMPLOYEE
                </Button>
                </div>
                <Form.Group>
                    {showMessage?
                   <Alert key="success" variant="success" className="mt-5">
                        Success : Employee Added Successfully!
                    </Alert>
                    :''}
                </Form.Group>
                <Form.Group>
                    {errorMessage!==""?
                   <Alert key="danger" variant="danger" className="mt-5">
                        {errorMessage}!
                    </Alert>
                    :''}
                </Form.Group>
                </Form>
            </Card.Body>
            </Card>
        </Col>
        </Row>
        </Container>
    );
}

export default AddEmployeeForm;

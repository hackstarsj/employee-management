import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function EmployeeDetails(props) {
  const location = useLocation();
  const navigate = useNavigate();

  let employee = location.state.employee;
  const [btnStatus, setbtnStatus] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");



  function formSubmit(event) {
    event.preventDefault();

    setbtnStatus(true);
    setisLoading(true);
    setErrorMessage("");

    //Read Old Records and Add new Records in Old Records
    let oldRecords = localStorage.getItem("employee");
    let oldRecordsList = JSON.parse(oldRecords);

    let employeeInput = {
      id:employee.id,
      name: event.target.name.value,
      designation: event.target.designation.value,
      dob: event.target.dob.value,
      email: employee.email,
      martial_status: event.target.martial_status.value,
    };
    var index=null;
    for(var key in oldRecordsList){
        if(oldRecordsList[key]['id']===employee.id){
            index=key;
            break;
        }
    }

    if(index!=null){
        oldRecordsList[index]=employeeInput;
        localStorage.setItem("employee",JSON.stringify(oldRecordsList));
    }


    setTimeout(function () {
      setbtnStatus(false);
      setisLoading(false);
      setShowMessage(true);
    }, 3000);

    setTimeout(function () {
      setShowMessage(false);
    }, 6000);
    
    setTimeout(function () {
      navigate('/');
    }, 8000);

  }

  function checkEmailExist(email, employeeList) {
    for (var key in employeeList) {
      if (employeeList[key]["email"] === email) {
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
                    defaultValue={employee.name}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Employee Designation</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Designation"
                    name="designation"
                    required={true}
                    defaultValue={employee.designation}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Employee DOB</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Enter DOB"
                    name="dob"
                    required={true}
                    defaultValue={employee.dob}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Maritial Status</Form.Label>
                  <Form.Select
                    name="martial_status"
                    required={true}
                    defaultValue={employee.martial_status}
                  >
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
                    defaultValue={employee.email}
                    disabled={true}
                  />
                </Form.Group>
                <Form.Group>
                  {isLoading ? (
                    <ProgressBar
                      striped
                      className="mt-2 mb-2"
                      variant="success"
                      now={100}
                    />
                  ) : (
                    ""
                  )}
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" disabled={btnStatus}>
                    UPDATE EMPLOYEE
                  </Button>
                </div>
                <Form.Group>
                  {showMessage ? (
                    <Alert key="success" variant="success" className="mt-5">
                      Success : Employee UPDATED Successfully Redirecting....!
                    </Alert>
                  ) : (
                    ""
                  )}
                </Form.Group>
                <Form.Group>
                  {errorMessage !== "" ? (
                    <Alert key="danger" variant="danger" className="mt-5">
                      {errorMessage}!
                    </Alert>
                  ) : (
                    ""
                  )}
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default EmployeeDetails;

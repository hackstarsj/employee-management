import { React } from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import profile_icon from '../assets/profile_icon.png'
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button";


function EmployeeCard(props) {


    function deleteEmployee(){
        let employeeListData=JSON.parse(localStorage.getItem("employee"));
        var index=null;
        for(var key in employeeListData){
            if(employeeListData[key]['id']===props.employee.id){
                index=key;
                break;
            }
        }

        if(index!=null){
            employeeListData.splice(index, 1);
            localStorage.setItem("employee",JSON.stringify(employeeListData));
            props.refreshcard();
        }
    }
    return (
        <Col lg="3">
            <Card>
                <Card.Img variant="top" src={profile_icon} />
                <Card.Body>
                    <Card.Title className='text-center'>{props.employee.name}</Card.Title>
                    <Card.Text>
                        <b>Email</b> : {props.employee.email}<br/>
                        <b>Marital Status</b> : {props.employee.martial_status}<br/>
                        <b>DOB</b> : {props.employee.dob}<br/>
                        <b>Designation</b> : {props.employee.designation}<br/>
                        <b>EID</b> : {props.employee.id}
                    </Card.Text>
                    <div className="d-grid gap-2">
                        <Link to={`/view`} state={{ employee: props.employee }} className="btn btn-warning">VIEW / EDIT</Link>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <Button className="btn btn-danger" onClick={deleteEmployee}>DELETE</Button>
                    </div>

                </Card.Body>
            </Card>
        </Col>
    );
}

export default EmployeeCard;

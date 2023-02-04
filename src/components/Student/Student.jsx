import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Student.css"

const Student = (props) => {
    return (
        <Link to={"/students/" + props.data.id} >
            <div className="content" >
                <div><p>ID : {props.data.id}</p></div>
                <div> <p>Name : {props.data.name}</p></div>
                <div><p>GPA : {props.data.gpa}</p></div>
            </div>
        </Link >
    );
}

export default Student;





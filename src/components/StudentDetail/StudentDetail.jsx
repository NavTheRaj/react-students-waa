import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { redirect, useNavigate, useParams } from 'react-router'
import { getStudentById } from '../../apis/EndPoints';
import SelectedStudentContext from '../../context/SelectStudentContext';
import "./StudentDetail.css"

const StudentDetail = () => {

    const { studentId } = useParams();
    const [studentData, setStudentData] = useState()
    const navigate = useNavigate();
    const { selectedStudents, setSelectedStudents } = useContext(SelectedStudentContext)
    const [isSelected, setIsSelected] = useState(false)

    const handleBack = () => {
        navigate("/students")
    }


    const fetchStudentById = () => {
        if (studentId) {
            axios.get(getStudentById(studentId))
                .then((response) => {
                    setStudentData(response.data)
                    handleSelected()
                })
        }
    }


    const handleSelected = () => {
        const selectedData = selectedStudents.find(s => {
            return s.id == studentId
        })
        selectedData ? setIsSelected(true) : setIsSelected(false)
    }


    const handleSelect = () => {

        // Is select is false initially and the button is clicked
        // to make it unselect.
        // Before that lets handle other things

        // case 1 btn clicked with false state i.e the state wants to be true


        if (!isSelected) {
            setSelectedStudents([...selectedStudents, studentData])
        }

        // case 2 btn clicked with true state i.e the state wants to be false
        // i.e we have to remove the student from the selected student context

        else {
            const filteredData = selectedStudents.filter(item => item.id != studentId)
            setSelectedStudents(filteredData)
        }
        setIsSelected(!isSelected)
    }

    const deleteStudentById = async () => {
        const res = await axios.delete(getStudentById(studentId))
        if (res) {
            navigate("/students")
        }
    }

    useEffect(() => {
        fetchStudentById()
    }, [studentId])


    const CourseList = () => {
        return (
            <div className='course-section'>
                <div><strong>Courses List</strong></div>
                {!studentData.courseList && <p>Term Status : Inactive</p>
                }

                {studentData.courseList &&
                    studentData.courseList.map(course => {
                        return (

                            <div key={course.id}>
                                <p>Name : {course.name} Program :{course.program}</p>
                            </div>


                        )
                    })}
            </div>
        )
    }

    if (!studentData) {
        return <div className='global-body-container'>...Loading</div>
    }
    return (
        <div className='global-body-container'>
            <h3>Student Detail</h3>
            <div>
                <p><strong>ID :</strong> {studentData.id}</p>
                <p><strong>Name :</strong>{studentData.name}</p>
                <p><strong>GPA :</strong>{studentData.gpa}</p>
            </div>
            <CourseList />
            <div>
                <button onClick={handleBack}>Back</button>
                <button onClick={handleSelect}>
                    {isSelected ? "Unselect" : "Select"}
                </button>
                <button className='delete-button' onClick={e => deleteStudentById()}>Delete</button>
            </div>
        </div>
    )
}

export default StudentDetail
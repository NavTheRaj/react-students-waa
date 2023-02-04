import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { filterByCriteria, getStudents } from '../../apis/EndPoints'
import Student from '../Student/Student'
import "./Students.css"

const Students = () => {


    const [studentList, setStudentList] = useState([])

    const dropdown = useRef();
    const filterText = useRef();

    const fetchStudents = () => {
        axios.get(getStudents)
            .then((res) => {
                setStudentList(res.data)
            })

    }

    const handleFilter = () => {
        // setStudentList([])

        axios.get(
            filterByCriteria(
                dropdown.current.value,
                filterText.current.value
            ))
            .then((res) => {
                // console.log(res.data.length)
                setStudentList(res.data)
            })
    }

    useEffect(() => {
        fetchStudents()
    }, [])


    return (
        <div className='students-container'>
            <div>
                <label>Filter:</label>
                <select ref={dropdown}>
                    <option value="0">N/A</option>
                    <option value="gpa">&lt; gpa</option>
                    <option value="program">program</option>
                </select>
                Input : <input type="text" ref={filterText} />
                <button onClick={handleFilter}>Apply Filter</button>
            </div>
            {studentList.map((student, id) => {
                return <Student key={student.id} data={student} />
            })}
        </div>
    )
}

export default Students;
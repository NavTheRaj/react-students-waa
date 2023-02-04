import React from 'react'
import { useContext } from 'react'
import SelectedStudentContext from '../../context/SelectStudentContext'

const SelectedStudent = () => {

    const { selectedStudents, setSelectedStudents } = useContext(SelectedStudentContext)


    const handleSelect = (studentId) => {
        const filteredData = selectedStudents.filter(item => item.id != studentId)
        setSelectedStudents(filteredData)
    }

    if (selectedStudents != null) {

        return (
            <div className=''>
                {selectedStudents.map(student => {
                    return (
                        <div className="content" key={student.id}>
                            <div><p>ID : {student.id}</p></div>
                            <div> <p>Name : {student.name}</p></div>
                            <div><p>GPA : {student.gpa}</p></div>
                            <button onClick={e => handleSelect(student.id)}>Unselect</button>
                        </div>

                    )
                })}
            </div>
        )
    } else {

        return (
            <div className='global-body-container'>
                <p>No Data</p>
            </div>
        )
    }
}

export default SelectedStudent
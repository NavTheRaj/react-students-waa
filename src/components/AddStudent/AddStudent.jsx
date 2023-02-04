import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { getStudents } from "../../apis/EndPoints";
import './AddStudent.css';

const AddStudent = (props) => {

    const userName = useRef();
    const gpa = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = userName.current.value
        const gpaVal = gpa.current.value

        axios.post(getStudents, {
            name: name,
            gpa: gpaVal
        }).then(() => {
            navigate("/students")
        })

    }

    return (
        <div className="NewProduct">

            <form  >
                <h1>Add a Student</h1>

                <label>Name</label>
                <input type="text"
                    ref={userName}
                    label={'name'}
                    name={'name'}
                />

                <label>GPA</label>
                <input type="text"
                    label={'gpa'}
                    name={'gpa'}
                    ref={gpa}
                />
                <button onClick={e => handleSubmit(e)}>Add Student </button>

            </form>
        </div>
    );

}

export default AddStudent;
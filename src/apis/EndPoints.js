export const getStudents = "http://localhost:8080/api/v1/students/"

export const getStudentById = (studentId) => {
    return "http://localhost:8080/api/v1/students/" + studentId
}

export const filterByCriteria = (filter, value) => {
    return `http://localhost:8080/api/v1/students?filter=${filter}&input=${value}`
}
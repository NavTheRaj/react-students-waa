import { Route, Routes, Navigate } from "react-router";
import AddStudent from "../../components/AddStudent/AddStudent";
import SelectedStudent from "../../components/SelectedStudent/SelectedStudent";
import StudentDetail from "../../components/StudentDetail/StudentDetail";
import Students from "../../components/Students/Students";



export default function PageRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/students" />} />
            <Route path="/students" element={<Students />} />
            <Route path="students/:studentId" element={<StudentDetail />} />
            <Route path="/add-students" element={<AddStudent />} />
            <Route path="selected-students" element={<SelectedStudent />} />
        </Routes>
    );
}


{/* <Routes>
<Route path="products" element={<Products />}>
    <Route path=":id" element={<ProductDetails />} />
</Route>

<Route path="create-product" element={<NewProductHook />} />
</Routes> */}



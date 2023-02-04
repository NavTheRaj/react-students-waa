
import React from 'react';
import '../Headers/Header.css'
import Header from "../Headers/Header";
import PageRoutes from './PageRoutes';
import Students from '../../components/Students/Students';
import AddStudent from '../../components/AddStudent/AddStudent';
import SelectedStudent from '../../components/SelectedStudent/SelectedStudent';
import Student from '../../components/Student/Student';

export default function Dashboard() {
    return (
        <React.Fragment>

            <div className='header'>
                <Header />
            </div>
            <div className="Product">
                <PageRoutes>
                    <Students />
                    <Student />
                    <AddStudent />
                    <SelectedStudent />
                </PageRoutes>
            </div>

        </React.Fragment>

    )

}
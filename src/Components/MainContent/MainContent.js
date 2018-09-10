import React, { Component } from 'react';
import Search from './Search/Search.js';
import Table from './Table/Table.js';
import AddUser from './AddUser/AddUser.js';
import ModifierStudent from './Popup/ModifierStudent.js';
import Data from '../../DataStudent.json';
import AddButton from './AddUser/AddButton.js';
import EditUser from './EditUser/EditUser.js';
class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
    
    updateStudent = (newStudent) => {
       
        this.props.addNewUser(newStudent);
        this.setState({
            student:newStudent
        })
    }
    render() {
        // console.log('this.state.student :', this.state.student);
        return (
            <div>
                <div className="container">
                    <div className="row">
                    <div className="form-group d-flex justify-content-between w-100">
                    <Search />
                    <AddButton />
                    <AddUser  updateStudent = { this.updateStudent}/>
                    <EditUser />
                    </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <Table dataStudent = { this.props.dataStudent}/>
                        {/* <AddUser /> */}
                        {/* <ModifierStudent item={Data[0]}/> */}
                    </div>
                </div>

            </div>
        );
    }
}

export default MainContent;
import React, { Component } from 'react';
import Search from './Search/Search.js';
import Table from './Table/Table.js';
import AddUser from './AddUser/AddUser.js';
import AddButton from './AddUser/AddButton.js';
import EditUser from './EditUser/EditUser.js';
class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            default: false
        }
    }



    updateStudent = (newStudent) => {

        this.props.addNewUser(newStudent);
        this.setState({
            student: newStudent,
            default: false
        })
    }

    resetValue = (object) => {
        // console.log('object :', object);
        // console.log('this :', this);
        this.setState({
            default: true
        })

    }

    render() {
        // console.log('this.state.main :', this.state.default);
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="form-group d-flex justify-content-between w-100">
                            <Search />
                            <AddButton resetValue={this.resetValue} />
                            <AddUser
                                default={this.state.default}
                                updateStudent={this.updateStudent}
                                dataStudent={this.props.dataStudent}
                            />
                            <EditUser />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <Table dataStudent={this.props.dataStudent} />
                        {/* <AddUser /> */}
                        {/* <ModifierStudent item={Data[0]}/> */}
                    </div>
                </div>

            </div>
        );
    }
}

export default MainContent;
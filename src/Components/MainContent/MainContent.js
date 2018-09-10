import React, { Component } from 'react';
import Search from './Search/Search.js';
import Table from './Table/Table.js';
import AddUser from './AddUser/AddUser.js';
import ModifierStudent from './Popup/ModifierStudent.js';
import Data from '../../DataStudent.json';
import AddButton from './AddUser/AddButton.js';
class MainContent extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                    <div className="form-group d-flex justify-content-between w-100">
                    <Search />
                    <AddButton />
                    <AddUser />
                    </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <Table />
                        {/* <AddUser /> */}
                        {/* <ModifierStudent item={Data[0]}/> */}
                    </div>
                </div>

            </div>
        );
    }
}

export default MainContent;
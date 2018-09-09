import React, { Component } from 'react';
import Search from './Search/Search.js';
import Table from './Table/Table.js';
import AddUser from './AddUser/AddUser.js';
import ModifierStudent from './Popup/ModifierStudent.js';
import Data from '../../DataStudent.json';
class MainContent extends Component {
    render() {
        return (
            <div>
                <Search />
                <div className="container">
                    <div className="row">
                        <Table />
                        <AddUser />
                        {/* <ModifierStudent item={Data[0]}/> */}
                    </div>
                </div>

            </div>
        );
    }
}

export default MainContent;
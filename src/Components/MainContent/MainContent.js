import React, { Component } from 'react';
import Search from './Search/Search.js';
import Table from './Table/Table.js';
import AddUser from './AddUser/AddUser.js';
class MainContent extends Component {
    render() {
        return (
            <div>
                <Search />
                <div className="container">
                    <div className="row">
                        <Table />
                        <AddUser />
                    </div>
                </div>

            </div>
        );
    }
}

export default MainContent;
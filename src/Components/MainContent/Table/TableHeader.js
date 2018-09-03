import React, { Component } from 'react';

class TableHeader extends Component {
    render() {
        return (
        <tr>
            <th>TT</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Ngày nhập học</th>
            <th>Ngày sinh</th>
            <th>Hình thức</th>
            <th>Progress</th>
            <th>Note</th>
            <th>Thao Tác</th>
         </tr>
        );
    }
}

export default TableHeader;
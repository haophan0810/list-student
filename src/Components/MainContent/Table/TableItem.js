import React, { Component } from 'react';

class TableItem extends Component {
    constructor(props) {
        super(props);
        
    }
    test (e){
      console.log('this.props.deleteStudent() :', this.props.deleteStudent(e));
      
    }
    
    render() {
        return (
            <tr>
            <td >{this.props.index+1}</td>
            <td>{this.props.item.name}</td>
            <td>{this.props.item.email}</td>            
            <td>{this.props.item.phone}</td>
            <td>{this.props.item.startDay}</td>
            <td>{this.props.item.birthday}</td>
            <td>{this.props.item.timeTrainning}</td>
            <td>{this.props.item.progress}</td>
            <td>{this.props.item.note}</td>
            <td>
              <div className="btn btn-group">
                <button className="btn btn-warning" data-toggle="modal" data-target="#edit-user">
                  <i className="far fa-edit mr-1" />
                   Sửa
                </button>
                <button className="btn btn-danger"  value={this.props.index} onClick= {() => this.test(this.props.index) }>
                  <i className="fas fa-user-times mr-1" />
                   Xóa
                </button>
                <button className="btn btn-info">
                <i className="far fa-copy mr-1"></i>
                   Copy
                </button>
              </div>
            </td>
          </tr>

        );
    }
}

export default TableItem;
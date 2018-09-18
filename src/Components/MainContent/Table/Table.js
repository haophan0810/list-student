import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableItem from './TableItem';

class Table extends Component {

  
    renderItem (){
      
      const listItems = this.props.dataStudent.map(
        (item, index) => {
          let tableItem;
          if(item.note !== "out") {
          tableItem= <TableItem key={index} item = {item} index={index} deleteStudent={() => this.deleteStudent(index)}/>
          }
          return tableItem;
        }
      );
      return listItems;
    };
    
    render() {
      // console.log('object :', this.props.dataStudent);
        return (
            <div className="col-12">
              <table className="table table-hover table-striped table-responsive ">
                <thead className="thead-inverse|thead-default ">
                <TableHeader />
                </thead>
                <tbody>
                { this.renderItem() }                

                </tbody>
              </table>
            </div>

        );
    }
}

export default Table;
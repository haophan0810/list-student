import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableItem from './TableItem';
import dataStudent from '../../../DataStudent.json';

localStorage.setItem('myData', JSON.stringify(dataStudent));
const dataStorage = JSON.parse(localStorage.getItem("myData"));
console.log('typeof dataStorage :', dataStorage);
class Table extends Component {
 constructor(props) {
   super(props);
   this.state = {
     data:dataStorage
   }
 }
 deleteStudent(index) {
  dataStorage[index].note = "out";
  this.setState({
    data:dataStorage
});
  console.log('object :', dataStorage);
};

    renderItem (){
     
      const listItems = this.state.data.map(
        (item, index) => {
          if(item.note !== "out") {
          return <TableItem key={index} item = {item} index={index} deleteStudent={this.deleteStudent.bind(this)}/>
          }
        }
      );
      return listItems
    };

   

    
    render() {
      // console.log('object :', dataStudent);
        return (
            <div className="col-9">
  <table className="table table-hover table-striped table-{1:striped|sm|bordered|hover|inverse} table-responsive">
    <thead className="thead-inverse|thead-default">
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
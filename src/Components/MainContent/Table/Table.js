import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableItem from './TableItem';
import dataStudent from '../../../DataStudent.json';



class Table extends Component {
 constructor(props) {
  super(props);

   this.state = {
     data:JSON.parse(localStorage.getItem('userData'))
   }
 }

 
 componentWillMount() {
   if (localStorage.getItem('userData') ===null){
     localStorage.setItem('userData',JSON.stringify(dataStudent));
   }else {
     const temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      })
   }

 }
 
 
 deleteStudent(index) {
  this.state.data[index].note = 'out';
  this.setState({
    data:this.state.data
});
  localStorage.setItem('userData',JSON.stringify(this.state.data));

};

    renderItem (){

      const listItems = this.state.data.map(
        (item, index) => {
          if(item.note !== "out") {
          return <TableItem key={index} item = {item} index={index} deleteStudent={() => this.deleteStudent(index)}/>
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
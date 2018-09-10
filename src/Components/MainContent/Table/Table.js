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
   let dataClone = JSON.stringify(this.state.data);
   dataClone =JSON.parse(dataClone);
   
   dataClone[index].note = 'out';
  this.setState({
    data:dataClone
});

  localStorage.setItem('userData',JSON.stringify(dataClone));

};

    renderItem (){
      let dataClone = JSON.stringify(this.state.data);
      dataClone =JSON.parse(dataClone);
      const listItems = dataClone.map(
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
            <div className="col-12">
              <table className="table table-hover table-striped table-responsive">
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
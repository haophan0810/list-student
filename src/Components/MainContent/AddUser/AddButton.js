import React, { Component } from 'react';

class AddButton extends Component {
    render() {
       
        return (
            
            <div className="btn btn-group">
                <button 
                  className="btn btn-success" 
                  data-toggle="modal" data-target="#add-user" onClick={()=> this.props.resetValue()}>
                <i className="fas fa-plus mr-2"></i>
                     Thêm Học viên
                </button>
                
              </div>
        );
    }
}

export default AddButton;
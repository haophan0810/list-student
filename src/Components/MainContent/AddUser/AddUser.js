import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dismiss:'',
        default:this.props.default


      }
    }
    checkValid (n,value){
      if ((n ==='id' && value ==='') || (n==="name" && value==='')){
        return false;
      }else{
      } return true;

    }

    getValueInput (event){
      const target = event.target;
      const name = target.name;
      const value = target.value;
      
      if (this.checkValid(name,value)){
        this.setState({
          [name]: value,
          dismiss:'modal',
          default:false
        })
      }
    }

  

    submit(){
      const newStudent = this.state;
      this.setState({
        default:true
      })
      this.props.updateStudent(newStudent);
    
      
     
    }
    
    handleSubmit(){
      console.log('test');
     
    }
  render() {
    console.log('this.props.default :', this.props.default);
    console.log('this.state.default :', this.state.default);
    return (
      <div className="modal fade" id="add-user" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel" >Thêm học viên</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="card">
              
                <div className="card-body">     
        <form method="post" onSubmit={() => this.handleSubmit}>
                        
                <div className="form-group">
                    <label htmlFor="id-name">ID</label>
                    <input
                        value={this.state.default? "": this.state.id}
                        onChange = { (event) => this.getValueInput(event)} 
                        type="number" 
                        name="id" id="id-name" 
                        className="form-control" placeholder="Id" aria-describedby="helpId" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="add-name">Họ Tên</label>
                    <input  
                        value={this.state.default? "": this.state.name}
                        onChange = { (event) => this.getValueInput(event)} 
                        type="text" 
                        name="name" id="add-name" className="form-control" placeholder="Tên" aria-describedby="helpId" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="add-email">email</label>
                    <input  
                        value={this.state.default? "": this.state.email}
                        onChange = { (event) => this.getValueInput(event)} 
                        type="email" 
                        name="email" id="add-email" className="form-control" placeholder="Email" aria-describedby="helpId" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="add-start-day">Ngày nhập học</label>
                    <input  
                        value={this.state.default? "": this.state.startDay}
                        onChange = { (event) => this.getValueInput(event)} 
                        type="text" 
                        name="startDay" id="add-start-day" className="form-control" placeholder="Ngày nhập học" aria-describedby="helpId" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="add-birthday">Ngày sinh</label>
                    <input  
                        value={this.state.default? "": this.state.birthday}
                        onChange = { (event) => this.getValueInput(event)} 
                        type="date" 
                        name="birthday" id="add-birthday" className="form-control" placeholder="Ngày sinh" aria-describedby="helpId" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="add-time-trainning">Hình thức học</label>
                    <input  
                        value={this.state.default? "": this.state.timeTrainning}
                        onChange = { (event) => this.getValueInput(event)} 
                        type="date" 
                        name="timeTrainning" id="add-time-trainning" className="form-control" placeholder="Hình thức học" aria-describedby="helpId" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="add-progress">Tiến trình</label>
                    <input  onChange = { (event) => this.getValueInput(event)} 
                        type="text" 
                        name="progress" id="add-progress" className="form-control" placeholder="Tiến trình" aria-describedby="helpId" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="add-note">Ghi chú</label>
                    <input  onChange = { (event) => this.getValueInput(event)} 
                        type="text" 
                        name="note" id="add-note" className="form-control" placeholder="Ghi chú" aria-describedby="helpId" />
                  </div>
              
                  
                  </form>

                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" >Close</button>
              <input 
                  type="submit" 
                  className="btn btn-primary" 
                  data-dismiss={this.state.dismiss} 
                  onClick= { () => this.submit()} value="Save"/>
            </div>
          </div>
          
        </div>
      </div>



    );
  }
}

export default AddUser;
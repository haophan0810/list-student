import React, { Component } from 'react';


class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dismiss: "",
      default: this.props.default,// reset field
      warningId: "d-none",
      warningName: "d-none",
      warningEmail: "d-none",
      messageID: "",
      messageName: "",
      messageEmail: "",
      isAddNewStudent: false,
      dataStudents: this.props.dataStudent

    }
  }

  getValueInput(event) {
    const target = event.target;
    const name = target.name.toString();
    const value = target.value.toString();

    if (!this.state.id){
      this.setState({
        dismiss: "",
        isAddNewStudent: false,
        warningId:"d-block text-danger mt-2",
        messageID: "ID không được rỗng"       
      })
    }

    if (!this.state.name){
      this.setState({
        dismiss: "",
        isAddNewStudent: false,
        warningName:"d-block text-danger mt-2",
        messageName: "Name không được rỗng"    
      })
    }

    if (!this.state.email){
      this.setState({
        dismiss: "",
        isAddNewStudent: false,
        warningEmail:"d-block text-danger mt-2",
        messageEmail: "Email không được rỗng"    
      })
    }
    if (this.checkExistStudent(value, this.state.dataStudents) && name === "id") {
      this.setState({
        dismiss: "modal",
        isAddNewStudent: true,
        warningId:"d-none",
        messageID:""
      })
    } else {
      this.setState({
        dismiss: "",
        isAddNewStudent: false,
        warningId:"d-block text-danger mt-2",
        messageID: "Học viên tồn tại"
        
      })
    }
    if (this.checkEmpty(name, value)) {
      this.setState({
        [name]: value,
        default: false
      })
    }
  }



  submit() {
    const newStudent = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      birthday: this.state.birthday || "",
      startDay: this.state.startDay || "",
      phone: this.state.phone || "",
      progress: this.state.progress || "",
      timeTrainning: this.state.timeTrainning || ""
    }
    console.log('object');
    if (!newStudent.id){
      this.setState({
        dismiss: "",
        isAddNewStudent: false,
        warningId:"d-block text-danger mt-2",
        messageID: "ID không được rỗng"       
      })
    }

    if (!newStudent.name){
      this.setState({
        dismiss: "",
        isAddNewStudent: false,
        warningName:"d-block text-danger mt-2",
        messageName: "Name không được rỗng"    
      })
    }

    if (!newStudent.name){
      this.setState({
        dismiss: "",
        isAddNewStudent: false,
        warningEmail:"d-block text-danger mt-2",
        messageEmail: "Email không được rỗng"    
      })
    }
    
    if(this.state.isAddNewStudent){
      this.setState({
        default: true,
        dataStudents: this.props.dataStudent
      })
  
      this.props.updateStudent(newStudent);
    }

    

  }

  // disable e + - for field id
  disableKey(event) {
    if (event.which === 69 || event.which === 189 || event.which === 107 || event.which === 187) {
      event.preventDefault();
    }
  }
  // kiểm tra các trường rỗng
  checkEmpty(n, value) {

    return true;
  }

  // kiểm tra xem id đã có trong data chưa
  checkExistStudent(id, dataStudents) {

    for (let student of dataStudents) {
      if (id === student.id) {
        console.log('false');
        return false;
      }

    }
    return true;
  }
  render() {
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
                  <form method="post">
                    <div className="form-group">
                      <label htmlFor="id-name">ID</label>
                      <input
                        value={this.state.default ? "" : this.state.id}
                        onChange={(event) => this.getValueInput(event)}
                        onKeyDown={(event) => this.disableKey(event)}
                        type="number"
                        name="id" id="id-name"
                        className="form-control" placeholder="Id" aria-describedby="helpId" required
                      />
                      <span className={this.state.warningId}> {this.state.messageID}</span>

                    </div>
                    <div className="form-group">
                      <label htmlFor="add-name">Họ Tên</label>
                      <input
                        value={this.state.default ? "" : this.state.name}
                        onChange={(event) => this.getValueInput(event)}
                        type="text"
                        name="name" id="add-name" className="form-control" placeholder="Tên" aria-describedby="helpId"
                      />
                      <span className={this.state.warningName}> {this.state.messageName}</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="add-email">email</label>
                      <input
                        value={this.state.default ? "" : this.state.email}
                        onChange={(event) => this.getValueInput(event)}
                        type="email"
                        name="email" id="add-email" className="form-control" placeholder="Email" aria-describedby="helpId"
                      />
                      <span className={this.state.warningEmail}> {this.state.messageEmail}</span>

                    </div>
                    <div className="form-group">
                      <label htmlFor="add-start-day">Ngày nhập học</label>
                      <input
                        value={this.state.default ? "" : this.state.startDay}
                        onChange={(event) => this.getValueInput(event)}
                        type="text"
                        name="startDay" id="add-start-day" className="form-control" placeholder="Ngày nhập học" aria-describedby="helpId"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="add-birthday">Ngày sinh</label>
                      <input
                        value={this.state.default ? "" : this.state.birthday}
                        onChange={(event) => this.getValueInput(event)}
                        type="date"
                        name="birthday" id="add-birthday" className="form-control" placeholder="Ngày sinh" aria-describedby="helpId"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="add-time-trainning">Hình thức học</label>
                      <input
                        value={this.state.default ? "" : this.state.timeTrainning}
                        onChange={(event) => this.getValueInput(event)}
                        type="date"
                        name="timeTrainning"
                        id="add-time-trainning"
                        className="form-control" placeholder="Hình thức học" aria-describedby="helpId"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="add-progress">Tiến trình</label>
                      <input onChange={(event) => this.getValueInput(event)}
                        type="text"
                        name="progress"
                        id="add-progress"
                        className="form-control" placeholder="Tiến trình" aria-describedby="helpId"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="add-note">Ghi chú</label>
                      <input
                        onChange={(event) => this.getValueInput(event)}
                        type="text"
                        name="note"
                        id="add-note"
                        className="form-control"
                        placeholder="Ghi chú" a
                        ria-describedby="helpId"
                      />
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
                onClick={() => this.submit()} value="Save" />
            </div>
          </div>

        </div>
      </div>



    );
  }
}

export default AddUser;
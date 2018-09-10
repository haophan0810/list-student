import React, { Component } from 'react';

class AddUser extends Component {
  render() {
    return (

      <div className="modal fade" id="add-user" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Thêm học viên</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="card">
                <div className="card-body">                
                  
                  <div className="form-group">
                    <label htmlFor="add-name">Họ Tên</label>
                    <input type="text" name="student-name" id="add-name" className="form-control" placeholder="Tên" aria-describedby="helpId" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="add-start-day">Ngày nhập học</label>
                    <input type="text" name="student-start-day" id="add-start-day" className="form-control" placeholder="Ngày nhập học" aria-describedby="helpId" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="add-birthday">Ngày sinh</label>
                    <input type="text" name="student-birthday" id="add-birthday" className="form-control" placeholder="Ngày sinh" aria-describedby="helpId" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="add-time-trainning">Hình thức học</label>
                    <input type="text" name="student-time-trainning" id="add-time-trainning" className="form-control" placeholder="Hình thức học" aria-describedby="helpId" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="add-progress">Tiến trình</label>
                    <input type="text" name="student-progress" id="add-progress" className="form-control" placeholder="Tiến trình" aria-describedby="helpId" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="add-note">Ghi chú</label>
                    <input type="text" name="student-note" id="add-note" className="form-control" placeholder="Ghi chú" aria-describedby="helpId" />
                  </div>

                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>



    );
  }
}

export default AddUser;
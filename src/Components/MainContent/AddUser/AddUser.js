import React, { Component } from 'react';

class AddUser extends Component {
    render() {
        return (
            <div className="col-3">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Thêm học viên</h4>
      <hr className="my-2" />
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
      <button className="btn btn-success w-100">Thêm</button>
    </div>
  </div>
</div>

        );
    }
}

export default AddUser;
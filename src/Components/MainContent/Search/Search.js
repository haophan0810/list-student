import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="form-group">
                <div className="btn btn-group">
                  <input type="text" name id="main-search" className="form-control" placeholder="Nhập từ khóa tìm kiếm" aria-describedby="helpId" />
                  <button type="button" className="btn btn-info">
                    <i className="fas fa-search" />Search</button>
                </div>
              </div>
            </div>
          </div>
          
        );
    }
}

export default Search;
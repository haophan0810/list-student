import React, { Component } from 'react';
import TableHeader from '../Table/TableHeader';

const showPopup = {
    display: "block"
}
class ModifierStudent extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <TableHeader />
                <div className="modal fade show" style={showPopup} tabIndex={-1} role="dialog">
                    <div className="modal-dialog" role="document">
                    <tr>
                    <td >
                    <input type="text" value={ this.props.item.id  }
                        class="form-control" name="" id={ this.props.item.id } aria-describedby="helpId" placeholder="" />
                    </td>
                    <td>
                    <input type="text" value={this.props.item.name}
                        class="form-control" name="" id={this.props.item.name} aria-describedby="helpId" placeholder="" />
                    </td>
                    <td>
                    <input type="text" value={this.props.item.name}
                        class="form-control" name="" id={this.props.item.name} aria-describedby="helpId" placeholder="" />
                    </td>
                    <td>
                    <input type="text" value={this.props.item.name}
                        class="form-control" name="" id={this.props.item.name} aria-describedby="helpId" placeholder="" />
                    </td>
                    <td>
                    <input type="text" value={this.props.item.name}
                        class="form-control" name="" id={this.props.item.name} aria-describedby="helpId" placeholder="" />
                    </td>
                    <td>
                    <input type="text" value={this.props.item.name}
                        class="form-control" name="" id={this.props.item.name} aria-describedby="helpId" placeholder="" />
                    </td>
                    <td>
                    <input type="text" value={this.props.item.name}
                        class="form-control" name="" id={this.props.item.name} aria-describedby="helpId" placeholder="" />
                    </td>
                    <td>
                    <input type="text" value={this.props.item.name}
                        class="form-control" name="" id={this.props.item.name} aria-describedby="helpId" placeholder="" />
                    </td>
                    <td>
                    <input type="text" value={this.props.item.name}
                        class="form-control" name="" id={this.props.item.name} aria-describedby="helpId" placeholder="" />
                    </td>
                    <td>
                    <div className="btn btn-group">
                        <button className="btn btn-warning" value={this.props.index} onClick= {(e) => this.test(e) } >
                        <i class="fas fa-check mr-1"></i>
                        OK
                        </button>
                        <button className="btn btn-danger">
                        <i className="fas fa-ban mr-1" />
                        Cancel
                        </button>
                       
                    </div>
                    </td>
                </tr>
                    </div>
                </div>

               
            </div>
        );
    }
}

export default ModifierStudent;
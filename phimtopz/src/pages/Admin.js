import React from 'react'

const Admin = () => {
  return (
    <div className="setAccount">
            <div className="setAccount-title">
                <h2 className="display-3">Administrator</h2>
            </div> 
            <div className="searchForm-Account">
                <div className="form-input">
                    <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập Từ Khóa" />
                    <button>Tìm Kiếm</button>
                </div>
                <div className="form-group">
                    <table className="table-title">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th>Điện Thoại</th>
                                <th>Phân Quyền</th>
                                <th>Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Phạm Xuân Quyết</td>
                                <td>0906269090</td>
                                <td>Admin</td>
                                <td>
                                    <div className="btn-group">
                                        <button className="edit">Sửa</button>
                                        <button className="delete">Xóa</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>    
                    {/* end table */}
                    <div className="card-content">
                        <div className="card-header">Thêm mới Tài Khoản</div>
                        <div className="card-body">
                            <div className="form-groupAdd">
                                <p>Tài Khoản</p>
                                <input type="text" name id className="form-control" placeholder="User name" />
                            </div>
                            <div className="form-groupAdd">
                                <p>Số Điện Thoại</p>
                                <input type="text" name id className="form-control" placeholder="Add number" />
                            </div>
                            <div className="form-groupAdd">
                                <p>Phân Quyền</p>
                                <select className="custom-select" required>
                                    <option value>Lựa chọn</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Sales</option>
                                    <option value={3}>Customer Support</option>
                                   </select>
                            </div>
                            <div className="form-groupAdd">
                                <button>Lưu Lại</button>
                            </div>
                        </div>
                    </div>
                    {/* end set user */}
                </div>
            </div>
         </div>
  )
}

export default Admin
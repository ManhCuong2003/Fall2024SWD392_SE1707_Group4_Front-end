import React from "react";
import './style.scss'

const ChangePassword = () => {
    return (
        <div className="change-password-page">
            <div className="profile">
                <h2>Hồ sơ của tôi</h2>
            </div>
            <div className="change-password-content">
                <h2>ĐỔI MẬT KHẨU</h2>
                <p>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</p>
                <div className="input-password-content">
                    <div className="label-password">
                        <label>Mật khẩu cũ:</label> <br />
                        <label>Mật khẩu mới:</label> <br />
                        <label>Nhập lại mật khẩu mới:</label> <br />
                    </div>
                    <div className="input-password">
                        <input type="password" /> <br />
                        <input type="password" /> <br />
                        <input type="password" /><br />
                    </div>
                </div>
                <button>Xác nhận</button>
            </div>
        </div>
    )
}

export default ChangePassword
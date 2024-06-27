import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { getUserInfo } from "../apiCalls/users";
import { SetUser } from "../redux/usersSlice.jsx";

function ProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getUserData = async () => {
    try {
      const response = await getUserInfo();
      if (response.success) {
        message.success(response.message);
        dispatch(SetUser(response.data));
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="layout">
      <div className="flex gap-2">
        <div className="sidebar">Sidebar</div>
        <div className="body">
          <div className="header">Header</div>
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default ProtectedRoute;

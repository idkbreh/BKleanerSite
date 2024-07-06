import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import '../Login.css'; 
import Navbar from '../components/NavigatorBar/Navigator';
import Swal from 'sweetalert2';
import { isAuthTokenValid } from '../constant/isAuthenCheck';
import { Link } from 'react-router-dom';

const SimpleForm = () => {

const [message, setMessage] = useState({});
  const onFinish = (values) => {
    console.log('Success:', values);
    if( values.username == 'test' && values.password == 'test'){
        localStorage.setItem("token", `youpassingthisisjustmockuptester`);
        setMessage({ message: 'เข้าสู่ระบบสำเร็จ กำลังพาท่านไปหน้าหลัก', status: "success" });

    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  if (message && message.message) {
    Swal.fire({
        title: "Alert Message",
        text: message.message,
        icon: message.status
    }).then((result) =>{
        if(result.isConfirmed){window.location.href= "/"}
      })
}
const tokenAuthen = isAuthTokenValid()
if( tokenAuthen == false){  return (
    <>
    <Navbar/>
    <div className="simple-form-container">
    
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="simple-form"
      >
        <h2 className="simple-form-title">เข้าสู่ระบบ * เฉพาะเจ้าหน้าที่</h2>

        <Form.Item
          label="ชื่อผู้ใช้"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="รหัสผ่านผู้ใช้"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="simple-form-button">
            
            เข้าสู่ระบบ
          </Button>
        </Form.Item>
      </Form>
    </div>
    </>
  )}else{
    return(
        <>
        <Link to="/">Go to home</Link>
        <p>Sorry for bad user expirence we have like 2 hours to do this TT</p></>
    )
  };
};

export default SimpleForm;

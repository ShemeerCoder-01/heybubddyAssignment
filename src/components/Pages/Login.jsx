import React from 'react';
import twitterX from "../../assets/images/img_twitter_logo_4_1.png";
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
// import twitterLogo from "../assets/images/img_twitter_logo_4_1.png";
// import googleIcon from "../assets/images/img_googleicon_1.png";
// import appleIcon from "../assets/images/img_logoapple_1.png";

function Login() {
  const navigate = useNavigate();

  const handleNavigation = ()=> {
    navigate('/');
  }

  return (
    <div>
      <div className='w-full h-screen flex justify-center items-center bg-gray-300'>
        <div className='w-[500px] bg-white-A700 px-6 py-12'>
          <div className='flex justify-center my-3'>
            <img src={twitterX} className='w-[40px] h-[33px]' alt='icon' />
          </div>
          <p>Log in to Twitter</p>
          <div>
            <Form className='CommonForm'>
              <Form.Item name="name">
                <Input placeholder="Phone number, email addres" />
              </Form.Item>
              <Form.Item name="password">
                <Input placeholder="Password" />
              </Form.Item>
            </Form>
            <button className='text-white-A700 rounded-[3rem] bg-blue w-full h-[40px] font-medium'>Next</button>
            <div className='flex items-center justify-between my-3'>
              <p className='text-blue cursor-pointer'>Forgot password?</p>
              <p className='text-blue cursor-pointer' onClick={handleNavigation}>Sign up to Twitter</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Login
import React, { useState } from 'react'
import twitterX from "../../assets/images/img_back_twitter_1.png";
import twitterLogo from "../../assets/images/img_twitter_logo_4_1.png";
import googleIcon from "../../assets/images/img_googleicon_1.png";
import appleIcon from "../../assets/images/img_logoapple_1.png";
import SignUpForm from '../Shared/SignUpForm';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [isModalOpen,setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/login');
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }
    return (
        <>
            <div>
                <div className='w-full flex gap-5'>
                    <div className='w-[60%]'>
                        <img src={twitterX} alt='twitterX' className='object-cover' />
                    </div>
                    <div className='w-[40%] my-auto'>
                        <img src={twitterLogo} alt='twitterlogo' className='w-[4rem] h-[3rem]' />
                        <h1 className='text-[60px] font-[900] my-3'>Happening now</h1>
                        <h2 className='text-[35px] font-[900] my-3'>Join Twitter today</h2>
                        <div className='w-[25rem] h-[3.75rem] rounded-[10rem] shadow px-3 flex items-center justify-center mt-5 cursor-pointer'>
                            <img src={googleIcon} alt='googleIcon' className='w-[32px] h-[32px]' />
                            <span className='font-semibold text-xl'>Sign up with Google</span>
                        </div>
                        <div className='w-[25rem] h-[3.75rem] rounded-[10rem] shadow px-3 flex items-center justify-center mt-3 cursor-pointer'>
                            <img src={appleIcon} alt='googleIcon' className='w-[32px] h-[32px]' />
                            <span className='font-semibold text-xl'>Sign up with Apple</span>
                        </div>
                        <div className='w-[25rem] h-[3.75rem] rounded-[10rem] shadow px-3 flex items-center justify-center mt-3 cursor-pointer' onClick={() => setIsModalOpen(true)}>
                            <span className='font-semibold text-xl'>Sign up with phone or email</span>
                        </div>
                        <p className='mt-12 font-normal text-sm'>By singing up you agree to the <span className='text-blue'>Terms of Service</span> and <span className='text-blue'>Privacy<br /> Policy</span>, including <span className='text-blue'>Cookie Use</span>.</p>
                        <p className='mt-6 font-normal text-base'>Already have an account? <span className='text-blue cursor-pointer' onClick={handleNavigation}>Log in</span></p>
                    </div>
                </div>
            </div>
            <Modal
            open={isModalOpen}
            onCancel={handleCancel}
            onOk={handleCancel}
            footer={[]}
            >
                <SignUpForm/>
            </Modal>
        </>
    )
}

export default SignUp
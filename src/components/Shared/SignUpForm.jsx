import React from 'react'
import twitterX from "../../assets/images/img_twitter_logo_4_1.png";
import { Form, Input, Select } from 'antd';
function SignUpForm() {
    const yearsArray = Array.from({ length: 2025 - 1900 }, (_, index) => (1900 + index).toString());
    const monthsArray = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const daysArray = Array.from({ length: 31 }, (_, index) => (index + 1).toString());
    return (
        <div className='flex justify-center'>
            <div className='w-[400px]'>
                <div className='flex justify-center my-5'>
                    <img src={twitterX} className='w-[40px] h-[33px]' alt='icon' />
                </div>
                <p className='font-bold text-2xl my-3'>Create an account</p>
                <div>
                    <Form className='CommonForm'>
                        <Form.Item name="name">
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item name="phoneNumber">
                            <Input placeholder="Phone Number" />
                        </Form.Item>
                        <p className='text-blue my-3'>Use email</p>
                        <div className='my-2'>
                            <label className='font-medium'>Date of birth</label>
                            <p>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
                                Quis bibendum ante phasellus metus, magna lacinia sed augue.
                                Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit
                                viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>

                        </div>
                        <Form.Item>
                            <div className='w-full flex items-center gap-1'>
                                <Select
                                className='w-[50%]'
                                    placeholder="Month"
                                    options={
                                        monthsArray.map((month) => {
                                            return {
                                                label: month,
                                                value: month
                                            }
                                        })
                                    }
                                />
                                <Select
                                className='w-[25%]'
                                    placeholder="Day"
                                    options={
                                        daysArray.map((day) => {
                                            return {
                                                label: day,
                                                value: day
                                            }
                                        })
                                    }
                                />
                                <Select
                                className='w-[25%]'
                                    placeholder="Year"
                                    options={
                                        yearsArray.map((year) => {
                                            return {
                                                label: year,
                                                value: year
                                            }
                                        })
                                    }
                                />
                            </div>
                        </Form.Item>
                    </Form>
                    <button className='text-white-A700 rounded-[3rem] bg-blue w-full h-[40px] font-medium'>Next</button>
                </div>


            </div>
        </div>
    )
}

export default SignUpForm
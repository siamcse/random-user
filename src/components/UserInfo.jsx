import { faCalendarDays, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faMapLocation, faPhone, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const UserInfo = () => {
    

    console.log(data);
    const [info, setInfo] = useState(
        <div className='text-center'>
            <p>Hi, My name is</p>
            <h1 className='text-4xl'>{data?.name.first} {data?.name.last}</h1>
        </div>
    );


    return (
        <div className='flex justify-center'>
            <div className='-mt-48 bottom-0 left-1/4 mx-auto'>
                <div className='w-[730px] h-[400px] bg-white shadow-lg'>
                    <div className='flex flex-col justify-center items-center pt-5'>
                        <img className='rounded-full z-10 p-1 border-2 w-40' src={data?.picture.large} alt="" />
                        <hr className='w-full -mt-12 z-0' />
                    </div>
                    <div className='flex justify-center mt-20'>
                        {
                            isLoading ?
                                <div className='text-center'>
                                    <p>Hi, My name is</p>
                                    <h1 className='text-4xl'>...</h1>
                                </div> :
                                info
                        }
                    </div>
                    <div className='flex justify-center items-center mt-16 gap-14'>
                        <p
                            onMouseEnter={() => setInfo(<div className='text-center'>
                                <p>Hi, My name is</p>
                                <h1 className='text-4xl'>{data?.name.first} {data?.name.last}</h1>
                            </div>)}
                            className='text-3xl text-slate-500'>
                            <FontAwesomeIcon icon={faUser} />
                        </p>
                        <p
                            onMouseEnter={() => setInfo(<div className='text-center'>
                                <p>Hi, My email address is</p>
                                <h1 className='text-4xl'>{data?.email}</h1>
                            </div>)}
                            className='text-3xl text-slate-500'>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </p>
                        <p onMouseEnter={() => setInfo(<div className='text-center'>
                            <p>Hi, My birthday is</p>
                            <h1 className='text-4xl'>{data?.dob.date}</h1>
                        </div>)}
                            className='text-3xl text-slate-500'>
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </p>
                        <p onMouseEnter={() => setInfo(<div className='text-center'>
                            <p>Hi, My address is</p>
                            <h1 className='text-4xl'>{data?.location.street.number} {data?.location.street.name}</h1>
                        </div>)}
                            className='text-3xl text-slate-500'>
                            <FontAwesomeIcon icon={faMapLocation} />
                        </p>
                        <p onMouseEnter={() => setInfo(<div className='text-center'>
                            <p>Hi, My phone number is</p>
                            <h1 className='text-4xl'>{data?.phone}</h1>
                        </div>)}
                            className='text-3xl text-slate-500'>
                            <FontAwesomeIcon icon={faPhone} />
                        </p>
                        <p onMouseEnter={() => setInfo(<div className='text-center'>
                            <p>Hi, My password is</p>
                            <h1 className='text-4xl'>{data?.login.password}</h1>
                        </div>)}
                            className='text-3xl text-slate-500'>
                            <FontAwesomeIcon icon={faUnlockKeyhole} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
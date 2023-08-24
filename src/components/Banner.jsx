import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Banner = () => {
    return (
        <div className='bg-gray-800 h-[443px]'>
            <div className='flex flex-col items-center justify-center pt-12 text-white'>
                <h1 className='uppercase text-5xl mb-9'>Random User Generator</h1>
                <p>A free, open-source API for generating random user data. Like Lorem Ipsum, but for people.</p>
                <a className='mt-5' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/abu-siam">
                    <FontAwesomeIcon icon={faLinkedin} />
                    {" "} Follow me @ LinkedIn
                </a>
            </div>
        </div>
    );
};

export default Banner;
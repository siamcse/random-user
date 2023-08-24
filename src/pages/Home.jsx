import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className=''>
            <div className='bg-gray-800 h-[443px] relative'>
                <div className='flex flex-col items-center justify-center pt-12 text-white'>
                    <h1 className='uppercase text-5xl mb-9'>Random User Generator</h1>
                    <p>A free, open-source API for generating random user data. Like Lorem Ipsum, but for people.</p>
                    <p className='mt-5'>
                        <FontAwesomeIcon icon={faLinkedin} /> Follow me @
                        <a className='text-blue-700' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/abu-siam"> LinkedIn</a>
                    </p>
                </div>
                <div className='mt-10 bottom-0 left-1/4 absolute'>
                    <div className='w-[730px] h-[200px] bg-white'>
                        <div className='flex flex-col justify-center items-center pt-5'>
                            <img className='rounded-full z-10 p-1 border-2 w-40' src="https://randomuser.me/api/portraits/women/96.jpg" alt="" />
                            <hr className='w-full -mt-12 z-0' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
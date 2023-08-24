import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import UserInfo from '../components/UserInfo';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <UserInfo />
        </div>
    );
};

export default Home;
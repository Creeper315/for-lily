import { MdDashboard } from 'react-icons/md';
import { FaUserTie } from 'react-icons/fa';

const SideBar = ({ Active, setActive }) => {
    function getClass(type) {
        if (Active === type) return 'one-line active';
        return 'one-line';
    }

    return (
        <div className="side-bar">
            <div
                className={getClass('dashboard')}
                onClick={() => setActive('dashboard')}
            >
                <div className="icon">
                    <MdDashboard className="ri" />
                </div>
                Dashboard
            </div>
            <div
                className={getClass('users')}
                onClick={() => setActive('users')}
            >
                <div className="icon">
                    <FaUserTie className="ri" />
                </div>
                Users
            </div>
        </div>
    );
};

export default SideBar;

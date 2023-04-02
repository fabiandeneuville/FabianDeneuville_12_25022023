import { useNavigate } from 'react-router-dom'

function Home(){

    const navigate = useNavigate();

    const toUserDashBoard = (id) => {
        navigate(`./dashboard/${id}`)
    }

    return (
        <div className="home__layout">
            <button
            onClick={() => toUserDashBoard(12)}
            >
                12
            </button>
            <button
            onClick={() => toUserDashBoard(18)}
            >
                18
            </button>
        </div>
    )
};

export default Home;
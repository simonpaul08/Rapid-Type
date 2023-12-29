import { useNavigate } from "react-router-dom"

const Landing = () => {

    const navigate = useNavigate();

    return (
        <div className="landing">
            <div className="landing-container">
                <button className="start-btn" onClick={() => navigate('/main')}>Start</button>
            </div>
        </div>
    )
}

export default Landing
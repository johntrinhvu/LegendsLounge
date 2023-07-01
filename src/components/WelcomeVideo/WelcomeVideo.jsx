import videoBg from '../../assets/WelcomeVideo.mp4';
import './WelcomeVideo.css';

export default function WelcomeVideo() {
    return (
        <div className="welcome-video-div">
            <video className="welcome-video" src={videoBg} autoPlay loop muted />
            <div className="welcome-video-overlay"></div>
        </div>
    );
}
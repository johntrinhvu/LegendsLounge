import videoBg from '../../assets/authclip.mp4';
import './AuthVideo.css';

export default function AuthVideo() {
    return (
        <div className="auth-video-div">
            <video className="auth-video" src={videoBg} autoPlay loop muted />
            <div className="auth-video-overlay"></div>
        </div>
    );
}
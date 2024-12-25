import { Link } from "react-router-dom";
import "./MessagePreview.css";
export default function MessagePreview() {
  return (
    <div className="message-preview">
      <h1>Message from our Executive Director</h1>
      <div className="preview-container">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
          </svg>
          <p>
            Greetings from KEAB Africa Community Development and Human Rights
            Organization located at the heart of Hawassa City, Ethiopia. It
            gives me a great pleasure to convey this message to our esteemed
            readers of the website...
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
          </svg>
          <Link to="/exec-director-message">Read Complete Message</Link>
        </div>
        <div>
          <img src="https://i.postimg.cc/y6kQXcFk/exec-image.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

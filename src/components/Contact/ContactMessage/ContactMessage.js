import { useContext } from "react";
import "./ContactMessage.css";
import { GeneralContext } from "../../../hooks/GeneralContext";
export default function ContactMessage() {
  const { message, setMessage } = useContext(GeneralContext);
  return (
    <div className="contact-message">
      <h1>Get in touch with our team for any inquiries.</h1>
      <form className="message-form">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" placeholder="John Doe" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            id="email"
            placeholder="example@email.com"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            onChange={(e) =>
              setMessage((m) => ({ ...m, message: e.target.value }))
            }
            placeholder="Message..."
            id="message"></textarea>
          <p className={`length ${message.message.length > 1000 ? "red" : ""}`}>{message.message.length}/1000</p>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

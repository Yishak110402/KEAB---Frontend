import { useEffect } from "react";
import ContactHeader from "../components/Contact/ContactHeader/ContactHeader";
import ContactMessage from "../components/Contact/ContactMessage/ContactMessage";

export default function Contact() {
    useEffect(function(){
        window.scrollTo(
            {
                top:0,
                behavior:'instant'
            }
        )
    })
  return (
    <>
      <ContactHeader />
      <ContactMessage />
    </>
  );
}

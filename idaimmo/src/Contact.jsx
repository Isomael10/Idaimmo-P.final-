import React, { useRef } from "react";

export default function Contact() {
  const formRef = useRef(null);
  const newsletterRef = useRef(null);

  function handleForm(e) {
    e.preventDefault();
    alert("Merci pour votre message. Un conseiller vous contactera très prochainement.");
    formRef.current.reset();
  }

  function handleNewsletter(e) {
    e.preventDefault();
    alert("Merci pour votre inscription à notre newsletter !");
    newsletterRef.current.reset();
  }

  return (
    <s
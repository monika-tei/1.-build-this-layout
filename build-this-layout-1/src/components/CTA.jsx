import React from "react";

export default function CTA() {
  return <button className="ctaBtn">Contact Us</button>;
}

// then in the according component, we import Button from ./button.jsx
//and then when we need to use it, we write <Button label ="Hi mom"/>
// <Button user={props.user}>Hi mom<Button/>

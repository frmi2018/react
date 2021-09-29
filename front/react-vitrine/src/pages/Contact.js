import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Mouse from "../components/Mouse";
import Logo from "./../components/Logo";
import Navigation from "./../components/Navigation";
import SocialNetwork from "./../components/SocialNetwork";
import ButtonsBottom from "./../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  const variants = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };
  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };
  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        initial="out"
        animate="in"
        exit="out"
        variants={variants}
        transition={transition}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>94240 L'Haÿ-les-roses</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0787009314" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  0784009314
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="frmi2018@gmain.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  frmi2018@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>FRMI - 2021</p>
          </div>
        </div>
        <ButtonsBottom left={"/project-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;

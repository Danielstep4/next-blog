import React from "react";
import Image from "next/image";
import classes from "../../styles/Home/Welcome.module.scss";
import GitHubIcon from "../Icons/GitHubIcon";
import FacebookIcon from "../Icons/FacebookIcon";

const Welcome: React.FC = () => {
  return (
    <section id="welcome" className={classes.welcome}>
      <Image
        src="/images/profile.png"
        alt="My profile picture"
        width={350}
        height={350}
      />
      <h1>Hi, I'm Daniel Stepanishin!</h1>
      <p>I want to start bloging about my life and my goals.</p>
      <span>If you enjoy the content make sure you follow me on github</span>
      <div>
        <GitHubIcon width="35" height="35" />
        <FacebookIcon width="35" height="35" />
      </div>
    </section>
  );
};

export default Welcome;

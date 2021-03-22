import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/Home/Welcome.module.scss";
import GitHubIcon from "../Icons/GitHubIcon";

const Welcome: React.FC = () => {
  return (
    <main id="welcome" className={classes.welcome}>
      <Image
        src="/images/profile.png"
        alt="My profile picture"
        width={350}
        height={350}
      />
      <h1>Hi, I'm Daniel!</h1>
      <p>I want to start bloging about my life and my goals.</p>
      <span>
        If you enjoy the content make sure you subscribe to me on github
      </span>
      <a href="https://www.github.com/danielstep4">
        <GitHubIcon width="35" height="35" />
      </a>
    </main>
  );
};

export default Welcome;

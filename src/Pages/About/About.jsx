import React from "react";
import Banner from './../../Components/Banner/Banner';
import Dropdown from './../../Components/Dropdown/Dropdown';
import AboutData  from "../../Data/dataAbout.json";
import "./About.css"

export default function About() {
  return (
    <main className="about">
      <Banner txt="" page="about"/>
      {AboutData.map((aboutData) => {
        return (
          <Dropdown className="dropdown" key={aboutData.title} title={aboutData.title} content={aboutData.description} page="about"/>
      );})}
    </main>
  );
}
export const metadata = {
  title: 'Portfolio - About',
  description: 'The about page of my portfolio.',
}
import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className="page-container">
      <div className="articles">
        <main>
          <div className="article-card-header">
            <img className="avatar" src='./images/nico.jpg' alt="Avatar" />
            <div className="content">
              <h1>About me</h1>
              <p className="intro-paragraph">
                Hey there! I'm Nicolas, a cybersecurity student hailing from the beautiful country of Chile. As I approach the final stretch of my academic journey, I find myself immersed in the fascinating world of cybersecurity, where every challenge is an opportunity to learn and grow.
              </p>
              <p className="intro-paragraph">
                Beyond my academic pursuits, I am fluent in Spanish, Portuguese, and English, allowing me to connect with people from diverse backgrounds and cultures. I thrive on exploring new languages and embracing the nuances of communication.
              </p>
              <p className="intro-paragraph">
                But there's more to me than just bits and bytes. I have a deep passion for the world of entertainment, whether it's delving into the intricate storylines of manga and anime or getting lost in the pages of a captivating book. When I'm not glued to a screen or buried in a book, you'll often find me indulging in my love for cinema, discovering new films and immersing myself in different cinematic worlds.
              </p>
              <p className="intro-paragraph">
                Yet, amidst all these passions, I still make time for the physical realm. Sports hold a special place in my heart, offering not only a way to stay fit and healthy but also a source of joy and camaraderie. Whether it's kicking a ball around with friends or hitting the gym for a workout, I relish the opportunity to stay active and energized.
              </p>
              <p className="intro-paragraph">
                In essence, I'm a multifaceted individual with a thirst for knowledge, a love for entertainment, and a passion for staying active. Join me on my journey as I navigate the exciting intersections of cybersecurity, culture, and life itself.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


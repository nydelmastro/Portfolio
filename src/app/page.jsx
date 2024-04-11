import React from 'react';
import ArticleCard from '../components/ArticleCard/ArticleCard.jsx';
import './page.css';
import WorkWidget from '../components/WorkWidget/WorkWidget.jsx'; // Import the WorkWidget component
import SkillsWidget from '../components/SkillsWidgets/SkillsWidget.jsx';
import SignupWidget from '../components/SignupWidget/SignupWidget.jsx';
// Define your work experiences data
const experiences = [
  {
    logo: './images/zenta.png',
    organization: 'Zenta Group',
    jobTitle: 'Jr. Software developer',
    startYear: 2012,
    endYear: 2013,
  },
  {
    logo: './images/church.jpeg',
    organization: 'Church of Jesus Christ of Latter-day Saints',
    jobTitle: 'Full time Missionary',
    startYear: 2014,
    endYear: 2016
  },

  // Add more experiences as needed
];
const skills = [
  { name: "HTML", proficiency: 50, icon: './images/3.jpg' },
  { name: "CSS", proficiency: 50, icon: './images/5.jpg' },
  { name: "JavaScript", proficiency: 40, icon: './images/js.jpg' },
]

const articles = [
  {
    date: 'Apr 10, 2024',
    title: 'Stack Overflow: The World’s Largest Online Community for Developers',
    content: 'Empowering the world to develop technology, through collective knowledge.',
    link: 'https://stackoverflow.com/',
  },
  {
    date: 'Apr 10, 2024',
    title: 'TechCrunch',
    content: 'Reporting on the business of technology, startups, venture capital funding, and Silicon Valley.',
    link: 'https://www.techcrunch.com/',
  },
  {
    date: 'Apr 10, 2024',
    title: 'Codeacademy',
    content: 'Provides interactive coding lessons and projects for learning various programming languages.',
    link: 'https://www.codecademy.com/',
  },
];

const Home = () => {
  return (
    <div className="page-container">
      <div className="articles">
        <main>
          <div className="article-card-header">
            <img className="avatar" src='./images/nico.jpg' alt="Avatar"  />
            <div>
              <h1>Nicolas Delmastro's Portfolio</h1>
            </div>
          </div>
          <p className="intro-paragraph">
          Welcome to Nicolas Delmastro's portfolio—a showcase of expertise in cybersecurity and software engineering for students and professionals alike.
          </p>
          <div className="social-media-icons">
            <a href="https://www.facebook.com/jy0ji/">
             <img src="./images/ficon.webp" alt="Facebook" />
            </a>
            <a href="https://www.github.com/nydelmastro">
             <img src="./images/git.png" alt="GitHub" />
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </main>

        <div className="articles-card">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              date={article.date}
              title={article.title}
              content={article.content}
              link={article.link}
            />
          ))}
        </div>
      </div>

      <div className="right-side">

      <SignupWidget
        title={'Stay up to date'}
        content={'Get notified when I publish something new, and unsubscribe at any time.'}
      />
        {/* WorkWidget component */}
        <WorkWidget
          title="My Work Experience"
          content="Check out my previous work experiences."
          experiences={experiences}
        />
    <SkillsWidget
              title={"Skills"}
              content={"With proficiency in HTML, CSS, and JavaScript, I possess the essential skills to craft visually appealing and interactive web pages. My expertise enables me to create engaging online experiences for users."}
              skills={skills}
      />

      </div>

    </div>

  );

};


export default Home;

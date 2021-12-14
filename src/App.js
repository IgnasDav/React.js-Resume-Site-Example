import "./App.css";
import Pill from "./components/pill";
import Separator from "./components/separator";
import "./App.css";
import Header from "./components/header";
import ContentBox from "./components/content-box";
import React from "react";
import Experience from "./components/experience";
import Contacts from "./components/contacts";
import data from "./data";
import SocialList from "./components/social-list";
function App() {
  const [language, setLanguage] = React.useState("en");
  const {
    links,
    about,
    education,
    personalSkills,
    technicalSkills,
    jobExperience,
    contacts,
  } = data[language];
  return (
    <div className="app">
      <Header language={language} setLanguage={setLanguage} />
      <main className="main">
        <section className="section">
          <ContentBox flexS title={links.title}>
            {/* Make this list into component*/}
            <SocialList content={links.items}></SocialList>
          </ContentBox>
          <ContentBox flexM title={about.title}>
            <p>{about.body}</p>
          </ContentBox>
        </section>
        <section className="section">
          <ContentBox flexS title={education.title}>
            {education.items.map(({ title, period, diploma }, i, arr) => (
              <React.Fragment key={i}>
                <div className="school-info">
                  <p>{title}</p>
                  <p>{period}</p>
                  <p>{diploma}</p>
                </div>
                {arr.length - 1 !== i && <Separator isShort />}
              </React.Fragment>
            ))}
          </ContentBox>
          <ContentBox flexS pillBox title={personalSkills.title}>
            {personalSkills.items.map(({ title, color }) => (
              <Pill color={color}>{title}</Pill>
            ))}
          </ContentBox>
          <ContentBox flexS pillBox title={technicalSkills.title}>
            {technicalSkills.items.map(({ color, title }) => (
              <Pill color={color}>{title}</Pill>
            ))}
          </ContentBox>
        </section>
        <section className="section">
          <ContentBox flexS title={jobExperience.title}>
            <div className="content-box__content job-experience">
              {jobExperience.items.map(
                ({ title, body, company, period, achievements }, i) => (
                  <Experience
                    title={title}
                    company={company}
                    period={period}
                    achievements={achievements}
                    key={i}
                  >
                    {body}
                  </Experience>
                )
              )}
            </div>
          </ContentBox>
        </section>
      </main>
      <footer className="footer">
        <Separator />
        <div className="contacts">
          {contacts.items.map(({ title, content }) => (
            <Contacts title={title} content={content}></Contacts>
          ))}
        </div>
      </footer>
    </div>
  );
}
export default App;

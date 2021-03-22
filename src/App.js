import './App.css';
import styled from 'styled-components';
import gitHubIcon from './github.png';
import emailIcon from './email.png';

const ResumeWrapper = styled.div`
  margin 2rem 5rem ;
  padding: 2rem;
  @media only screen and (max-width: 550px) {
    margin 1rem 0.5rem;
    padding: 1rem 0.5rem;
  }
  border-radius: 0.5rem;
  opacity: 90%;
  background-image: linear-gradient(purple, #e66327, purple);
  font-family: monospace;
`

const Description = styled.div`
  padding: 0rem 1.7rem;
  font-size: 1rem;
  padding-bottom: 1rem;
  letter-spacing: 0.20rem;
  opacity: 0;
  animation: fadeIn ease 4s;
  animation-fill-mode: forwards;
  animation-delay: 3s;

  @media only screen and (max-width: 550px) {
    letter-spacing: 0rem;
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 700px) {
    display: block;
  }
`

const ResumeBody = styled.div`
  font-size: 1rem;
  padding: 0rem 1.7rem;
  opacity: 0;
  animation: fadeIn ease 4s;
  animation-fill-mode: forwards;
  animation-delay: 3s;
  >li {
    padding-left: 2rem;
    text-indent: -1.3rem;

  }

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
`

const Heading = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 1rem;
  @media only screen and (max-width: 550px) {
    font-size: 1.25rem;
  }
`

const SubHeading = styled.div`
  font-size: 1rem;
  font-weight: bold;
  padding-top: ${props => props.noPadding ? 0 : "1rem"};
`

const Caret = styled.div`
  float: left;
  padding-right: 0.5rem;
  font-size: 1.75rem;
  @media only screen and (max-width: 550px) {
    font-size: 1.25rem;
    padding: 0 0.5rem;
  }
`

const Title = styled.div`
  font-size: 1.75rem;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  border-right: 1.25rem transparent solid;
  @media only screen and (max-width: 550px) {
    border-right: 1rem transparent solid;
    font-size: 1.25rem;
    max-width: 12rem;
    font-weight: bold;
  }
  animation: animated-text 1s steps(12,end) 1s 1 normal both,
             animated-cursor 700ms steps(29,end) 5;

  @keyframes animated-text{
    from{width: 0;}
    to{width: 16.5rem;}
  }

  @keyframes animated-cursor{
    from{border-color: orange;}
    to{border-color: transparent);}
  }
`

const IconLinks = styled.img`
  width: 2.5rem;
  margin: 0.75rem 2rem 0 0  ;
  opacity: 0;
  animation: fadeIn ease 4s;
  animation-fill-mode: forwards;
  animation-delay: 3s;

  @media only screen and (max-width: 700px) {
    width: 1.2rem;
    padding: 0 0 0 1.5rem ;
    margin: 0 ;
  }

  &:hover {
    filter: invert(0%) sepia(100%) saturate(6722%) hue-rotate(262deg) brightness(106%) contrast(124%);
  }
`

function App() {
  return (
    <div className="App-body">
      <ResumeWrapper>
        <Flex>
          <div>
            <Caret>></Caret>
            <Title>
              Leila Elkhalidy
            </Title>
            <Description>Full Stack Developer</Description>
          </div>
          <div>
            <a href="https://github.com/luminaire-dev" target="_blank" rel="noopener noreferrer">
              <IconLinks src={gitHubIcon} alt="Git Hub" href="https://github.com/luminaire-dev" />
            </a>
            <a href="mailto:leila.elkhalidy@gmail.com">
              <IconLinks src={emailIcon} alt="Git Hub" />
            </a>
          </div>
        </Flex>
        <ResumeBody>
            <Heading>Hi there, I'm Leila. 👋</Heading>
            <p>I create simple, elegant solutions for complex problems. With over 8 years of development experience -
            I beleive code is art just as much as it is science. My ideal solution to both front-end and back-end problems,
            lies at the intersection between design and functionality.
            I'm currently working at ATB Financial, writting web and mobile banking apps in React, and scalable, RESTful
            microservices in Express. As the Lead Developer on the Business Banking Mobile project, I’m continuously striving
            to improve code quality, testing coverage, and delivery cycles to better serve our customers. I’m naturally curious,
            I love working on teams, and I’m one of those weird people who puts ketchup on their poutine. 🤭</p>

            <Heading>Tech Stack 📚</Heading>
            <p>JavaScript/ES6, React, Redux, Bable, Webpack, Node.js, Express, Cordova, JSON, XML, CSS, SOAP, REST, Json Web Tokens (JWT),
            Python, Pytes, Jest, Experitest (Mobile test automation), MongoDB, Java, Git, GitLab, Bitrise, Jenkins, Bitbucket, auth0</p>

            <Heading>Development Practices 👩🏻‍💻</Heading>
            <p>Agile/SCRUM/Kanban, Trunk Based Development, Continuous Integration (CI), Continuous Deployment (CD), Feature Toggling,
            Microservice Architecture, Unit Testing, Test Automation, Paired Programming, Code Reviews, Test Driven Development</p>

            <Heading>Experience 👔</Heading>
            <SubHeading>Senior Software Developer, ATB Financial</SubHeading>
            <SubHeading noPadding>May 2013 - Present, Edmonton AB</SubHeading>

            <h4> Business Banking Mobile  - Lead Developer, 2018 - present </h4>
              <li>Converted ATB’s Business Online platform into an iOS and Android app using Cordova</li>
              <li>Developed RESTful APIs using Express and microservice architecture</li>
              <li>Developed biometric and 2FA authentication flows using JWT and Auth0</li>
              <li>Developed in-app remote cheque deposits (leveraging native device camera and image analysis technologies)</li>
              <li>Built unit test in Jest and React Testing Library</li>
              <li>Built mobile e2e tests - using Selenium and Experitest - running on physical devices stored in the cloud</li>
              <li>Built API test using Pytest</li>
              <li>Configured CI/CD pipelines in GitLab and BitRise</li>
              <li>Developed responsive, accessible and reusable react components</li>
              <li>Performed diligent and constructive code reviews</li>
              <li>Mentored and provided knowledge transfers to new devs</li>

            <h4>Online Banking, 2017 - 2018 </h4>
              <li>Full stack development of a React web applications using Redux, Babel, Webpack, ES6, and Node.js</li>
              <li>Developed responsive, accessible, and reusable react components</li>
              <li>Developed e-transfer, bill payment, and account summary modules</li>
              <li>Developed RESTful APIs using Express and microservice architecture</li>
              <li>Built unit test in Jest and React Testing Library</li>
              <li>Built e2e tests in Selenium</li>
              <li>Built API test using Pytest</li>
              <li>Configured CI/CD pipelines in GitLab and BitRise</li>

            <h4>Retail Banking Mobile, 2016 - 2017</h4>
              <li>Development of ATB's retail banking mobile and web platform using HTML5 and Cordova</li>
              <li>Developed remote cheque deposit, e-transfer, bill payment, and account summary modules</li>
              <li>Configured CI/CD pipelines in Jenkins</li>
              <li>Tech Used: HTML5, CSS, Bootstrap, SVN, Jenkins, SAP Mobile Platform, SOAP</li>

            <h4>ATB Flexible Pension Plan, 2015 - 2016</h4>
            <li>Developed an internal .NET app to allow ATB team members to update or make changes to their pension</li>
            <li>Tech Used: C#, ASP.NET, SQL Server, SOAP, SVN, NUnit</li>

            <h4>ATB Customer Service Application (CSA), 2013 - 2015</h4>
            <li>Development and operational support of an internal desktop app used by our customer service teams in ATB branches</li>
            <li>Tech Used: Java (Swing), Object Oriented Programming (OOP), Eclipse, DB2, Axis2, SOAP, J2EE, SVN, CVS, Apache Ant</li>

            <Heading>Education 👩🏻‍🎓</Heading>
            <h4>Digital Media and IT Diploma - Northern Alberta Institute of Technology (NAIT)</h4>

            <Heading>Community 🌳</Heading>
            <h3>ATB Engineering Culture Excellence Award Winner, 2021</h3>
            <p>Awarded to ATB team members who have gone above and beyond to exemplify ATB’s Engineering Culture.</p>

            <h3>ATB Hackday - Fan Favourite Winner, 2019</h3>
            <p>Developed a plugin that standardizes APIs creation at ATB, speeding up dev time and improving code quality and logging.</p>

            <h3>HackEDbeta at Startup Edmonton, 2017</h3>
            <p>Volunteered as a Mentor at this beginner-friendly hackathon.</p>

            <h3>Apple Worldwide Developers Conference (WDDC), 2017</h3>
            <p>Attended sessions on Apple Pay, Swift, Accessibility, Core ML, and AR.</p>

            <h3>Google Cloud Relay, 2018</h3>
            <p>In this 6 hours coding relay challenge, I wrote a Google Cloud hosted React app that provides a localized ski condition forecast.</p>
        </ResumeBody>
      </ResumeWrapper>
    </div>
  );
}

export default App;

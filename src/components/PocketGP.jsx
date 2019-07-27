import React from 'react';
import ProjectScrollBanner from './ProjectScrollBanner';

const PocketGP = ({ theme }) => {
  return <div>
  <ProjectScrollBanner
    prev={{label: "Portfolio", route: "portfolio"}}
    curr="Pocket GP"
    next={{label: "Hive News", route: "hivenews"}}
  />
  <div className="project-container">
  <div className="project-projectInfo1">
    <p><span className="highlight">Pocket GP</span> was a final graduation project for <span className="highlight">Northcoders</span> (12 week intense coding bootcamp focusing on Javascript).</p>
    <p>We were put into a group of 5 and given 2 weeks to create something that would solve a real world problem. We chose a <span className="highlight">cross platform mobile app</span> aimed at supporting GPs and patients to utilised their appointment times as efficiently as possible. The patient is sent a <span className="highlight">notification</span> each day to keep track of their ailment. They can do this by <span className="highlight">taking a picture and giving some notes.</span> These can then be viewed by the GP therefore giving a more accurate and easy method of how the aiment has progressed while waiting for an appointment.</p>
  </div>
  <div className="project-projectInfo2">
    <p>As a team we wanted to challenge ourselves to learn <span className="highlight">Typescript,</span> write our own <span className="highlight">image recognition</span> and build a cross platform app.</p>
    <p><span className="highlight">It was important to me that the user interface was as simple and user friendly as possible, allowing even those less comfortable with technology full functionality.</span></p>
    <p>We also agreed as a team to work in an <span className="highlight">agile inspired</span> environment, including <span className="highlight">stand-ups</span> every morning and <span className="highlight">stand-downs</span> each night. We would set ourselves targets on what had to be completed that day and during the stand-downs would discuss if any options were no longer viable. As we were a group of 5, we decided to do <span className="highlight">pair programming</span> with the 5th person either working alone or acting as an assist. This person and the pairs were rotated each day to allow each of us the opportunity to work on everything and get a full feel of the project.</p>
  </div>
  <div className="project-projectInfo3">
    <p>I set up <span className="highlight">wireframes</span> on the first day with a list of features to maintain <span className="highlight">consistancy in styling and features.</span> I found that these methods really aided with staying on track with the end product and meant that when I came to completing the styling at the end, the general layout was already complete.</p>
    <p><span className="highlight">The largest challenge was the image recognition. We used an npm package called get-pixels to fetch the rgb values from each pixel. We then split the image into grids and returned the overall rgb value as well as each grid value. This data was then plotted onto tables and compared with the previous image data. If there was a 10% increase between pictures then the GP would be informed.</span></p>
  </div>
  <div className="project-projectInfo4"> 
    <p>The back-end tech stack included <span className="highlight">Postgress</span> (for our relational database in SQL), <span className="highlight">Express</span> (in Typescript) and <span className="highlight">Crypto</span> encryption (in Typescript). We tested using <span className="highlight">Mocha, Chai and Supertest.</span></p>
    <p>For the front-end we used <span className="highlight">React Native</span> (in Typescript) as it was the best option to get the app up and running quickly and working on both Android and iOS. We used <span className="highlight">Expo</span> as we found that we could run it through the QR code with both devices at the same time, allowing us to check consistancy across devices. For our <span className="highlight">direct messaging</span> between the GP and patient we used <span className="highlight">Firebase</span> as we were also using it to store our images. We chose to store our images using firebase for scaleability and security.</p>
  </div>
  <div className="project-projectInfo5">
    <p>For version control we used <span className="highlight">GitHub</span> and were strict with our linting settings. Git merges had to be completed in a pair and a review was necessary to merge to the dev or master branch, <span className="highlight">protecting the integrity of our code.</span> I set this up on the first day as was the most familiar with GitHub.</p>
    <p><span className="highlight">We chose to complete the project in Typescript as we wanted the code to be clean, scaleable and robust. As Typescript is a superset of Javascript, I found it both familiar and alien. I am personally glad we completed it in Typescript as I believe we avoided many bugs and code conflicts in doing so. This was our first time working in a team (above 2) and therefore found the stricter structure of Typescript invaluble.</span></p>
  </div>
  <div className="project-projectInfo6">
    <span className="highlight space-below">Feature List:</span>
    <ul>
      <li><span className="highlight">Encryption</span> (Using Crypto)</li>
      <li><span className="highlight">Image Recognition</span> (Built in Javascript)</li>
      <li><span className="highlight">Camera</span> (Taken via phone camera then stored in Firebase)</li>
      <li><span className="highlight">Direct Messaging</span> (Using Firebase)</li>
      <li><span className="highlight">Charts</span> (Plotted using rgb values from Image Recognition)</li>
      <li><span className="highlight">Notifications</span> (Using Expo)</li>
      <li><span className="highlight">GP Calendar</span></li>
    </ul>
  </div>
    <img
      src={require("../images/pocketGP-logo.png")}
      alt="pocket GP logo"
      className="project-images project-image1"
    />
    <img
      src={require("../images/pocketGP-notifications.jpg")}
      alt="pocket GP notifications"
      className="project-images project-image2"
    />
    <img
      src={require("../images/pocketGP-standups.jpg")}
      alt="morning stand up"
      className="project-images project-image3"
    />
    <img
      src={require("../images/pocketGP-wireframes.jpg")}
      alt="pocketGP wireframes"
      className="project-images project-image4"
    />
    <img
      src={require("../images/pocketGP.png")}
      alt="patient home page"
      className="project-images project-image5"
    />
    <img
      src={require("../images/graduation.jpg")}
      alt="northcoder graduation"
      className="project-images project-image6"
    />
  </div>
  <ProjectScrollBanner
    prev={{label: "Portfolio", route: "portfolio"}}
    curr="Pocket GP"
    next={{label: "Hive News", route: "hivenews"}}
  />
</div>
}

export default PocketGP;
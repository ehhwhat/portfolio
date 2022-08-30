import Img1 from "../img/clients/engine/engineGCAS1.jpg";
import Img2 from "../img/clients/engine/engineGCAS2.jpg";
import Img3 from "../img/clients/engine/engineGCAS3.jpg";

const DataCaseEngine = [
  {
    'client': 'Engine UK',
    'role': 'Front End Developer',
    'summary':`
            <div>
                <p>To optimise / improve / tidy up the partially built Front End for a bespoke built GCAS system and a themeable system built on edX.</p>
            </div>`,
    'detailed':`
            <div>
                <p>Worked on optimizing the Front End for both the bespoke GCAS (Global Communications Academy System) Booking System and the themable edX build. The edX system allows staff to book onto online learning courses (e.g Digital Communications) both in the UK or abroad. The GCAS booking system was created to allow Cabinet Office staff to create new courses, track users, track completion etc. Built using Bootstrap for the Front End with a mix of HTML, CSS (SASS) and JavaScript within an Agile working environment.</p>
                <p>The biggest issue with the build was that the Front End had been started before I arrived to try and optimise and tidy up, I also didnt have access to Bootstraps src files in order to make a lot of the updates and for anything required within the edX system we couldn't very easily update the HTML, so the approach was to do as much as possible with the existing markup.</p>
                <p>Also created HTML emails for users who sign up for a course, complete a course, unenroll etc, created through Mailchimp, as well as a PDF certificate which needed to be printable.</p>
            </div>`,
    'other': {
      'dates':'September 2021 - December 2021. 4months',
      'location':'Remote / London',
      'link': {
        'url':'https://www.enginegroup.com/uk/',
        'text':'Engine UK'
      }
    },
    'tech': {
      'handlebars': false,
      'foundation': false,
      'bootstrap': true,
      'grunt': false,
      'gulp': false,
      'firebase': false,
      'react': false,
      'docker': true,
      'drupal': false,
      'git': true,
      'github': true
    },
    'images': {
      'image1':Img1,
      'image2':Img2,
      'image3':Img3
    }
  }
];

export default DataCaseEngine; // Don’t forget to use export default!

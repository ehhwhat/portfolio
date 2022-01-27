import Img1 from "../img/clients/icaew/icaew1.jpg";
import Img2 from "../img/clients/icaew/icaew2.jpg";
import Img3 from "../img/clients/icaew/icaew3.jpg";

const DataCaseICAEW1 = [
  {
    'client': 'ICAEW',
    'role': 'Front End Developer',
    'summary':`
            <div>
                <p>Front end development on 2 large projects, to be used and seen across the whole of the ICAEW website, Universal Header and Unified Search.</p>
            </div>`,
    'detailed':`
            <div>
                <p>Worked on 2 major projects for new Universal Header and Unified Search. Universal Header aim was to ensure all ICAEW sites had the same header/branding to make them more uniform. Some of these sites were in house and some external, also a mix of Sitecore CMS implementations and static Dot Net websites. My role was to build all the content components and modules to appear inside the header dropdowns, to create all the animation functionality and navigation between the header levels. This was a massive project which took months to build and implement, the header was incredibly complex in places and there were two front end devs working on different parts which then required integration, this then needed to be added to Sitecore.</p>
                <p>Unified Search was the integration project for Coveo site search within Sitecore CMS, the also linked to Universal Header as one of the dropdowns would be using Coveo, I also had to build the new components and modules required for updated search results and no results page.</p>
                <p>As part of my role here I also improved how the team used HTML templating which meant they could reuse a lot more code than before and could stop copying and pasting pages for even the slightest of tweaks. I also worked on a lot of documentation for both of these major projects to help with build and implementation.</p>
                <p>Skills used included standard HTML markup (using Foundation framework) alongside CSS (SASS with BEM), TFS was the chosen source control system and we used Gulp for task automation.</p>
            </div>`,
    'other': {
      'dates':'August 2018 - December 2018. 5months',
      'location':'Remote / Milton Keynes',
      'link': {
        'url':'https://www.icaew.com/',
        'text':'ICAEW'
      }
    },
    'tech': {
      'handlebars': false,
      'foundation': true,
      'bootstrap': false,
      'grunt': false,
      'gulp': true,
      'firebase': false,
      'react': false,
      'docker': false,
      'drupal': false,
      'git': false,
      'github': false
    },
    'images': {
      'image1':Img1,
      'image2':Img2,
      'image3':Img3
    }
  }
];

export default DataCaseICAEW1; // Don’t forget to use export default!

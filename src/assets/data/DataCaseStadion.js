import Img1 from "../img/clients/stadion/stadionHomepageTop.jpg";
import Img2 from "../img/clients/stadion/stadionHomepageBottom.jpg";
import Img3 from "../img/clients/stadion/stadionDynamicContentWidget.jpg";

const DataCaseStadion = [
  {
    'client': 'Stadion',
    'role': 'Front End Developer',
    'summary':`
            <div>
                <p>Updated existing modules and components as well as creating brand new ones to use across the Paris Saint-Germain F.C. website, alongside this fixing bugs and also implemented a site wide custom Google Tracking plan.</p>
            </div>`,
    'detailed':`
            <div>
                <p>My role was to create the markup and styles for new modules supporting existing pages and newer ones. We used Handlebars for markup templating and SCSS for CSS pre processing. A number of components/modules required JS to be written or updated with a mix of vanilla JS and jQuery being used.</p>
                <p>I also helped to implement a huge tracking plan across pages and specific modules to hook into Google Analytics Datalayer, allowing the team to track when promotions were seen, cards were clicked, buttons were used etc.</p>
            </div>`,
    'other': {
      'dates':'May 2022 - August 2022. 4 months',
      'location':'Remote / London',
      'link': {
        'url':'https://www.stadion.io/',
        'text':'Stadion'
      }
    },
    'tech': {
      'handlebars': true,
      'foundation': false,
      'bootstrap': false,
      'grunt': false,
      'gulp': true,
      'firebase': false,
      'react': false,
      'docker': false,
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

export default DataCaseStadion; // Don’t forget to use export default!

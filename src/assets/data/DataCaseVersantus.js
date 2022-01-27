import Img1 from "../img/clients/versantus/versantus.jpg";
import Img2 from "../img/clients/versantus/audleyvillages.jpg";
import Img3 from "../img/clients/versantus/allegracare.jpg";

const DataCaseEngine = [
  {
    'client': 'Versantus',
    'role': 'Front End Developer',
    'summary':`
            <div>
                <p>Worked across a number of the agency's client websites built using Drupal, developing new components and modules to be used by clients with HTML, CSS and JS as well as refactoring or fixing older code, ensuring better coding and accessibility standards along the way.</p>
            </div>`,
    'detailed':`
            <div>
                <p>I was brought into the team following the departure of another Front End Developer, this meant I was working across a number of different projects, some recently built using the latest techniques and latest version of Drupal. Other projects were a little out of date which meant having to be careful with the fixes and the code I was putting in place. This also meant having to work with a large number of people in a short space of time as each project had its own Front End Developer, a Drupal Developer, a different Project Manager etc.</p>
                <p>I always made sure to test my work across multiple browser and devices and due to the short nature of the contract to add comments to any work I did for future developers to pick up and continue with.</p>
                <p>This role was different to any I had done before because as a Front End Developer I had to have a locally running version of the back end Drupal setup in order to write my code, this meant a lot of setup was required for each project (Docker) but also meant there was no need for an integration stage for the Back End Developers who had been given a load of Front End code.</p>
            </div>`,
    'other': {
      'dates':'August 2021 - September 2021. 2months',
      'location':'Remote / Oxford',
      'link': {
        'url':'https://www.versantus.co.uk/',
        'text':'Versantus'
      }
    },
    'tech': {
      'handlebars': false,
      'foundation': false,
      'bootstrap': false,
      'grunt': false,
      'gulp': false,
      'firebase': false,
      'react': false,
      'docker': true,
      'drupal': true,
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

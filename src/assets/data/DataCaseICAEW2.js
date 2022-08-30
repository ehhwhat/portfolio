import Img1 from "../img/clients/icaew/icaew21.jpg";
import Img2 from "../img/clients/icaew/icaew22.jpg";
import Img3 from "../img/clients/icaew/icaew23.jpg";

const DataCaseICAEW2 = [
  {
    'client': 'ICAEW',
    'role': 'Front End Developer',
    'summary':`
            <div>
                <p>My task was to upgrade the current website to the latest version of the Foundation Framework. As part of this the Design team were redesigning the website from the ground up and my role was to support that process and development.</p>
            </div>`,
    'detailed':`
            <div>
                <p>The current website was now using an out of date Foundation Framework version and built on tech a few years out of date. My role was to set up and build the newly designed website using the latest Foundation Framework version but to also install a new way of working/building front end code based around Componentization. This meant each item we needed (templates, layouts, components etc) were all siloed and could be built, updated, removed etc in isolation making for a much safer front end development environment.</p>
                <p>This change led to new items being delivered to the Content Editors on a more regular basis, it meant testing could be completed quicker and easier, developers could work alongside each other a lot easier due to less to no code conflicts as well.</p>
                <p>A secondary part of this contract was to document this new way of working and to document the new visual system that the designers had created.</p>
            </div>`,
    'other': {
      'dates':'April 2019 - December 2020. 1yr 9months',
      'location':'Remote / Milton Keynes',
      'link': {
        'url':'https://www.icaew.com/',
        'text':'ICAEW'
      },
      'link2': {
        'url':'https://ux.icaew.com/index.html',
        'text':'UX ICAEW'
      }
    },
    'tech': {
      'handlebars': true,
      'foundation': true,
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

export default DataCaseICAEW2; // Don’t forget to use export default!

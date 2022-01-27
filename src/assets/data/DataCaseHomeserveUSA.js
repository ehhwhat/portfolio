import Img1 from "../img/clients/homeserveusa/homeserveusa1.jpg";
import Img2 from "../img/clients/homeserveusa/homeserveusa2.jpg";
import Img3 from "../img/clients/homeserveusa/homeserveusa3.jpg";

const DataCaseHomeserveUSA = [
  {
    'client': 'Homeserve USA',
    'role': 'Front End Developer',
    'summary':`
            <div>
                <p>Working for Global Digital Team on specific projects across territories such as UK, USA and Spain.</p>
            </div>`,
    'other': {
      'dates':'April 2016 - December 2017. 1year 9months',
      'location':'London',
      'link': {
        'url':'https://www.homeserve.com/en-us/?ncr=1',
        'text':'Homeserve USA'
      }
    },
    'tech': {
      'handlebars': true,
      'foundation': false,
      'bootstrap': true,
      'grunt': false,
      'gulp': false,
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

export default DataCaseHomeserveUSA; // Don’t forget to use export default!

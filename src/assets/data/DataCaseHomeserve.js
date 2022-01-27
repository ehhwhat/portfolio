import Img1 from "../img/clients/homeserve/homeserve1.jpg";
import Img2 from "../img/clients/homeserve/homeserve2.jpg";
import Img3 from "../img/clients/homeserve/homeserve2.jpg";

const DataCaseHomeserve = [
  {
    'client': 'Homeserve',
    'role': 'Front End Developer',
    'summary':`
            <div>
                <p>To wireframe (Axure), design (Photoshop) and build (HTML, CSS, Jquery) prototypes and front end code to be used in conjunction with SiteCore CMS on HomeServe.com or their company Intranet.</p>
            </div>`,
    'other': {
      'dates':'May 2014 - April 2016. 2years',
      'location':'London',
      'link': {
        'url':'https://www.homeserve.com/',
        'text':'Homeserve'
      }
    },
    'tech': {
      'handlebars': false,
      'foundation': false,
      'bootstrap': true,
      'grunt': true,
      'gulp': false,
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

export default DataCaseHomeserve; // Don’t forget to use export default!

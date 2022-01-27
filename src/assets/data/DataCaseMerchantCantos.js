import Img1 from "../img/clients/merchantcantos/merchantcantos1.jpg";
import Img2 from "../img/clients/merchantcantos/merchantcantos2.jpg";
import Img3 from "../img/clients/merchantcantos/merchantcantos3.jpg";

const DataCaseMerchantCantos = [
  {
    'client': 'Merchant Cantos',
    'role': 'Front End Developer',
    'summary':`
            <div>
                <p>Creation and updates to end of year reports and accounts for a number of top brands. Skills used included standard HTML markup alongside CSS (SASS), TFS was the chosen source control system.</p>
            </div>`,
    'other': {
      'dates':'February 2019 - March 2019. 2months',
      'location':'London',
      'link': {
        'url':'https://www.merchantcantos.com/',
        'text':'MerchantCantos'
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

export default DataCaseMerchantCantos; // Don’t forget to use export default!

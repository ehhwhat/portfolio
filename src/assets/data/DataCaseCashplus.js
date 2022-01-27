import Img1 from "../img/clients/cashplus/cashplus1.jpg";
import Img2 from "../img/clients/cashplus/cashplus2.jpg";
import Img3 from "../img/clients/cashplus/cashplus2.jpg";

const DataCaseCashplus = [
  {
    'client': 'Cashplus',
    'role': 'UI Developer',
    'summary':`
            <div>
                <p>To build UI's for 2 new large projects for future customer interactions. Standard HTML, CSS and JS within a DotNet world, sometimes working with KnockoutJS or Angular.</p>
            </div>`,
    'detailed':`
            <div>
                <p>Front End UI for Transaction Enrichment project. The project aim was to create an improved view of transactions which included more merchant data, categorisation, tagging, spending insights etc. My role was to take the existing Front End for the less rich versions of these pages (statements and details) and add new markup and styles to accommodate the new and improved data we would be showing. A whole new UI for details was needed as well as new pages for Categorisation Management and Spending Insights.</p>
                <p>Skills used included standard HTML markup (using Bootstrap framework) alongside CSS (LESS), JS and jQuery, SVN was the chosen source control and all was built using Visual Studio. Working alongside BA, PM, Back end devs (both internal and external).</p>
            </div>`,
    'other': {
      'dates':'March 2018 - August 2018. 6months',
      'location':'London',
      'link': {
        'url':'https://www.cashplus.com/',
        'text':'Cashplus'
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

export default DataCaseCashplus; // Don’t forget to use export default!

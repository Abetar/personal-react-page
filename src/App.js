import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Studies } from './Components/studies.js'
import { Job } from './Components/jobs';
import { Portfolio, PortfolioSpecial } from './Components/portfolio';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-styles sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.abrahamalexis.com">
            <img src={require("./Images/abraham-logo.png")} width="45px" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#studies">Studies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#portfolio">Technical Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* JOB SECTION */}
      <div className='container pt-4' id='experience'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2 className='text-center'>Experience</h2>
          </div>
        </div>
        <div className='row'>
          <Job
            position='Web Tools Operations'
            initMonth='Jan'
            initYear='2019'
            FinalDateMessage='Present'
            company='NXP Semiconductors'
            description='Develop applications and support internal processes with several techonolgies; being the Part Data Owner back-up; and helping in operational activities.'
          />
          <Job
            position='Web Publisher'
            initMonth='Aug'
            initYear='2019'
            FinalDateMessage='Dec 2021'
            company='NXP Semiconductors'
            description='Develop and edit web pages across nxp.com, customer support and develop web tools for internal processes.'
          />
          <Job
            position='Fullstack Developer'
            initMonth='Feb'
            initYear='2019'
            FinalDateMessage='Aug 2019'
            company='Busmen'
            description='Develop web tools to enhance internal processes, IT support and analyze software requirements to solve specific needs.'
          />
          <Job
            position='Frontend Developer Intern'
            initMonth='Aug'
            initYear='2017'
            FinalDateMessage='Apr 2018'
            company='IBM'
            description="Development of web applications using API's, relacional databases and blockchain technology."
          />
        </div>
      </div>
      {/* STUDIES SECTION */}
      <div className='gray-container'>
        <div className='container pt-4 pb-4' id='studies'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className='text-center'>Studies</h2>
            </div>
          </div>
          <div className='row'>
            <div className="col-lg-3 offset-lg-3 col-md-6 col-sm-12">
              <Studies
                career="Biomedical Engineer"
                degree="Bachelor Degree"
                school="Universidad Autonoma de Guadalajara"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <Studies
                career="Computer Science"
                degree="Master Degree"
                school="Universidad Autonoma de Guadalajara"
              />
            </div>

          </div>
        </div>
      </div>

      {/* PORTFOLIO */}
      <div>
        <div className='container pt-4 pb-4' id='portfolio'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className='text-center'>
                Technical Portfolio
              </h2>
            </div>
          </div>
          <div className='row'>
            <Portfolio 
              url = 'https://www.abrahamchoel.com'
              title = "Abraham Choel's Page"
              desc = 'A web resume and personal repository.'
            />
            <Portfolio 
              url = 'https://abetar.github.io/arrazate-web-page/'
              title = "Arrazate's Jewerly Page"
              desc = 'General mockup for a jewerly starting brand.'
            />
            <Portfolio 
              url = 'https://abrahamalexis.com/ruleta/'
              title = "Roulette"
              desc = 'A simple web app game roulette.'
            />
            <Portfolio 
              url = 'https://www.ulisessegovia.com/'
              title = "Ulises Segovia´s Web Page"
              desc = 'A web resume and professional portfolio.'
            />
            <PortfolioSpecial
              url = 'https://abetar.github.io/personal-page-react/'
              title = "A react version of this page"
              desc = 'This is a mirror site made using React.'
            />
            <Portfolio
              url = 'https://abetar.github.io/FreeCodeCampTestimonios/'
              title = "My first React App"
              desc = 'This is a mirror component of freeCodeCamp page.'
            />
            <Portfolio
              url = 'https://www.grupocora.org'
              title = "Grupo Cora"
              desc = 'This is landing page of a civil association to promote the recreational use of weed.'
            />
            <Portfolio
              url = 'https://abetar.github.io/Digital_product/'
              title = "Digital Product"
              desc = 'This is one of my first web pages created following a Platzi Web Development Course.'
            />
            <Portfolio
              url = 'https://play.google.com/store/apps/details?id=app.agsolutions.abraham.salariomnimomx&hl=es_MX&gl=US'
              title = "Salario Minimo Android App"
              desc = 'A calculator to calculate your salary based on your worked days in the minimun salary in 2019.'
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

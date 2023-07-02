import './App.css';
import './Animations.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Studies } from './Components/studies.js'
import { Job } from './Components/jobs';
import { Portfolio, PortfolioSpecial, PortfolioMid } from './Components/portfolio';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-styles sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.abrahamalexis.com">
            <img src={require("./Images/abraham-logo.png")} width="45px" alt="" />
          </a>
          <button className="navbar-toggler" id="navbar-toggle-container" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#portfolio">Extra Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* OVERLAY SECTION */}
      <div className='container'>
        <div className='row fadeInUp' id='rowOverlay'>
          <div className='col-lg-4 offset-lg-2 col-md-12 col-sm-12 text-center' id='container-image'>
            <img src={require('./Images/me.jpeg')} id='image-me'/>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12 text-center' id='container-image'>
            <h1> 
              Hi, I'm Abraham
            </h1>
            <h2>
              Let's Work Together
            </h2>
            <div>
              <a href = 'mailto:alexisgomez_96@hotmail.com' className='btn btn-outline-dark form-control'>
                <strong>
                  Contact me
                </strong>
              </a>
              <div className='container mt-2'>
                <div className='row'>
                  <div className='col-md-6 col-sm-4'>
                    <a href='https://www.linkedin.com/in/abraham-alexis-g%C3%B3mez-arrazate-a48944138/' target='_blank'>
                      <img src={require('./Images/linkedin.png')} className='images-social'/>
                    </a>
                  </div>
                  <div className='col-md-6 col-sm-4'>
                    <a href='https://github.com/Abetar' target='_blank'>
                      <img src={require('./Images/githubIcon.png')} className='images-social'/>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JOB SECTION */}
      <div className='container fadeInUp pt-4' id='experience'>
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
      <div className='gray-container fadeInUp'>
        <div className='container pt-4 pb-4' id='studies'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className='text-center'>Studies</h2>
            </div>
          </div>
          <div className='row'>
            <div className="col-lg-3 offset-lg-3 col-md-6 col-sm-12 studiesConteiner">
              <Studies
                career="Biomedical Engineer"
                degree="Bachelor Degree"
                school="Universidad Autonoma de Guadalajara"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 studiesConteiner">
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
        <div className='container pt-4 pb-4 fadeInUp' id='portfolio'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className='text-center'>
                Technical Portfolio
              </h2>
            </div>
          </div>
          <div className='row'>
            <Portfolio
              url='https://www.abrahamchoel.com'
              title="Abraham Choel's Page"
              desc='A web resume and personal repository.'
            />
            <Portfolio
              url='https://abetar.github.io/arrazate-web-page/'
              title="Arrazate's Jewerly Page"
              desc='General mockup for a jewerly starting brand.'
            />
            <Portfolio
              url='https://abrahamalexis.com/ruleta/'
              title="Roulette"
              desc='A simple web app game roulette.'
            />
            <Portfolio
              url='https://www.ulisessegovia.com/'
              title="Ulises Segovia´s Web Page"
              desc='A web resume and professional portfolio.'
            />
            <Portfolio
              url='https://abetar.github.io/FreeCodeCampTestimonios/'
              title="My first React App"
              desc='This is a mirror component of freeCodeCamp page.'
            />
            <Portfolio
              url='https://www.grupocora.org'
              title="Grupo Cora"
              desc='This is landing page of a civil association to promote the recreational use of weed.'
            />
            <Portfolio
              url='https://abetar.github.io/Digital_product/'
              title="Digital Product"
              desc='This is one of my first web pages created following a Platzi Web Course.'
            />
            <Portfolio
              url='https://callateytomamidinero.com/'
              title="Callate Y Toma Mi Dinero"
              desc='This is a E-Commerce Web Page made with Wordpress and Elementor.'
            />

          </div>
        </div>
      </div>

      {/* EXTRA PORTFOLIO */}
      <div className='gray-container fadeInUp'>
        <div className='container pt-4 pb-4' id='extraPortfolio'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className='text-center'>
                Extra Portfolio
              </h2>
              <p className='text-center'>
                This portfolio are out of my main scope (Web Development) but I really like to learn several new things 😃.
              </p>
            </div>
          </div>
          <div className='row'>
            <PortfolioMid
              url='https://play.google.com/store/apps/details?id=app.agsolutions.abraham.salariomnimomx&hl=es_MX&gl=US'
              title="Salario Minimo Android App"
              desc='A calculator to calculate your salary based on your worked days in the minimun salary in 2019.'
            />
            <PortfolioMid
              url='https://abrahamalexis.com/designPortfolio.html'
              title="Design Portfolio"
              desc="This is a design portfolio made on iPad using Procreate, I'm new on this field please free to review it."
            />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer-style p-4">
        <div className="col-sm-12 text-center">
            Made with ☕️&nbsp; and&nbsp; ❤️
        </div>
    </footer>
    </div>
  );
}

export default App;

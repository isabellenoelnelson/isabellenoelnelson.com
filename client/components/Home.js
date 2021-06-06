import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <div>
      <div class="background"></div>
    <div class="intro-left">
      <div class="container-fluid full-height">
        <div class="row text-center align-items-center full-height">
          <div class="col">
            <img src="img/profile.png" alt="User avatar" class="avatar" />
            <h1 class="display-6">Isabelle Nelson</h1>
            <p>Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-8 panel-right px-0">
         

          <section class="intro">
            <h1 class="display-4">Hello!</h1>

            <p>
              My name is Isabelle and I am a former agricultural engineer turned software engineer. 
              I graduated from Ohio State University in 2019 with a Bachelor's degree 
              in agricultural engineering. I started working as a hydraulic engineer 
              right out of college, and like many other people, began working from home 
              in March of 2020. This gave me a chance to really evaluate where I was at with my career,
              and I realized that while I was content with what I was doing, I was not passionate about it. 
              If I wanted to be passionate about the work I did, I would need to make a career change. 
              I then remembered how much I enjoyed coding in college and started down the path of self-teaching. 
              From there, I applied to Fullstack Academy, where I graduated from in June 2021. I am looking forward
              to working for a company where I can work as a full stack developer in a challenging and creative environment. 
            </p>
          </section>
          <section className='tech-stack'>
            <h2 className='display-6 mb-5'>My tech stack:</h2>
            <div className='container-fluid'>
              <div className='row gy-5'>
                <div className='col-md-2'><img src='img/apirest.png' width='100px' className='tech'/></div>
                <div className='col-md-2'><img src='img/axios.png' width='100px' className='tech'/></div>
                <div className='col-md-2'><img src='img/babel.png' width='100px' className='tech'/></div>
                <div className='col-md-2'><img src='img/bootstrap.png' width='100px' className='tech'/></div>
                <div className='col-md-2'><img src='img/chai.png' width='100px' className='tech'/></div>
                <div className='col-md-2'><img src='img/css.png' width='100px' className='tech'/></div>
                <div className='col-md-2'><img src='img/express.png' width='100px' className='tech'/></div>
                <div className='col-md-2'><img src='img/git.png' width='100px' className='tech'/></div>
                <div className='col-md-2'><img src='img/heroku.png' width='100px' className='tech'/></div>
                <div className='col-md-2'><img src='img/html.png' width='100px' className='tech'/></div>
                <div className='col-md-2'><img src='img/javascript.png' width='100px' className='tech'/></div>
                <div className='col-md-2'><img src='img/material.png' width='100px' className='tech'/></div>
                <div className='col-md-2'><img src='img/mocha.png' width='100px' className='tech'/></div>
                <div className='col-md-2'><img src='img/node.png' width='100px' className='tech'/></div>
                <div className='col-md-2'><img src='img/postgres.png' width='100px' className='tech'/></div>
                <div className='col-md-2'><img src='img/react.png' width='100px' className='tech'/></div>
                <div className='col-md-2'><img src='img/redux.png' width='100px' className='tech'/></div>
                <div className='col-md-2'><img src='img/victory.png' width='100px' className='tech'/></div>
              </div>

            </div>
          </section>

          <section className="projects">
            <h2 className="display-6 mb-5">My projects:</h2>
            <div className="container-fluid">
              <div className="row gy-5">
                <div className="col-md-6">
                  <a href='https://vizwiz.herokuapp.com'><img
                    src="img/vizwiz.png"
                    alt="Portfolio image"
                    className="img-fluid thumbnail"
                  /></a>
                  
                </div>
                <div className="col-md-6 portfolio">
                  <a href='https://vizwiz.herokuapp.com'><h3>VizWiz</h3></a>
                  <p>VizWiz is a visualization dashboard that allows users to upload CSV files and easily create and customize graphs from this data.</p>
                  <hr />
                  <p>Tech stack: JavaScript, Node, React, Redux, Sequelize, Express, Postgres, MaterialUI, Socket.io  </p>
                </div>
                <hr />
                <div className="col-md-6 portfolio">
                  <a href='https://ftlotpf.herokuapp.com'><h3>For the Love of Theme Park Food</h3></a>
                  <p>For the Love of Theme Park Food is a Yelp clone that focuses on Theme Park eateries in the Orlando Area.</p>
                  <hr />
                  <p>Tech stack: JavaScript, Node, React, Redux, Sequelize, Express, Postgres, Bootstrap, Google Maps API </p>
                </div>
                <div className="col-md-6">
                  <a href='https://ftlotpf.herokuapp.com'>
                  <img
                    src="img/ftlotpf.png"
                    alt="Portfolio image"
                    className="img-fluid thumbnail"
                  />
                  </a>
                </div>
                <hr />
            
                <div className="col-md-6">
                  <a href='https://www.youtube.com/watch?v=bMuh27XRVDU&t=1s'>
                  <img
                    src="img/pep.png"
                    alt="Portfolio image"
                    className="img-fluid thumbnail"
                  />
                  </a>
                </div>
                <div class="col-md-6 portfolio">
                  <a href='https://www.youtube.com/watch?v=bMuh27XRVDU&t=1s'><h3>Sequelize Association Video</h3></a>
                  <p>In this video, I discuss the different types of Sequelize Associations and their use cases.</p>
                </div>
                <hr />
                
              </div>
            </div>
          </section>

          
          <section className="contact">
            <div>
              <h2 className="display-6 mb-5">let's connect!</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-envelope-fill mx-5 mb-2" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>
<a href='mailto:isabellenoelnelson@gmail.com'>isabellenoelnelson@gmail.com</a>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-linkedin mx-5 mb-2" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg>
<a href=' www.linkedin.com/in/isabellenoelnelson'>linkedin.com/in/isabellenoelnelson</a>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-file-person-fill mx-5 mb-2" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"/>
</svg><a href='/documents/isabellenelson.pdf' download>Download My Resume</a>
              
            </div>
            
          </section>

         
        </div>
      </div>
    </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)

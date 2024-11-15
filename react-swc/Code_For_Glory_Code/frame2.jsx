import './frame2.css'
import cfglogo from "images/cfglogo_transparent"
import home_button from "images/home_button.png"

function App() {
  
    return (
    <>
        <nav class="navbar">
            <div class="container-fluid">
              <a href="index">
                  <img class="ps-2 pe-4" height="60" src={cfglogo} alt="Code For Good"/>
              </a>
              <a href="./frame1.html" class="home-button">
                  <img src={home_button} alt="Button Image"/>
              </a>
            </div>
        </nav>

        <div class="text"> 
            Search For Applicant
        </div>
        <div class="input_file"> 
            <input type="text" placeholder="Type in name..."/>
        </div>
    </>
    )
  }
  
export default App
  
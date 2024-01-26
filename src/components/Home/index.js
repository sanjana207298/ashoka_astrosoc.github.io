import { Form, Link } from 'react-router-dom'
import Background from '../../assets/images/bg.jpeg'
import Image from '../../assets/images/Vector.png'
import Email from '../../assets/images/Ellipse 1.png'
import LinkedIn from '../../assets/images/Ellipse 2.png'
import Instagram from '../../assets/images/Ellipse 3.png'
import Slack from '../../assets/images/Ellipse 4.png'
import Logo from '../../assets/images/Logo.png'
import Front from '../../assets/images/front.jpeg'
import Back from '../../assets/images/september.png'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="section1">
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="heading1">
          <center>ASHOKA ASTRONOMY SOCIETY</center>
        </div>
        <div className="heading2">
          <center>Welcome to our website!</center>
        </div>
        <div className="heading 3">
          <center>
            {' '}
            <span className="White">BECOME A </span>
            <span className="Yellow">MEMBER</span>
            <span className="White">, CLICK</span>
            <span className="Yellow"> SIGN UP</span>
            <span className="White"> TO OUR MAILING LIST </span>
          </center>
        </div>

        <div class="image-container">
          <div class="image-flip">
            <img class="front-image" src={Front} alt="Front Image" />
            <img class="back-image" src={Back} alt="Back Image" />
          </div>
        </div>
      </div>
      <div className="trip-section">
        <div className="section2">
          <div className="space"> </div>
          <div className="space"> </div>
          <div className="heading4">
            <justify> UPCOMING EVENTS</justify>{' '}
          </div>
          <div className="ucn">
            Clubs & Societies Fair
            <br></br>
            <br></br>
            <justify>Society Heads Inductions</justify>
            <br></br>
            <br></br>
            <justify>Society Team Inductions</justify>
            <br></br>
            <br></br>
          </div>
        </div>
        <div className="section3">
          <div className="heading5">
            Check out more cool pictures on our blog!
          </div>
          <img src={Image} />
          <div className="heading6">
            Taken by __, Ashoka University using STC-7
          </div>
        </div>
        <div className="section4">
          <div className="heading7">
            {' '}
            <div className="space"></div>
            <justify>BLOG POSTS</justify>
          </div>
          <div className="heading8">
            <br></br>
            <justify>Links to</justify> <br></br>
            <br></br> <justify>Articles on</justify> <br></br>
            <br></br>
            <justify> The Blog</justify>
          </div>
        </div>
      </div>
      <div className="section5">
        <div className="heading9">
          {' '}
          <div className="space"></div>
          <center>ABOUT US</center>
        </div>
        <div className="heading10">
          {' '}
          <center>
            The Astronomy Club at Ashoka was founded as a club under the Physics
            Society in 2019 (?) by the students of Physics passionate about
            Astronomy. It was founded by __ and subsequently lead by (names of
            heads so far).<br></br> <br></br>In 2023, the Astronomy Society was
            formed to encourage the idea that Astronomy is an interdisciplinary
            field.<br></br> <br></br> Learn more about our team here!
          </center>{' '}
        </div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="contact">
          <div className="heading11">
            <center>CONTACT US</center>
          </div>
        </div>
      </div>
      <div className="section6">
        <div className="space"></div>
        <div className="heading12">
          <center>BECOME A MEMBER!</center>
        </div>
        <div className="space"></div>
        <div className="heading13">
          <center>Receive quick updates about events and activities! </center>
        </div>
        <div className="space"></div>
        <div className="space"></div>
        <div class="tform">
          <form action="https://docs.google.com/forms/d/e/1FAIpQLSefUI6XW_-k5XvqmW7zEXBQyHWRf662tmwVKgdjeZoaWKwaog/formResponse">
            <div class="form-field">
              <label for="name" class="form-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="entry.1876429058"
                class="form-input"
                required
              />
            </div>
            <div class="form-field">
              <label for="email" class="form-label">
                Email ID:
              </label>
              <input
                type="email"
                id="email"
                name="entry.1269588820"
                class="form-input"
                required
              />
            </div>
            <button type="submit" class="form-button">
              Submit
            </button>
          </form>
        </div>
        <div className="space"></div>
        <div className="heading14">
          <center>SOCIALS</center>
        </div>
        <div className="socials">
          <div className="icons">
            <a href="mailto:eastronomysociety@ashoka.edu.in">
              <img src={Email} />
            </a>
            <a href="https://www.linkedin.com/company/the-astronomy-society-of-ashoka-university/">
              <img src={LinkedIn} />
            </a>
            <a href="https://instagram.com/astronomy_ashoka?igshid=MWZjMTM2ODFkZg==">
              <img src={Instagram} />
            </a>
            <a href="">
              <img src={Slack} />
            </a>
          </div>
          <div className="sname">
            <div className="space2"></div>
            Email<br></br>
            <br></br>
            LinkedIn <br></br>
            <br></br>
            Instagram<br></br>
            <br></br> Slack Channel
          </div>
          <div className="dts">
            <div className="space2"></div>
            astronomysociety@ashoka.edu.in <br></br>
            <br></br>The Astronomy Society of Ashoka University<br></br>
            <br></br> astronomy_ashoka<br></br>
            <br></br> Slack Channel
          </div>
        </div>
      </div>
      <div className="section8">
        <div className="footer">
          <img src={Logo} />
        </div>
        <div className="heading15">
          Ashoka Astronomy Society <br></br>Plot no 2, NH 44, Rajiv Gandhi
          Education City, Sonipat, Haryana 131029
        </div>
      </div>
    </div>
  )
}

export default Home

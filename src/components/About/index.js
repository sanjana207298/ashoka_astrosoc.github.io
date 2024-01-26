import { Link } from 'react-router-dom'
import './index.scss'
import Shwetha from '../../assets/images/swetha.jpeg'
import Kushal from '../../assets/images/kushal.jpeg'
import Dipankar from '../../assets/images/dipankar.png'

const About = () => {
  return (
    <div className="team">
      <div className="space"></div>
      <div className="space"></div>
      <div className="heading1">
        <center>OUR TEAM</center>
      </div>
      <div class="image-container">
        <div class="image">
          <img src={Shwetha} alt="Image 1" />
          <div className="Space"></div>
          <div class="caption">
            Shwetha Prakash<br></br>
            <div className="caption2">Founding President</div>
          </div>
        </div>
        <div class="image">
          <img src={Kushal} alt="Image 2" />
          <div className="Space"></div>
          <div class="caption">
            Kushal Jain<br></br>
            <div className="caption2">Founding Secretary</div>
          </div>
        </div>
        <div class="image">
          <img src={Dipankar} alt="Image 3" />
          <div className="Space"></div>
          <div class="caption">
            Dr. Dipankar Bhattacharya<br></br>
            <div className="caption2">Faculty Mentor</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

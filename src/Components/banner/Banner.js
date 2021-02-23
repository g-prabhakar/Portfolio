import './banner.css'
import profile from '../../images/profile.png'


const Banner = () => (
    <div>
       <div className='banner Home' id='banner'>
            <div id='intro'>
                <img src={profile} alt='profile'/>
                <h1>Hello, I'm <span>Prabhakar</span></h1>
                <h2>are you looking for a web developer?</h2>
                <button id='work'><a href='#projects'>View my work <i class="fa fa-arrow-down"></i></a></button>
            </div>
        </div>
    </div>
)

export default Banner


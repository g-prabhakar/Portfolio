import './banner.css'
import profile from '../../images/profile.png'


const Banner = () => (
    <div className='banner Home'>
        <div id='intro'>
            <img src={profile} alt='profile'/>
            <h1>Hello, I'm <span>Prabhakar</span></h1>
            <h2>are you looking for a web developer?</h2>
            <button><a href='#'>View my work <i class="fa fa-arrow-down"></i></a></button>
        </div>
    </div>
)

export default Banner
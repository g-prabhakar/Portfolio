import './contact.css'
import './contactsmall.css'

const Contact = () => (
    <div className='contact' id='contact'>
        <h2>Get in touch</h2>
        <div id='contact-form'>
            <input className='input' type='text' placeholder='Name'/>
            <input className='input' type='text' placeholder='Email'/> 
            <textarea className='input' placeholder='Comment'></textarea>
            <button type='submit'>SUBMIT</button>
        </div>
        <button id='top'><a href='#banner'><i class="fa fa-angle-double-up"></i></a></button>
        <div className='social-media'>
            <button id='linkedIn'><a href='https://www.linkedin.com/in/prabhakar-guntamukku-791045165/' target="_blank"><i class="fa fa-linkedin"></i></a></button>
            <button id='facebook'><a href='https://www.facebook.com/prabhakar.ace.3/' target="_blank"><i class="fa fa-facebook-f"></i></a></button>
            <button id='instagram'><a href='https://www.instagram.com/ugh_its_ace/' target="_blank"><i class="fa fa-instagram"></i></a></button>
            <button id='codepen'><a href='https://codepen.io/prabhakar2095' target="_blank"><i class="fa fa-codepen"></i></a></button>
        </div>
        <footer>Prabhakar <span>&copy; 2021</span></footer>
    </div>
)

export default Contact
import './contact.css'

const Contact = () => (
    <div className='contact' id='contact'>
        <h2>Get in touch</h2>
        <div id='contact-form'>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='Email'/> 
            <textarea placeholder='Comment'></textarea>
            <button type='submit'>SUBMIT</button>
        </div>
        <button id='top'><a href='#banner'><i class="fa fa-angle-double-up"></i></a></button>
        <div className='social-media'>
            <button id='linkedIn'><a href=''><i class="fa fa-linkedin"></i></a></button>
            <button id='facebook'><a href=''><i class="fa fa-facebook-f"></i></a></button>
            <button id='instagram'><a href=''><i class="fa fa-instagram"></i></a></button>
            <button id='codepen'><a href=''><i class="fa fa-codepen"></i></a></button>
        </div>
        <footer>Prabhakar <span>&copy; 2021</span></footer>
    </div>
)

export default Contact
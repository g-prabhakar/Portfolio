import './contact.css'

const Contact = () => (
    <div className='contact'>
        <h2>Get in touch</h2>
        <div id='contact-form'>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='Email'/> 
            <textarea placeholder='Comment'></textarea>
            <button type='submit'>SUBMIT</button>
        </div>
    </div>
)

export default Contact
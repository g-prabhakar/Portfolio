import { Component, createRef } from 'react'
import './projects.css'
import tribute from '../../images/tribute.png'
import survey from '../../images/survey_form.png'
import landingPage from '../../images/landing_page.png'
import documentation from '../../images/documentation.png'
import quoteMachine from '../../images/quote_machine.png'
import markup from '../../images/markup.png'
import drumMachine from '../../images/drum_machine.png'
import calculator from '../../images/calculator.png'
import pomodoro from '../../images/pomodoro.png'



class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: [
                {
                    type: 'react',
                    source: quoteMachine,
                    name: 'Quote Machine',
                    link: 'https://codepen.io/prabhakar2095/full/VwKbwXq'
                },
                {
                    type: 'react',
                    source: markup,
                    name: 'Markup Text',
                    link: 'https://codepen.io/prabhakar2095/full/abmNNJX'
                },
                {
                    type: 'react',
                    source: drumMachine,
                    name: 'Drum Machine',
                    link: 'https://codepen.io/prabhakar2095/full/abBmLJg'
                },
                {
                    type: 'react',
                    source: calculator,
                    name: 'Calculator',
                    link: 'https://codepen.io/prabhakar2095/full/mdrBgdK'
                },
                {
                    type: 'react',
                    source: pomodoro,
                    name: 'Pomodoro Clock',
                    link: 'https://codepen.io/prabhakar2095/full/oNYgMMb'
                },
                {
                    type: 'htmlCss',
                    source: tribute,
                    name: 'Tribute Page',
                    link: 'https://codepen.io/prabhakar2095/pen/NWNzpWy'
                },
                {
                    type: 'htmlCss',
                    source: survey,
                    name: 'Survey Form',
                    link: 'https://codepen.io/prabhakar2095/full/zYqJXeX'
                },
                {
                    type: 'htmlCss',
                    source: landingPage,
                    name: 'Product Landing Page',
                    link: 'https://codepen.io/prabhakar2095/full/MWyPWey'
                },
                {
                    type: 'htmlCss',
                    source: documentation,
                    name: 'Javascript documentation',
                    link: 'https://codepen.io/prabhakar2095/full/MWyzdqZ'
                },
                

            ],
            currentProjects: [],
        }

        this.allProjects = this.allProjects.bind(this)
        this.htmlCssProjects = this.htmlCssProjects.bind(this)
        this.reactProjects = this.reactProjects.bind(this)
        //this.effect = this.effect.bind(this)
    }

    allProjects() {
        this.setState({
            currentProjects: this.state.projects,
        })
    }

    htmlCssProjects() {
        let htmlCssProjects = this.state.projects.filter(proj => {
            if(proj.type === 'htmlCss') {
                return proj
            }
        }) 

        if(this.isActive == false){
            this.isActive = true
        }

        this.setState({
            currentProjects: htmlCssProjects,
        })
    }

    reactProjects() {
        let reactProjects = this.state.projects.filter(proj => {
            if(proj.type === 'react') {
                return proj
            }
        }) 

        this.setState({
            currentProjects: reactProjects,
        })

        
    }



    componentDidMount() {
        this.setState({
            currentProjects: this.state.projects
        })
    }

    effect = (e) => {
        this.setState({
            hoverIndex: e.target.key
        })
        console.log(this.state.hoverIndex)
    }
    

    render() {

        let projx = this.state.currentProjects.map((proj, index) => {
            return (
                <Project 
                    key={index} 
                    source={proj.source} 
                    name={proj.name} alt={proj.name} 
                    link={proj.link}
                />
            )
        })

        return (
            <div className='projects' id='projects'>
                <h2>PROJECTS</h2>
                <div className='project-btns'>
                    <button className='project-btn' id='all' onClick={this.allProjects}>ALL</button>
                    <button className='project-btn' id='htmlCss' onClick={this.htmlCssProjects}>HTML/CSS</button>
                    <button className='project-btn' id='react' onClick={this.reactProjects}>REACT</button>
                </div>
                <div className='display'>
                    {projx}
                </div>
            </div>
        )
    }
}

const Project = (props) => (
    <div className='project' key={props.index} >
        <a href={props.link} target="_blank" className='hover-effect'>
            <span className='text'><h3>{props.name}</h3></span>
            <br />
            <img src={props.source} alt={props.name}/>
        </a>
    </div>
)

export default Projects
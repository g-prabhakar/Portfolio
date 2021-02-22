import { Component } from 'react'
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
                    type: 'htmlCss',
                    name: tribute,
                },
                {
                    type: 'htmlCss',
                    name: survey,
                },
                {
                    type: 'htmlCss',
                    name: landingPage,
                },
                {
                    type: 'htmlCss',
                    name: documentation,
                },
                {
                    type: 'react',
                    name: quoteMachine,
                },
                {
                    type: 'react',
                    name: markup,
                },
                {
                    type: 'react',
                    name: drumMachine,
                },
                {
                    type: 'react',
                    name: calculator,
                },
                {
                    type: 'react',
                    name: pomodoro,
                },

            ],
            currentProjects: []
        }

        this.allProjects = this.allProjects.bind(this)
        this.htmlCssProjects = this.htmlCssProjects.bind(this)
        this.reactProjects = this.reactProjects.bind(this)
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


    render() {
        console.log(this.state.currentProjects)

        return (
            <div className='projects'>
                <h2>Projects</h2>
                <div className='project-btns'>
                    <button className='project-btn' id='all' onClick={this.allProjects}>ALL</button>
                    <button className='project-btn' id='htmlCss' onClick={this.htmlCssProjects}>HTML/CSS</button>
                    <button className='project-btn' id='react' onClick={this.reactProjects}>REACT</button>
                </div>
            </div>
        )
    }
}

const Project = (props) => (
    <div className='project'>
        <img src={props.image} alt='document' />
    </div>
)

export default Projects
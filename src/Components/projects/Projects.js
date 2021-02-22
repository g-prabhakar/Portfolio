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
                    type: 'react',
                    source: quoteMachine,
                    name: 'Quote Machine'
                    
                },
                {
                    type: 'react',
                    source: markup,
                    name: 'Markup Text'
                },
                {
                    type: 'react',
                    source: drumMachine,
                    name: 'Drum Machine'
                },
                {
                    type: 'react',
                    source: calculator,
                    name: 'Calculator'
                },
                {
                    type: 'react',
                    source: pomodoro,
                    name: 'Pomodoro Clock'
                },
                {
                    type: 'htmlCss',
                    source: tribute,
                    name: 'Tribute Page'
                },
                {
                    type: 'htmlCss',
                    source: survey,
                    name: 'Survey Form'
                },
                {
                    type: 'htmlCss',
                    source: landingPage,
                    name: 'Product Landing Page'
                },
                {
                    type: 'htmlCss',
                    source: documentation,
                    name: 'Javascript documentation'
                },
                

            ],
            currentProjects: [],
            isHover: false
        }

        this.allProjects = this.allProjects.bind(this)
        this.htmlCssProjects = this.htmlCssProjects.bind(this)
        this.reactProjects = this.reactProjects.bind(this)
        this.effect = this.effect.bind(this)
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

    effect() {
        this.setState(prevState => ({
            isHover: !prevState.isHover
        }))

        console.log(this.state.isHover)
    }

    componentDidMount() {
        this.setState({
            currentProjects: this.state.projects
        })
    }


    render() {

        let projx = this.state.currentProjects.map(proj => {
            const activeClass = this.state.isHover ? 'active' : '';

            return (
                <div className={`project ${activeClass}`} id={proj.name} onMouseEnter={this.effect} onMouseLeave={this.effect} key={proj.name}>
                    <span className='text'><p>{proj.name}</p></span>
                    <img src={proj.source} key={proj.name}/>
                </div>
            )
        })

        return (
            <div className='projects'>
                <h2>Projects</h2>
                <div className='project-btns'>
                    <button className='project-btn' id='all' onClick={this.allProjects}>ALL</button>
                    <button className='project-btn' id='htmlCss' onClick={this.htmlCssProjects}>HTML/CSS</button>
                    <button className='project-btn' id='react' onClick={this.reactProjects}>REACT</button>
                </div>
                <div className='display'>
                <div className='project'>
                    {projx}
                </div>
                </div>
            </div>
        )
    }
}


export default Projects
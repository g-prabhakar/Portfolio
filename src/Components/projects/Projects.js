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
            isHover: false,
            hoverIndex: null,
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

    // effect() {
    //     this.setState({
    //         hoverIndex: props.index
    //     })
    // }
    

    render() {

        let projx = this.state.currentProjects.map((proj, index) => {
            return (
                <Project 
                    key={index} 
                    source={proj.source} 
                    name={proj.name} alt={proj.name} 
                    handleOver={() => this.setState({hoverIndex: index})}
                    className='active'
                />
            )
        })

        console.log(this.state.hoverIndex)

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

const Project = (props) => (
    <div className='Project' key={props.index} onMouseEnter={props.handleOver}>
        <span>{props.name}</span><br />
        <img src={props.source} alt={props.name}/>
    </div>
)

export default Projects
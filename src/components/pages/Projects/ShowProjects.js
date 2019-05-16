import React from 'react'

import Nutri from '../../../images/nutri.jpg'
import THC from '../../../images/THC.jpg'
import Portfolio from '../../../images/Portfolio.jpg'

import './ShowProjects.css'

const ShowProjects = () => {
    
    const items = [
        {
            pic: Nutri,
            title: "WordPress Website",
            description: "First exposure to web design. Figuring out WordPress and the basics of UI and UX design.",
            languages: [
                "WordPress",
                "UI",
                "UX"
            ],
            gitHub: false,
            gitHubLink: '',
            webpage: true,
            webPageLink: "https://nutrig.co.uk/"
        },
        {
            pic: THC,
            title: "THC Dreams",
            description: "A website created for a local band using some advanced CSS and a bit of JavaScript.",
            languages: [
                "HTML",
                "CSS",
                "SASS",
                "JavaScript"
            ],
            gitHub: true,
            gitHubLink: "https://github.com/nikola96gospodinov/thcdreams",
            webpage: true,
            webPageLink: "https://nikola96gospodinov.github.io/thcdreams/"
        },
        {
            pic: Portfolio,
            title: "Portfolio Website",
            description: "This is the website that you are currently on. Most of the website is done with React including some styling.",
            languages: [
                "JavaScript",
                "React",
                "CSS"
            ],
            gitHub: true,
            gitHubLink: "https://github.com/nikola96gospodinov/PortfolioWebsite",
            webpage: false,
            webPageLink: ""
        }
    ]

    const showProjects = () => {
        return items.map( (item, i) => {
            return(
                <div
                    key = {i}
                    style = {{
                        margin: '4rem 0 0 0',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        background: '#ddd',
                        width: '100%'
                    }}
                >
                    <div
                        style = {{
                            background: `url(${item.pic})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '25vh'
                        }}
                    ></div>
                    <h1
                        style = {{
                            color: '#ddd',
                            background: '#333',
                            width: '100%',
                            padding: '.75rem',
                        }}
                    >{item.title}</h1>
                    <p
                        className = "description"
                    >{item.description}</p>
                    <ul
                        style = {{
                            margin: '.75rem .75rem 1.5rem .75rem'
                        }}
                    >
                        {
                            item.languages.map( (item2, i) => {
                                return(
                                    <li className = "languages">{item2}</li>
                                )
                            })
                        }
                    </ul>
                    <div
                        style = {{
                            display: 'flex',
                            alignItems: 'flex-end',
                            height: '12vh',
                            borderTop: 'solid 1px #bbb',
                            justifyContent: 'space-between'
                        }}
                    >
                        {
                            item.gitHub ? 
                            <a
                                target="_blank"
                                href = {item.gitHubLink}
                                className = "ProjectsButtons"
                            >View on GitHub</a>
                            : null
                        }
                        {
                            item.webpage ?
                            <a
                                target="_blank"
                                href = {item.webPageLink}
                                className = "ProjectsButtons"
                            >View Online</a>
                            : null
                        }
                    </div>
                </div>
            )
        })
    }

    return (
    <div
        className = "projectsGrid"
    >
        {showProjects()}
    </div>
  )
}

export default ShowProjects

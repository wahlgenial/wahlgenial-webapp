import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderLogo from './HeaderLogo'
import TeacherAppItemDesktop from './ElectionApps/TeacherAppItemDesktop'


class TeacherApps extends Component {
    state = { searchQuery: "" }

    static propTypes = {
        apps: PropTypes.array.isRequired
    }

    changeSearchString = event => 
        this.setState({ searchQuery: event.target.value})        

    handleClick = app => () => console.log(app)

    filterApps = e => {
        e.preventDefault()
        
        console.log(this.state.searchQuery)
    }

    filteredApps = () => {
        const { apps } = this.props
        console.log({apps}, this.state.searchQuery);
        
        if (this.state.searchQuery === "") {
            return apps
        }

        return apps.filter(app => {
            

            return app.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()) 
            || app.description.toLowerCase().includes(this.state.searchQuery.toLowerCase())
            || app.teaser_text.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        })
    }

    render () {
        const apps = this.filteredApps()

        return (
            <div>
            <div className="d-flex flex-wrap justify-content-center my-5">
                    <h1>Webseiten und Apps <br /> für deinen Politik-Unterricht</h1>
                </div>

                <div className="d-flex flex-wrap justify-content-center">
                    <form>
                        <input name="search" placeholder="Suchbegriff eingeben" className="search-form" onChange={this.changeSearchString}/>
                        <button onClick={this.filterApps}>Search</button>
                    </form>
                </div>
                <div className="apps-container d-flex flex-wrap justify-content-center">
                    {apps.map(app => {
                        return <TeacherAppItemDesktop
                        name={app.title}
                        description={app.description} link={app.link}
                        teaser_text={app.teaser_text} link={app.link}
                        onClick={this.handleClick(app)}
                        tool={app.tool}
                        tags={app.teacher_app_tags}/>
                    })}
                    {apps.length === 0 && <h3>Keine Treffer</h3>}
                </div>
            </div>
        )
    }
}

export default TeacherApps

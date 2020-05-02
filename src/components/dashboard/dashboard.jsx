import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux' // to use 2 higherorder fuctuins together 

import Notifications from './notification'
import ProjectList from '../projects/projectlist'




class Dashboard extends React.Component {
    render(){
        const { projects } = this.props
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/> 
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    
    return{
        projects: state.firestore.ordered.projects
    }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)
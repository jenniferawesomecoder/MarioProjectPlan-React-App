import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { deleteProject } from '../actions/projectActions'

const ProjectSummary = ({ project, deleteProject }) => {
  const handleDelete = e => {
    e.preventDefault();
    const { id } = project;
    deleteProject(id);
  }

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title pink-text pulse text-darken-3 ">{project.title}</span>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>

      <span onClick={(e) => handleDelete(e, project)}>Delete</span>
    </div>
  )
}

const mapDistpacthToProps = dispatch => {
  return {
    deleteProject: (id) => dispatch(deleteProject(id))
  }
}

export default compose(
  connect(null, mapDistpacthToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectSummary);

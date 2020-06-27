import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { updateProject } from '../actions/projectActions'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { uniqBy } from 'lodash';

class CreateProject extends Component {
  constructor(props){
  	super(props);

  	this.state = {
      title: '',
      content: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.projects !== this.props.projects) {
      const { projects, match } = this.props;
      const project = projects.filter(f => f.id === match.params.id)[0];

      if (project) {
        this.setState({
          title: project.title,
          content: project.title
        })
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { match } = this.props;

    this.props.updateProject(this.state, match.params.id);
    this.props.history.push('/');
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    const { title, content } = this.state;

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Update Project</h5>

          <div className="input-field">
            <input
              type="text"
              id='title'
              value={title}
              onChange={this.handleChange}
            />
            <label class="active" htmlFor="title">Project Title</label>
          </div>

          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea"
              value={content}
              onChange={this.handleChange}
            />
           <label class="active" htmlFor="content">Project Content</label>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1">Update</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: uniqBy(state.firestore.ordered.projects, (obj) => obj.id),
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateProject: (project, id) => dispatch(updateProject(project, id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'projects'}
  ])
)(CreateProject)

// export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)

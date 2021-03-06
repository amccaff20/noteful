import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../Note/Note'
import ApiContext from '../../ApiContext'
import { getNotesForFolder } from '../../notes-helpers'
import './NoteListMain.css'

export default class NoteListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  render() {
    const { folderId } = this.props.match.params
    const { notes=[] } = this.context
    const notesForFolder = getNotesForFolder(notes, folderId)
    return (
      <section className='NoteListMain'>
         <div className='NoteListMain__button-container'>
          <Link to='/add-note'>
          <button
            type='button'
            className='NoteListMain__add-note-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            Note
          </button>
          </Link>
        </div>
        <ul>
          {notesForFolder.map(note =>
            <li key={note.id}>
              <Note
                id={note.id}
                name={note.name}
                modified={note.modified}
              />
            </li>
          )}
        </ul>
       
      </section>
    )
  }
}


NoteListMain.propTypes = {
  params: PropTypes.object
  }
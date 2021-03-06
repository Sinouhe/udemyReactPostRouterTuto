import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class PostForm extends Component {
    render () {
        return (
            <div>
                <h1>Nouveau post</h1>
                <div className='form-group'>
                    <label>Title</label>
                    <input className='form-control' type='text' />
                    <div></div>
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <input className='form-control' type='textarea' />
                    <div></div>
                </div>
                <div className='form-group'>
                    <label>Auteur</label>
                    <input className='form-control' type='text' />
                    <div></div>
                </div>
                <Link to='/' className='button_space'><button className='btn btn-danger'>Retour</button></Link>
                <button type='submit' className='btn btn-primary'>Créer</button>
            </div>
        )
    }
}

export default PostForm
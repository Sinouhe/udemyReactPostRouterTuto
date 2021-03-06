import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import{readAllPost, deletePost} from '../actions/index';
import PostListItem from '../components/post-list-item';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import {Link} from 'react-router-dom';

class PosyList extends Component {

    componentWillMount() {
        this.props.readAllPost();
    }

    renderPosts() {
        const {posts} = this.props;
        if(posts) {
            return posts.map((post) => {
                return <PostListItem key={post.id} post={post} deletePostCallBack={(post) => this.deletePostCallBack(post)}/>
            })
        }
    }

    deletePostCallBack(post) {
        this.props.deletePost(post.id);
    }

    render () {
        // console.log(this.props.posts)
        return (
            <div>
                <h1>liste des posts</h1>
                <div className='button_add'>
                    <Link to={'/create-post'} ><button className='btn btn-primary btn-circle btn-lg'>+</button></Link>
                </div>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <ReactCSSTransitionGroup    component='tbody' 
                                                transitionEnterTimeout = {500}
                                                transitionLeaveTimeout = {300}
                                                transitionName='fade'>
                        {this.renderPosts()}
                    </ReactCSSTransitionGroup>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({readAllPost, deletePost}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(PosyList)
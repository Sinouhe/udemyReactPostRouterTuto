import React, { Component } from 'react'
import PostContent from '../components/post-content'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {readPost} from '../actions/index'

class Post extends Component {

    componentWillMount() {
        this.props.readPost(this.props.match.params.id);
    }

    renderPostContent() {
        const {post} = this.props;
        if(post){
            return  <PostContent post={post} />
        }
    }

    render () {
        // console.log(this.props.post)
        return (
            <div>
                post number = {this.props.match.params.id}
                {this.renderPostContent()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.ActivePost
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({readPost}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);
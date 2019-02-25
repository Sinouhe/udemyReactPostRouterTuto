import React from 'react'

const PostListItem = (props) => {
    const {post} = props
    return (
        <tr>
            <td>{post.title}</td>
            <td><button className='btn btn-danger'>supprimer</button></td>
        </tr>
    )
}

export default PostListItem
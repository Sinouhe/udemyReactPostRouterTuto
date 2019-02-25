import axios from 'axios';
import {AT_POSTS} from './action-types';

const END_POINT = 'http://localhost:3000';

export function readAllPost() {
    return function (dispatch) {
        axios.get(`${END_POINT}/posts`)
                .then((res) => {
                    dispatch({type: AT_POSTS.READ_ALL, payload: res.data});
                })
                .catch((err) => {
                    console.log('error index.js -> readAllPost '+ err.message);
                });             
    }
}

export function readPost(id) {
    return function (dispatch) {
        axios.get(`${END_POINT}/posts/${id}`)
                .then((res) => {
                    // console.log(res.data);
                    dispatch({type: AT_POSTS.READ, payload: res.data});
                })
                .catch((err) => {
                    console.log('error index.js -> readPost '+ err.message);
                });             
    }
}

export function deletePost(id) {
    return function (dispatch) {
        axios.delete(`${END_POINT}/posts/${id}`)
                .then((res) => {
                    dispatch({type: AT_POSTS.DELETE, payload: id});
                })
                .catch((err) => {
                    console.log('error index.js -> readPost '+ err.message);
                });             
    }
}

export function createPost(post) {
    return function (dispatch) {
        axios.post(`${END_POINT}/posts/`,
                    {
                        title: post.title,
                        content: post.content,
                        author: post.author
                    }
                )
                .then((res) => {
                    dispatch({type: AT_POSTS.CREATE , payload: res.data});
                })
                .catch((err) => {
                    console.log('error index.js -> readPost '+ err.message);
                });             
    }
}
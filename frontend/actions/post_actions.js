import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';


const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
});

const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

const removePost = postId => ({
    type: REMOVE_POST,
    postId
});



export const fetchUserPosts = (user) => dispatch => PostApiUtil.fetchPosts(user)
    .then(posts => dispatch(receiveAllPosts(posts)));

export const fetchPost = (user, post) => dispatch => PostApiUtil.fetchPost(user,post)
    .then(post => dispatch(receivePost(post)));

export const editPost = (user, post) => dispatch => PostApiUtil.editPost(user,post)
    .then(post => dispatch(receivePost(post)));

export const createPost = (user, post) => dispatch => PostApiUtil.createPost(user,post)
    .then(post => dispatch(receivePost(post)));

export const deletePost = (user, post) => dispatch => PostApiUtil.deletePost(user,post)
    .then(post => dispatch(removePost(post.postId)));
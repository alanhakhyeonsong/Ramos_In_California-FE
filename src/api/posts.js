import { posts } from "@/api/index";

function getAllPosts() {
    return posts.get();
}

function getPost(boardId) {
    return posts.get(`/${boardId}`)
}

function addPost(postData) {
    return posts.post('/', postData);
}

function editPost(boardId, postData) {
    return posts.put(`/${boardId}`, postData);
}

function deletePost(boardId) {
    return posts.delete(`/${boardId}`)
}

export {
    getAllPosts,
    getPost,
    addPost,
    editPost,
    deletePost,
};
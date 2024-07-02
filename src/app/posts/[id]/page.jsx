import React from 'react';

const getDetailsPost = async(id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}
const PostDetailPage = async({params}) => {
    const post = await getDetailsPost(params.id)
    return (
        <div>
           <h6>
            Title: {post.title}
           </h6>
           <h6>
            Description: {post.body}
           </h6>
        </div>
    );
};

export default PostDetailPage;
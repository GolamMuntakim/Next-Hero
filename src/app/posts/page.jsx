import Link from 'next/link';

import React from 'react';
const getPosts = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    const data = await res.json();
   
    return data
}
const page = async() => {
    const postsData = await getPosts()
    console.log(postsData)
    return (
        <div className=''>
            <h6>All post</h6>
            <div className='grid grid-cols-3 gap-4'>
                {
                     postsData?.slice(0,10)?.map((post)=>(
                        <div key={post.id} className='border-2 p-6'>
                            <h6>Title : {post.title}</h6>
                            <h6>Description : {post.body}</h6>
                            <button className='bg-cyan-400 p-2 rounded-md mt-2'><Link href={`/posts/${post.id}`}>see details</Link></button>
                        </div>
                     ))
                }
            </div>
        </div>
    );
};

export default page;

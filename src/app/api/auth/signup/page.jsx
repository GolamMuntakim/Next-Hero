"use client"
import React from 'react';

const page = () => {
    const handleRegister = async (event) => {
        event.preventDefault()
        const newUser = {
            name:event.target.name.value,
            email:event.target.email.value,
            image:event.target.image.value,
            type:event.target.type.value,
            password:event.target.password.value,
        }
        const resp = await fetch('http://localhost:3000/api/auth/signup/new-user',{
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'content-type' : 'application/json'
            }
            
        })
        console.log(resp)
    }
    return (
        <div className='flex items-center justify-center mt-24'>
            <div>
                <h6 className='text-lg font-semibold'>Sign up with email and password</h6>
                <div>
                   <form onSubmit={handleRegister}>
                   <label htmlFor="name">Name</label> <br />
                   <input type="text" name="name" placeholder="Enter name" className='outline-none border-transparent p-3 text-slate-700'></input> <br />
                   <label htmlFor="email">Email</label> <br />
                   <input type="email" name="email" placeholder="Enter email" className='outline-none border-transparent p-3 text-slate-700'></input> <br />
                   <label htmlFor="password">password</label> <br />
                   <input type="password" name="password" placeholder="Enter password" className='outline-none border-transparent p-3 text-slate-700'></input> <br />
                   <label htmlFor="image">Image</label> <br />
                   <input type="text" name="image" placeholder="Enter image" className='outline-none border-transparent p-3 text-slate-700'></input> <br />
                   <label htmlFor="type">Type</label> <br />
                   <select name="type" placeholder="user type" className='outline-none border-transparent p-3 text-slate-700'>
                    <option value="admin">Admin</option>
                    <option value="moderator">Modaretor</option>
                    <option value="member">Member</option>
                   </select><br />
                   <button className='btn bg-slate-500 p-2 rounded-md text-center mt-2'>signup</button>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default page;
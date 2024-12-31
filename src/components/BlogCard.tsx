import React from 'react'
import { Card, CardContent, CardTitle } from "../components/ui/card";

 interface BlogCardProps {
  post: {id: string; title: string; description: string; date: string; image: string };
  isDarkBackgrond: Boolean;
}
 
export default function BlogCard({ post, isDarkBackgrond}: BlogCardProps) {
  return (
    <Card className={ `p-4 ${isDarkBackgrond ? 'bg-slate-800 text-white' : 'text-slate-800'} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
    <img
    src={post.image}
    alt={post.title}
    className='w-full h-48 object-cover rounded-t-lg'
    /> 

    <CardTitle className='text-xl font-normal mt-4 text-center'> {post.title}</CardTitle>
    <br />
    <CardContent className='text-center'>
      <p> {post.description}</p>
    </CardContent>
    <div className='flex flex-col items-center mt-4'>
      <p className={`text-sm mb-2 ${isDarkBackgrond ? 'text-slate-400' : 'text-slate-600'}`}>
        Published on: {new Date(post.date).toLocaleDateString()}
      </p>
      <a href={`/posts/${post.id}`}
      className={`w-full px-6 text-white bg-blue-600 rounded hover:bg-blue-500 ${isDarkBackgrond ? 'bg-black hover:bg-red-500':  'bg-black hover:bg-red-500'}`}
      >
        Read More
      </a>

    </div>



    </Card>
  )
}

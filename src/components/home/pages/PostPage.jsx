import React from 'react'
import PostCard from '../cards/PostCard'
import postData from '../../../helpers/postData.json'
import { motion } from 'framer-motion'
import { useState ,useEffect } from 'react'
const PostPage = () => {
     const mainVarient = {
          hidden: {
               opacity: 0,
               x: '100vw'
          },
          visible: {
               x: 0,
               opacity: 1,
               transition: {
                    duration: 0.5,
                    ease: 'easeInOut'
               },
          },
          exit: {
               x: '-100vw',
               transition: {
                    ease: 'easeInOut'
               },
          }
     }
     const [data, setTitle] = useState("");
    
          useEffect(() => {
          const fetchData = async()=>{
          const res = await fetch('https://fsd-project-e2e42-default-rtdb.firebaseio.com/posts.json');
          const data = await res.json();
          setTitle(data);
          }
          fetchData()

          }, [])

          var result = [];

          for(var i in data)
          result.push( data [i]);

          console.log(result);

     return <motion.div
          variants={mainVarient}
          initial='hidden'
          animate='visible'
          exit='exit'
     >
          {result.map((post) => <PostCard
               key={post.postId}
               id={post.postId}
               banner={post.imageUrl}
               title={post.postTitle}
               description={post.postSummary}
               likes={post.likes}
               // comments={post.comments}
               author="Surya"
               publishedDate={post.publishedDate}
               userId = {post.uid}
          />)}
     </motion.div>
}
export default PostPage;

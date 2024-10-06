import axios from "axios"
import { useEffect, useState } from "react"

function Comment() {
    const [comment, setComment]=useState("")
    const [comments, setComments]=useState([])

const inputComment =(e)=>{
    setComment(e.target.value)
    setComment("")

}

const AddComment = (e)=>{

if(comment.trim()!==""){
    e.preventDefault();

    axios.post("https://66e7e69bb17821a9d9da6eb2.mockapi.io/comment",{
        comment,
    })
    .then((res)=>{
        console.log(res.data);
        setComments([...comments,res.data])
        
    })
    .catch( (error)=> {
        console.log(error);
      });
    }}

    useEffect(()=>{
        axios.get(`https://66e7e69bb17821a9d9da6eb2.mockapi.io/comment`)
    .then((res)=>{
        console.log(res.data);
        setComments(res.data)
        
    })
    .catch( (error)=> {
        console.log(error);
      });
    },[])

  return (
    <div>
      
        <form onSubmit={AddComment} className="max-w-2xl  badge-ghost rounded-lg border p-2 mx-auto mt-20">
    <div className="px-3 mb-2 mt-2">
        <textarea placeholder="comment" onChange={inputComment} className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"/>
    </div>
    <div className="flex justify-end px-4">
        <input type="submit" className="px-2.5 py-1.5 rounded-md text-white text-sm bg-gray-950" value="Comment"/>
    </div>
</form>
<ul>
        {comments.map((e)=>{
            return(
                <li key={e.id}>
                    {e.comment}
                </li>
            )
        })}
        </ul>

    </div>
  )
}

export default Comment
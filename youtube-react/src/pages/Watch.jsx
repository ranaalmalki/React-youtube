import { useParams  } from "react-router-dom"
import NavBarHeader from "../components/NavBarHeader"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios"
import VideoBehiend from "./VideoBehiend";

function Watch() {
    const {id} =useParams()
    const apikey="AIzaSyDijZ3TU1YQFbHNTd7Asj5s8kGWhvmFjUw"
    const [comment,setComment]=useState([])
    const [video,setVideo]=useState([])

  
useEffect(()=>{
    axios.get(`https://youtube.googleapis.com/youtube/v3/comments?part=snippet&videoId=${id}&key=${apikey}`)
    .then((res)=>{
            console.log(res.data.items+"//////////////");
setComment(res.data.items)
        
    })
    .catch(error => {
        console.error("Error fetching comments:", error);
    });
},[id])


useEffect(()=>{
    axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${apikey}`)
    .then((res)=>{
            console.log(res.data.items+"//////////////");
setComment(res.data.items)
        
    })
    .catch(error => {
        console.error("Error fetching comments:", error);
    });
},[id])

useEffect(()=>{
    axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=SA&key=${apikey}`)
    .then(res=>{
        console.log(res.data.items);

            setVideo( res.data.items)
            
        
    })
    .catch(error => {
        console.error("Error fetching videos:", error); 
    });


},[])
  return (
    <div className="">
        <NavBarHeader/>
        <div className="flex justify-center items-center min-h-screen">

<div className="grid grid-flow-col container ">
<div className="grid grid-cols-1 ">
<iframe className="w-full" width="1200" height="640" src={`https://www.youtube.com/embed/${id}`} title="عملنا أحلى حفلة لكشف جنس المولود مع العيلة 🩵🩷" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<ul>
    {comment.map((e)=>{
                    console.log(e);

        return(
<li key={e.id}>
{/* <p>{e.snippet.topLevelComment.snippet.authorDisplayName} {e.snippet.topLevelComment.snippet.textDisplay}</p> */}
</li>

        )


})}
</ul>

<div className="">{video.map((e)=>{
    if(id === e.id){
        return(
            <>
   <h1 className="font-bold">{ e.snippet.title}</h1>
   {e.snippet.channelTitle}
<div className=" ">
<p className="border border-solid badge-ghost ">{e.snippet.description}</p>
</div>
</>
)

    }}
    )}</div>
</div>
<div>
<VideoBehiend/>
</div>
    </div>
    </div>
    </div>
  )
}

export default Watch
import { useParams  } from "react-router-dom"
import NavBarHeader from "../components/NavBarHeader"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios"

function Watch() {

    const {id} =useParams()
    const apikey="AIzaSyDijZ3TU1YQFbHNTd7Asj5s8kGWhvmFjUw"
    const [video,setVideo]=useState([])
    const [comment,setComment]=useState([])

    useEffect(()=>{
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=SA&key=${apikey}`)
        .then(res=>{
            console.log(res.data.items);

                setVideo( res.data.items)
                
            
        })
        .catch(error => {
            console.error("Error fetching videos:", error); 
        });


    },[id])
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

  return (
    <div className="">
        <NavBarHeader/>
<div className="grid grid-flow-col col justify-center gap-10">
<div className="flex flex-col items-center">
<iframe className=" relative top-15 left-3" width="640" height="360" src={`https://www.youtube.com/embed/${id}`} title="عملنا أحلى حفلة لكشف جنس المولود مع العيلة 🩵🩷" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h2 className="w-96 " dir="rtl">{video.map((e)=>{
    if(id === e.id){
        return(
    e.snippet.title,
<p>{e.snippet.description}</p>
)

    }}
    )}</h2>
<ul>
    {comment.map((e)=>{
                    console.log(e);

        return(
<li key={e.id}>
<p>{e.snippet.topLevelComment.snippet.authorDisplayName} {e.snippet.topLevelComment.snippet.textDisplay}</p>
</li>

        )


})}
</ul>
</div>
<div>
<ul className="flex flex-wrap flex-col">
    {video.map((e)=>{
        return(
        <li key={e.id} className="w-64">
            <img
            src={e.snippet.thumbnails.default.url}
            className="w-48 rounded"
            />
                        <h2>{e.snippet.title}</h2>
                        <Link to={`/watch/${e.id}`}>
                        watch
                        </Link>
            </li>
)
    })}
    </ul>
</div>
    </div>
    </div>
  )
}

export default Watch
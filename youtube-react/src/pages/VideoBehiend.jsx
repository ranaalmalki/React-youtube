import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams  } from "react-router-dom"

function VideoBehiend() {
    const apikey="AIzaSyDijZ3TU1YQFbHNTd7Asj5s8kGWhvmFjUw"
    const {id} =useParams()
    const [video,setVideo]=useState([])

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
    <div>
<div>
<ul className="flex flex-wrap flex-col">
    {video.map((e)=>{
        return(
            <Link to={`/watch/${e.id}`}>
        <li key={e.id} className="w-64 flex p-2">
            <img
            src={e.snippet.thumbnails.default.url}
            className="w-64 rounded"
            />
                        <h2>{e.snippet.title}</h2>
                        
            </li>
            </Link>

)
    })}
    </ul>
</div>

    </div>
  )
}

export default VideoBehiend
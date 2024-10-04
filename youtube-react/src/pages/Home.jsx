import axios from "axios"
import { useEffect, useState } from "react"
import NavBarHeader from "../components/NavBarHeader";

function Home() {
    const apikey="AIzaSyDijZ3TU1YQFbHNTd7Asj5s8kGWhvmFjUw"
    const [video,setVideo]=useState([])
    useEffect(()=>{
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=${apikey}`)
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
    <NavBarHeader/>
    <ul>
    {video.map((e)=>{
        return(
        <li key={e.id.videoId}>
            <h2>{e.snippet.title}</h2>
            <img
            src={e.snippet.thumbnails.default.url}
            
            />
            <p>{e.snippet.description}</p>
            <a href={`https://www.youtube.com/watch?v=${e.id.videoId}`} target="_blank" rel="noopener noreferrer">
            Watch Video

            </a>

            </li>
)
    })}
    </ul>
    </div>
  )
}

export default Home
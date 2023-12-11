import {useState }from "react";
import "./AddVideos.css";
const initialState={  //alg se varialble decalre kiya usko useState hook m bhi pass kiya or setVideo m bhi to show empty value of title and views
    time: "2 year ago",
        channel: "Ritul's Code",
        verified: true,
        title:"",
        views:'',
   } 

//managing state *lifting state up*
function AddVideo({addvideos}){  //addvideos as a prop send kiya func ko jo ki app.js k setVideos ki value hold krta h
  
    
    const[video,setVideo] = useState(initialState);
     function handleSubmit(e){
        e.preventDefault();
        addvideos(video) // prop value use ki
         setVideo(initialState)  //clearing input field
    }
    
    function handleChange(e){
         setVideo({...video,
           [e.target.name]:e.target.value  //bracket lgata kyu js ko pta chle ki evalute krke key bnani h
        })
        //console.log(videos);  //yeh apni phli state ko hi render krega cureent ko ni krega
    }
    return(
        <form>
            <input type="text" 
            name="title" 
            onChange={handleChange} 
            placeholder='title' 
            value={video.title}
            />
            <input type="text"
             name="views" 
             onChange={handleChange}
              placeholder='views' 
              value={video.views}
              />
            <button onClick={handleSubmit}>Add video</button>
        </form>
    )
}
export default AddVideo;
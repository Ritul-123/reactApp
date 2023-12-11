 import {useState} from "react";
 import AddVideo from "./components/AddVideo";
import "./App.css";
import videosDB from "./data/data";
import VideoList from "./components/VideoList";
// import Practice from "./components/Practice"
//import Counter from "./components/Counter";
function App() {

  const[videos,setVideos] = useState(videosDB);
  // components function hote h jo UI return krte hai.
      function addvideos(video){   //ab yeh func prop m pass krke send kr rhe h neeche
        setVideos( [
          ...videos,
        {...video,id:videos.length+1}          // yeh video ab hme child se milega children prop use kiya yha 
      ]);
      }

      function deleteVideo(id){
          setVideos(videos.filter(video=>video.id!==id));
          console.log(id);
      }
      function editVideo(id){
          console.log(videos.find(video=>video.id ===id))
      }
  return (
    <>
       <div className="App"   onClick={()=>console.log("APP")}>  {/*event bubbling */}
       <AddVideo addvideos={addvideos}></AddVideo>  {/*addvideos ek prop h jo hm AddVideo m bna rhe h or use setter func setVideos jo ki alg func as addvideos defind h upper send kr rhe h */}
        <VideoList editVideo={editVideo} deleteVideo={deleteVideo} videos={videos}></VideoList>
       

        
      </div>  
    </>
  );
}
export default App;




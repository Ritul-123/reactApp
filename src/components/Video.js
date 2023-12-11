  import './Video.css';

function Video({title,id,bgColor,channel,views,time,verified,children,deleteVideo,editVideo} ) {
        
  
  return (
    <>
    <div className="container">
    <div className="pic">
    <button  className="close" onClick= {()=>deleteVideo(id)}>X</button>
    <button  className="edit" onClick= {()=>editVideo(id)}>edit</button>
    <img src= {`https://picsum.photos/id/${id}/160/90`} alt="hi"/>

    </div>
      
      <div className ="title" > {title} </div>
    {/* conditional rendering using tick sign */}
      {/* second way to render {verified?<div className ="channel" > {channel} ✅ </div>:<div className ="channel" > {channel}  </div> } */}
    {/* /*third way of render */    
        /*fourth way of render */}
        
        <div className ="channel" > {channel}{verified &&'✅'}</div>  
        {/* <div className ="channel" > {channel}{verified?'✅':null}</div> */}
      <div className ="views" >
        {views} views <span>.</span> {time}
       </div>
         <div>
          {children}
         </div>
       </div> 
    </> 
  );
} 

export default Video;

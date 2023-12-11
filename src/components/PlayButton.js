import "./PlayButton.css";
import{useState} from "react";
function PlayButton({message,children,onPlay,onPause}){ //onclick ek functin h or js m fun bhi as a prop or variable pass kiya ja skta h
        const [playing,setPlaying] = useState(false);

    function handleClick(e){   //e for event object
        console.log(e);
        e.stopPropagation(); // to  stop event bubbling 
          //con.log(msg) jb normal play button chlana tha custom event ni
          if(playing) onPause();
         else onPlay();
    
        setPlaying(!playing)  ;    
     }
    return(
<button onClick={handleClick}>{children}: {playing?"⏸":"▶️"}</button> // {/*playing ki value change ni hogi kyuki state variable change hota h react m */}
    )
}
export default PlayButton;
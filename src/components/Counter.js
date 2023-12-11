import{useState} from "react"; 

function    Counter(){
    console.log('render counter')
    const [number,setNumber] = useState(0); 

    function handleClick(e){
        e.stopPropagation();
        // setTimeout(()=>{
        //     setNumber(number+1);
        // },2000)
        setNumber(number=>number+1);  //value store hogi
        // setNumber(number=>number+1);
        // setNumber(number=>number+1);
        console.log(number);  //react m local variable update ni hote h UI M SO num ko state variable bnao 
    }

    return(
        <>
            <h1 style={{color:'white'}}>{number}</h1>
            <button onClick={handleClick}>Add</button>
        </>
    )
}
export default Counter ;
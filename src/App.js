
import { useState } from "react";
// 리액트내장되어 있는 상태메서드가져와
function App() { //컴포넌트 App 
  const styledata = {
        bodystyle : [ 
               ["red", "빨강", "첫번째탭의 내용입니다."],
               ["yellow","노랑", "두번째탭의 내용입니다."],
               ["blue","파랑", "세번째탭의 내용입니다."], 
               ["black","블랙", "네번째탭의 내용입니다."],
               ["pink","핑크", "다섯번째탭의 내용입니다."]
        ],
  } 
 const [bgcolor, setbgcolor ] = useState(0)

 document.body.style.backgroundColor = styledata.bodystyle[bgcolor][0] 

  return (    
   <div style={{textAlign : "center", marginTop : "100px"}}>
     {
      styledata.bodystyle.map((v, x)=>{
           return(
            <>
            <button key={`btn ${x}`} onClick={()=>{ setbgcolor(x) }}>{v[1]}</button>
            { bgcolor == x && <div>{`${v[2]}`}</div> }    
            </>
           )
      })       
     }      
   </div>
  );
}
export default App;
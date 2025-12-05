export default function Button() {
 const hello=()=> {
  alert("Hi from React");
};
  return ( 
    <>  
   <button onClick={hello} className='btn'>Click Me </button>
  </>
  )
}

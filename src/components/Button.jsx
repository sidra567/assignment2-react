import '../../src/index.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; 
export default function Button() {
 const greeting=()=> {
   Swal.fire({
  title: "Hello from React",
});
  }
  return ( 
    <>  
   <button onClick={greeting} className='btn'>Click Me </button>
  </>
  )
}

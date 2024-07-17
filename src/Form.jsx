import { useState } from "react"


const Form = ({close, CloseBtn}) => {


  const [title, setTittle] = useState("")
  const [description, setDescription] = useState("")
  const [error,setError]=useState(false)

  const handleForm=(event)=>{
    event.preventDefault()
    if(title=="" && description==""){
      setError(true)
     setTimeout(()=>{
      setError(false)
     },4000)
    }

  }
  return (
    <div style={{ display: close == false ? "block" : "" }} className='bg-black h-screen w-full absolute top-0'>
      <div className='flex justify-center mt-10 '>
        <form className='   text-white text-2xl  w-[340px] bg-slate-300 sm:w-[400px] h-[420px]  '>

          <i onClick={CloseBtn} class="fa-solid fa-x  ml-[290px] sm:ml-[350px] text-2xl text-black  "></i><br />
          {
            error==true?<p className="text-red-500   ml-8">fadlan form ka soo buuxi
              </p>:""
          }
          <input value={title} onChange={(event)=>{setTittle(event.target.value)}} className='mt-10  ml-4 sm:ml-10 w-[300px] h-[50px] border-2 border-black' type="text" placeholder='Enter title:' />
          <textarea value={description} onChange={(event)=>{setDescription(event.target.value)}} className='mt-5 ml-4  sm:ml-10 w-[300px]  border-2 border-black mb-7 text-white ' type='text' rows={4} placeholder='Enter title  :' />
          <button onClick={handleForm} className='text-4xl bg-blue-500  rounded  ml-4  sm:ml-10 w-[300px] h-[50px] pb-4'>Save</button>
        </form>
      </div>

    </div>
  )
}

export default Form 
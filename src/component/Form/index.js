import react, { useState } from "react"
import "./style.css"

const Form = ()=> {

    
    const [userData, setUserData] = useState({})
    const[studentList, setStudentList] = useState([])


    function handelFormSubmit(e){
        e.preventDefault()
        let data = [...studentList]
        data.push(userData)
        setUserData({})
        setStudentList(data)
        e.target.reset()
    }

    function handelChange(e){
        let data = {...userData}
        data[e.target.name] = e.target.value
        setUserData(data)
    

    }
    return(
        <div style = {{textAlign:"center", padding:"20px"}}>
            <h1>From </h1>
            <form onSubmit={handelFormSubmit}>
                <div style={{padding: "10px"}}> 
                    <input onChange={handelChange} type="text" name="name" placeholder="Enter your name" />
                </div>
                <div style={{padding: "10px"}}>
                    <input onChange={handelChange} type="email" name= "email" placeholder="Enter your email"/>
                </div>
                <div style={{padding: "10px"}}>
                    <input onChange={handelChange} type="number" name= "number" placeholder="Enter your number"/>
                </div>
                <div style={{padding: "10px"}}>
                    <select onChange={handelChange} name="Gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <div style={{padding:"10px"}}>
                    <button>Submit</button>
                </div>
            </form>
            {studentList.map((item, index)=>{
                return(
                <div className="container">
                <div className="list">{item.name}</div>
                <div className="list">{item.email}</div>
                <div className="list">{item.number}</div>
                <div className="list">{item.Gender}</div>

            </div>
                )

            })}
            
        </div>
    )
}

export default Form
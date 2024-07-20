import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { ClipLoader, DotLoader } from "react-spinners"
import { ContextHandler } from "../Context/Context"

const Users  = () => {
    const {userData, setUserData} = useContext(ContextHandler)
    const [loading, setLoading] = useState(false)
    const [first, setFirst] = useState(0)
    const [last, setLast] = useState(50)
    const [filter, setFilter] = useState('')

   

    

    const UserComp = (props) => {
    const [loader, setLoader] = useState(false)

        const loguserOut = (e) => {
            setLoader(true)
            axios.post('/auth/logout', 
            {
                "email": e
            })
            .then(res => {
                axios.get('/admin/users')
                    .then(res => {
                     setUserData(res.data.users)
                     
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
                    .finally(()=>{
                        setLoader(false)
                    })
    
            })
            .catch((error)=>{
                console.log(error)
            })
            
        }

        return (
            <>
            <div className="p-2 col-12 col-sm-6 col-md-3 ">
                                <div  className="card p-1" style={{fontSize:'12px'}}>
                                     <div>
                                         Name: {props.Name}
                                     </div>
                                     <div>
                                         Email: {props.Email}
                                     </div>
                                     <div>
                                         Subscription Date: {props.Subscription_date?  props.Subscription_date : 'None'}
                                     </div>

                                     <div className="text-center p-3">
                                             {loader ?
                                                 <ClipLoader size={20} />
                                                 :
                                                 <button disabled={!props.LoggedIn} onClick={() => loguserOut(props.Email)} className={`btn ${props.LoggedIn ? `btn-danger` : `btn-light`}`}>
                                                     {props.LoggedIn ?
                                                         'log user out'
                                                         :
                                                         'user is logged out'
                                                     }
                                                 </button>
                                             }
                                     </div>

                                </div>
                            </div>
            </>
        )
    }

    return (
        <>
            <div style={{}} className="p-4">
                <div className="text-end p-3">
                    <div className="input-group">
                        <input
                        onChange={(e)=> setFilter(e.target.value)}
                        type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
                    </div>
                </div>
                <div className="d-flex justify-content-between" style={{width:'100%'}}>
                    
                    <button disabled={first==0}
                    onClick={()=> {
                        setFirst(first-50)
                        setLast(last-50)
                    }} 
                    className="btn btn-outline-secondary rounded-0">Last</button>

                    <button disabled={
                        userData ? first < userData.length && last > userData.length 
                        :
                        userData}
                    onClick={()=> {
                        setFirst(first+50)
                        setLast(last+50)
                    }} 
                    className="btn btn-outline-secondary rounded-0">next</button>
                </div>
                <div className="row">
                    {loading ? 
                    <>
                        <div style={{height:"300px",display:'flex', justifyContent:'center',alignContent:'center', alignItems:'center', textAlign:'center'}}>
                        <DotLoader />
                        </div>
                    </>
                    : 
                    <>
                        {userData ?
                         userData
                         .filter(e => e.Email.includes(filter))
                         .slice(first,last)
                         .map((e)=> 
                         <>
                            <UserComp Name={e.Name} LoggedIn={e.LoggedIn} Email={e.Email} Subscription_date={e.Subscription_date} />
                         </>
                        )
                        :
                        'nothing'    
                    }
                    </>
                    }

                    

                </div>
            </div>
        </>
    )
}

export default Users
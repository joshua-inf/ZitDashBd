import axios from "axios"
import { useEffect, useState } from "react"
import { ClipLoader, DotLoader } from "react-spinners"

const Users  = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [loader, setLoader] = useState(false)
    const [first, setFirst] = useState(0)
    const [last, setLast] = useState(50)
    const [filter, setFilter] = useState('')

    const getdata = () => {
                setLoading(true)        
                axios.get("/users")
                .then(res => {
                 setUsers(res.data.users)
                 console.log(res.data.users.includes(e => e == ''))
                 
                })
                .catch((error)=>{
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })

    }

    const loguserOut = (e) => {
        setLoader(true)
        axios.post('/auth/logout', 
        {
            "email": e
        })
        .then(res => {
            axios.get('/admin/users')
                .then(res => {
                 setUsers(res.data.users)
                 console.log(res.data.users.includes(e => e == ''))
                 
                })
                .catch((error)=>{
                    console.log(error)
                })

        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(() => {
            setLoader(false)
        })
    }



    useEffect(()=>{
        getdata()
    },[])

    return (
        <>
            <div>
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
                        users ? first < users.length && last > users.length 
                        :
                        users}
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
                        {users ?
                         users
                         .filter(e => e.Email.includes(filter))
                         .slice(first,last)
                         .map((e)=> 
                         <>
                            <div className="p-2 col-12 col-sm-6 col-md-3 ">
                                <div  className="card p-1" style={{fontSize:'12px'}}>
                                     <div>
                                         Name: {e.Name}
                                     </div>
                                     <div>
                                         Email: {e.Email}
                                     </div>
                                     <div>
                                         Subscription Date: {e.Subscription_date?  e.Subscription_date : 'None'}
                                     </div>

                                     <div className="text-center p-3">
                                             {loader ?
                                                 <ClipLoader size={20} />
                                                 :
                                                 <button disabled={!e.LoggedIn} onClick={() => loguserOut(e.Email)} className={`btn ${e.LoggedIn ? `btn-danger` : `btn-light`}`}>
                                                     {e.LoggedIn ?
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
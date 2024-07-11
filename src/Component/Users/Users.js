import axios from "axios"
import { useEffect, useState } from "react"

const Users  = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const getdata = () => {
                setLoading(true)        
                axios.get('/admin/users')
                .then(res => {
                 console.log(res)
                 console.log('ok')
                })
                .catch((error)=>{
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })

    }

    useEffect(()=>{
        getdata()
    },[])

    return (
        <>
            <div>
                <div>
                    {loading ? <span  style={{fontStyle:'italic'}}>loading...</span> : ''}
                </div>
            </div>
        </>
    )
}

export default Users
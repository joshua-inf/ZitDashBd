import { useEffect } from "react"

const Home = () => {
    useEffect(()=>{
        console.log('ok')
    },[])
    const ContentCont = (props) => {
        return (
            <>
                <div className="shadow py-3 rounded-4" style={{ minWidth: '200px' }}>
                    <h5 className="text-center">{props.Title}</h5>
                    <h5 className="text-center">{props.Value}</h5>
                </div>
            </>
        )
    }
    return(
        <>
            <div  className="p-3">
                <div style={{display:'flex', flexWrap:'wrap', gap:'15px'}}>
                    <ContentCont Title="Paid Students" Value="3000"/>
                    <ContentCont Title="Total Students" Value="K3000"/>
                    <ContentCont Title="Total Students" Value="K3000"/>
                    <ContentCont Title="Total Students" Value="K3000"/>
                    <ContentCont Title="Total Students" Value="K3000"/>
                </div>
            </div>
        </>
    )
}

export default Home
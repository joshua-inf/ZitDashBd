import { NavLink } from "react-router-dom"

const UpperNav = () => {
    const Links = (props) => {
        return (
            <>
                <div className="my-1">
                    <NavLink to={props.Linkname}>
                    <div className="Linkinner px-3 py-2 h5">
                        {props.Title}
                    </div>
                    </NavLink>
                </div>
            </>
        )
    }
    return (
        <>
            <div style={{position:'fixed', zIndex:3, width:'100%'}}  className="px-4 py-3  bg-white d-flex">
                <div className="d-flex w-100 justify-content-between">
                    <div>
                        <h5 className="p-0 m-0">Hi There</h5>
                        <div style={{color:'#8F95B2', padding:0, margin:0}}>Let's check your progress today</div>
                    </div>
                    <div>
                        <div style={{display:'flex', gap:10}}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default UpperNav
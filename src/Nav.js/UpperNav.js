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
            <div style={{backgroundColor:'#ddd'}}  className="px-4 py-3  d-flex">
                <div className="d-flex w-100 justify-content-between">
                    <div>
                        <h5>Zitfuse</h5>
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
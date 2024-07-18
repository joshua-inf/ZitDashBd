import { Link, NavLink } from "react-router-dom"
import { Col, Nav } from "react-bootstrap"
import './Nav.css'

const MyNav = () => {
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
            <div style={{width:'150px'}}>
                <div className=" p-3 h-100" 
                style={{
                    position:'absolute',
                    bottom:0,
                    top:0,
                    zIndex:3,
                    backgroundColor:'white'
                    }}>
                    <div>
                        <Links Title="Dashbourd" Linkname="/"/>
                        <Links Title="Users" Linkname="/Users"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyNav
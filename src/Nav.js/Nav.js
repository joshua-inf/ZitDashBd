import { Link, NavLink } from "react-router-dom"
import { Col, Nav } from "react-bootstrap"
import image from '../images/splashit.png'
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
            <div style={{}}>
                <div className=" p-3 h-100 shadow" 
                style={{
                    position:'fixed',
                    bottom:0,
                    top:0,
                    zIndex:3,
                    backgroundColor:'white'
                    }}>
                        <div className="text-center">
                            <img src={image} alt="logo" width={100}/>
                            <div style={{flex:'wrap', color:'#FFC727'}} className="fw-bolder h5 mt-3">
                                ZitFuse
                            </div>
                            <div style={{flex:'wrap'}} className="p-3">
                                Your gateway to bright colors
                            </div>
                        </div>
                    <div>
                        <Links Title="Dashboard" Linkname="/"/>
                        <Links Title="Users" Linkname="/Users"/>
                        <Links Title="Courses" Linkname="/Courses"/>
                        <Links Title="Programs" Linkname="/Programs"/>
                        <Links Title="Videos" Linkname="/Videos"/>
                        <Links Title="Reels" Linkname="/Reels"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyNav
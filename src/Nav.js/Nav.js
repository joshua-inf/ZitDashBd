import { Link, NavLink } from "react-router-dom"
import { Nav } from "react-bootstrap"
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
            <div>
                <div className="bg-light p-3 h-100">
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
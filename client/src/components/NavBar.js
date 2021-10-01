import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import { Routes } from "./Routes";
import { useHistory, useLocation } from 'react-router'
const NavBar = () => {
    const history = useHistory()
    const {user, handleLogout } = useContext(AuthContext)
    const location = useLocation()
    const renderRoutes = () => {
    return Routes.map(({ pathname, title }) => {
        return(
            <Link to={pathname}>
                <Menu.Item active={location.pathname == pathname}>
                  {title}
                </Menu.Item>
            </Link>
    )})}
    const loginNavItems = () => {
        if (user) {
            return (
                <Menu.Item onClick={() => handleLogout(history)}>Logout</Menu.Item>
            )
        }
        return (
            <>
                <Link to="/login">
                    <Menu.Item active={location.pathname == "/login"}>Login</Menu.Item>
                </Link>
                <Link to="/register">
                    <Menu.Item active={location.pathname == "/register"}>
                        Register
                    </Menu.Item>
                </Link>
            </>
        )
    }
        return(
            <Menu>
                {renderRoutes()}
               <Menu.Menu postiion = "right">{loginNavItems()}</Menu.Menu>
            </Menu>
        )
    }
export default NavBar
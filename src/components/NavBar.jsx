import React, {useEffect, useState} from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const [path, setPath] = useState('');
    const nav = useNavigate();

    useEffect(() => {
        nav(path)
    }, [path]);

    return (
        <div className="NavBar">
            <header onClick={() => {setPath('/')}}>VisualBackprop</header>
            <header onClick={() => {setPath('/about')}}>About</header>
        </div>
    )
}

export default NavBar;
"use client"; 
import {useState, useEffect} from 'react';
import Link from 'next/link'
import routeList from "../../route/routeList"
import 'bootstrap/dist/css/bootstrap.css'

const Menu = () => {
    const [menus, setMenus] = useState([]);   
    useEffect(()=>{
        setMenus(routeList);
    },[]);

    return (
        <>
            <ul>
                <li>
                    <Link href="/">Index</Link>
                </li> 
                { menus.map( (list, index) => (
                    list.submenu.length > 0 ? (
                        <>
                        <li key={index} >
                        { list.name }
                            <ul>
                                { list.submenu.map( (sub_menu, _index) => (
                                    sub_menu.is_dynamic === false &&
                                    <li key={_index} >
                                        <Link href={ sub_menu.path }>{ sub_menu.name }</Link>
                                    </li>
                                )) }
                            </ul>
                        </li>
                        </>
                    ) : (   
                        list.is_dynamic === false &&                            
                        <li key={index} >
                            <Link href={ list.path }>{ list.name }</Link>
                        </li>                            
                    )                                
                ))}
            </ul>
        </> 
    )
}

export default Menu;
import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu,FiX  } from "react-icons/fi";

const Nav = ()=>{
    const [open, setOpen] = useState(false)
    const routes = [
        {id:1, path:'/',name:'Home'},
        {id:2, path:'/about',name:'About'},
        {id:3, path:'/service',name:'Services'},
        {id:4, path:'/contact',name:'Contact'},
        {id:5, path:'*',name:'Not Found'}
        ];
        return (
            <nav className="text-black p-6 bg-green-300">
                <div className=" md:hidden text-2xl" onClick={() => setOpen(!open)}>
                    {
                        open === true ? 
                        <FiX  />:<FiMenu className="" />
                    }
                    
                </div>
                <ul className={`md:flex duration-100 absolute md:static
                ${open ? 'top-16': '-top-60'}
                bg-green-300 px-6`}>
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>
            </nav>
        );
};


export default Nav;
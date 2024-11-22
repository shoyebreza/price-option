import Link from "../Link/Link";


const Nav = ()=>{
    const routes = [
        {id:1, path:'/',name:'Home'},
        {id:2, path:'/about',name:'About'},
        {id:3, path:'/service',name:'Services'},
        {id:4, path:'/contact',name:'Contact'},
        {id:5, path:'*',name:'Not Found'}
        ];
    return(
        <nav className="bg-green-300">
            <ul className="md:flex">
                {
                    routes.map(route=><Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};


export default Nav;
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"


const Layout=()=>{
    return(
        <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
            <div>
            <Sidebar/> 
            </div>
            <div className="flex flex-col flex-1 bg-slate-100">
				<Navbar />
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					<Outlet />
				</div>
            </div>
        </div>
    )
}


export default Layout
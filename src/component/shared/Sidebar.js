import { FcBullish } from 'react-icons/fc'
import classnames from "classnames"
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../lib/conts/Navigation'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineLogout } from 'react-icons/hi'

let LinkStyle='flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar(){
    return(
        <div className="bg-neutral-900 w-60 h-screen flex flex-col p-3 text-white">
             
                 <div className="flex items-center gap-2 px-1 py-2">
                      <FcBullish fontSize={24}/>
                      <span className='text-lg font-serif text-white'>My shop</span>
                 </div>

                 <div className='flex-1'>
                    {DASHBOARD_SIDEBAR_LINKS.map((items)=>(
                         <SidebarLink 
                         key={items.key} 
                         items={items} 
                         />
                    ))}
                 </div>

             <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
                 {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link)=>(
                    <SidebarLink 
                    key={link.key}
                    items={link}
                    />
                 ))}
                 <div className={classnames(LinkStyle,'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
             </div>
        </div>
    )
}

const SidebarLink=({items})=>{
    let {pathname} =useLocation()
    return(
        <Link 
        to={items.path}
        className ={classnames(pathname===items.path ? "bg-neutral-700 text-white" :"text-neutral-400", LinkStyle)}
        >
          <span >{items.icon}</span>
          <p>{items.label}</p>
        </Link>
    )
}
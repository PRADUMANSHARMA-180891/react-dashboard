import { Children } from "react"
import {IoBagHandle,IoCar,IoPieChart,IoPeople} from "react-icons/io5"
export default function DashboardStartGrid(){
        return(
            <div className="flex gap-4 w-full">
                <BoxWrapper>
                    <div className="rounded-full ml-2 bg-sky-500 flex items-center justify-center w-10 h-10">
                        <IoBagHandle className="text-white text-2xl"/>
                    </div>
                    <div className="ml-4">
                        <span className="text-base font-serif">Total seles</span>
                        <div className="">
                            <strong className="text-2xl">$330</strong>
                            <span className="text-blue-400 ml-4">+200</span>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="rounded-full ml-2 bg-sky-500 flex items-center justify-center w-10 h-10">
                        <IoPieChart className="text-white text-2xl"/>
                    </div>
                    <div className="ml-4">
                        <span className="text-base font-serif">Total Expenses</span>
                        <div className="">
                            <strong className="text-2xl">$330</strong>
                            <span className="text-blue-400 ml-4">+200</span>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="rounded-full ml-2 bg-sky-500 flex items-center justify-center w-10 h-10">
                        <IoPeople className="text-white text-2xl"/>
                    </div>
                    <div className="ml-4">
                        <span className="text-base font-serif">Total Customers</span>
                        <div className="">
                            <strong className="text-2xl">1230</strong>
                            <span className="text-red-600 ml-4">+800</span>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="rounded-full ml-2 bg-sky-500 flex items-center justify-center w-10 h-10">
                        <IoCar className="text-white text-2xl"/>
                    </div>
                    <div className="ml-4">
                        <span className="text-base font-serif">Total Orders</span>
                        <div className="">
                            <strong className="text-2xl">130</strong>
                            <span className="text-red-700 ml-4">-200</span>
                        </div>
                    </div>
                </BoxWrapper>
            </div>
              )
}

const BoxWrapper=({children})=>{
   return <div className="bg-white py-4 flex flex-1 items-center rounded-md border-1 border-gray-600">{children}</div>
}
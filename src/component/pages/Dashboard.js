import DashboardStartGrid from "../DashboardStartGrid";
import TransitionChart from "../TransactionChart";

export default function Dashboard(){
     return(
        <div className="flex flex-col gap-4">
           <DashboardStartGrid />
         <div className="flex flex-row gap-4 w-full">
				<TransitionChart />
				{/* <BuyerProfilePieChart /> */}
			</div>
        </div>
     )
}
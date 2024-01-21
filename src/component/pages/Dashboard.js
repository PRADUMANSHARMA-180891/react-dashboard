import BuyerPortfolioPiChart from "../BuyerPortfolioPiChart";
import DashboardStartGrid from "../DashboardStartGrid";
import PopularProduct from "../PopularProduct";
import RecentOrder from "../RecentOrder";
import TransitionChart from "../TransactionChart";

export default function Dashboard(){
     return(
        <div className="flex flex-col gap-4">
           <DashboardStartGrid />
         <div className="flex flex-row gap-4 w-full">
				<TransitionChart />
				<BuyerPortfolioPiChart />
			</div>
         <div className="flex flex-row gap-4 w-full">
				<RecentOrder />
            <PopularProduct />
			</div>
        </div>
     )
}
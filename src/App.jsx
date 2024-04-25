import { RevenueCard } from "./components/RevenueCard";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="overflow-y-auto ml-0 sm:ml-56 grid grid-cols-3">
        <RevenueCard
          title={"Amount Pending"}
          amount={"₹92,312.20"}
          orderCount={13}
        />
      </div>
    </div>
  );
}

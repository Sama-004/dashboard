import { RevenueCard } from "./components/RevenueCard";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      {/* <div className="ml-0 sm:ml-60 grid grid-cols-3"> */}
      <div className="ml-0 sm:ml-60 flex justify-evenly gap-5">
        <RevenueCard
          title={"Next Payout"}
          amount={"₹2,312.23"}
          orderCount={23}
          bgColor={"146eb4"}
          textColor={"white"}
        />
        <RevenueCard
          title={"Amount Pending"}
          amount={"₹92,312.20"}
          orderCount={13}
          textColor={"black"}
        />
        <RevenueCard title={"Amount Processed"} amount={"₹23,92,312.19"} />
      </div>
    </div>
  );
}

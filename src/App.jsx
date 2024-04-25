import { RevenueCard } from "./components/RevenueCard";

export default function App() {
  return (
    <div className="grid grid-cols-3">
      <RevenueCard
        title={"Amount Pending"}
        amount={"₹92,312.20"}
        orderCount={13}
      />
    </div>
  );
}

import { tableData } from "../data/table";
export default function Table() {
  return (
    <div>
      <div className="bg-white p-3 rounded-md">
        <div className="grid grid-cols-5 my-3 bg-[#F2F2F2] rounded-sm p-3 text-sm font-medium text-[#4D4D4D]">
          <div>Order Id</div>
          <div>Status</div>
          <div>Transatction Id</div>
          <div>Refund Date</div>
          <div className="place-self-end">Order Amount</div>
        </div>
        <div className="border-b-2">
          {tableData.map((row, orderId) => (
            <div
              key={orderId}
              className="grid grid-cols-5 my-3 rounded-sm px-3 text-sm font-medium text-[#4D4D4D]">
              <div className="text-[#146EB4]">{row.orderId}</div>
              <div className="flex items-center">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    row.status === "Successfull"
                      ? "bg-green-400"
                      : row.status === "Failed"
                      ? "bg-red-400"
                      : "bg-gray-400"
                  }`}></div>
                <div className="pl-1">{row.status}</div>
              </div>
              <div>{row.transactionId}</div>
              <div>{row.refundDate}</div>
              <div className="place-self-end">{row.orderAmount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

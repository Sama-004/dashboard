import { tableData } from "../data/table";
export default function Table() {
  return (
    <div className="overflow-x-auto">
      <table className="bg-white">
        <thread className="border">
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Transaction ID</th>
            <th>Refund Date</th>
            <th>Order Amount</th>
          </tr>
          <tbody>
            {tableData.map((row, orderId) => (
              <tr key={orderId}>
                <td className="text-blue-800">{row.orderId}</td>
                <td className="text-gray-600">{row.status}</td>
                <td className="text-gray-600">{row.transactionId}</td>
                <td className="text-gray-600">{row.refundDate}</td>
                <td className="text-gray-600">{row.orderAmount}</td>
              </tr>
            ))}
          </tbody>
        </thread>
      </table>
    </div>
  );
}

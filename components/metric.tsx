import { BsCashCoin } from 'react-icons/bs';
import { FaBoxOpen } from 'react-icons/fa';
import { FaUserClock } from 'react-icons/fa6';
type OrderAmount = {
  orderAmount: string;
  gatewayAmount: string;
  platformFee: string;
};

type OrderSummary = {
  count: number;
  amount: OrderAmount;
};

type Props = {
  orderdata: {
    data: {
      todayOrders: OrderSummary;
      weeklyOrders: OrderSummary;
      monthlyOrders: OrderSummary;
    };
    placedOrderCountAmount: OrderSummary;
    placedWarehouseOrderCountAmount: OrderSummary;
    totalDelayedOrders: number;
  };
};

const OrderOverview: React.FC<Props> = ({ orderdata }) => {
  const { data, placedOrderCountAmount, placedWarehouseOrderCountAmount, totalDelayedOrders } =
    orderdata;
  const { todayOrders, weeklyOrders, monthlyOrders } = data;

  const renderCard = (title: string, orders: OrderSummary) => (
    <div className={cardStyle}>
      <div className="mb-2 flex items-center space-x-2 text-xl font-semibold text-gray-800">
        <FaBoxOpen className="text-2xl text-blue-600" />
        <h3>{title}</h3>
      </div>
      <p className="text-lg text-gray-600">{orders.count}</p>
    </div>
  );

  const renderCard1 = (title: string, orders: OrderSummary) => (
    <div className={cardStyle}>
      <div className="mb-2 flex flex-col items-center">
        <BsCashCoin className="mb-1 text-3xl text-yellow-500" />
        <h3 className="text-center text-xl leading-tight font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-lg text-gray-600">₹{orders.amount.gatewayAmount}</p>
    </div>
  );
  const renderCard2 = (title: string, orders: number) => (
    <div className={cardStyle}>
      <div className="mb-2 flex items-center space-x-2 text-xl font-semibold text-gray-800">
        <FaUserClock className="text-2xl text-red-600" />
        <h3>{title}</h3>
      </div>
      <p className="text-lg text-gray-600">{orders}</p>
    </div>
  );

  const cardStyle = `
  flex w-full flex-col items-center justify-center 
  rounded-xl bg-white p-6 text-center shadow-sm border border-gray-200
  transition hover:shadow-md hover:bg-blue-50 hover:border-blue-300
`;

  return (
    <div className="space-y-4 px-4 md:px-10">
      <div className="mx-auto max-w-md">
        {renderCard2('Total Delayed Orders', totalDelayedOrders)}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {renderCard("Today's Orders", todayOrders)}
        {renderCard("Week's Orders", weeklyOrders)}
        {renderCard("Month's Orders", monthlyOrders)}
        {renderCard1("Today's Sale", todayOrders)}
        {renderCard1("Week's Sale", weeklyOrders)}
        {renderCard1("Month's Sale", monthlyOrders)}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
        {renderCard('Placed Orders', placedOrderCountAmount)}
        {renderCard('Warehouse Orders', placedWarehouseOrderCountAmount)}
        {renderCard1('Total Placed Sales', placedOrderCountAmount)}
        {renderCard1('Warehouse Sales', placedWarehouseOrderCountAmount)}
      </div>
    </div>
  );
};

export default OrderOverview;

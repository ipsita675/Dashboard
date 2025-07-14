import React from 'react';
import { FaCheckCircle, FaTruck, FaBox, FaUndo, FaClock, FaTimesCircle } from 'react-icons/fa';

type OrderStatusMetrics = {
  _count: number;
  _sum: {
    orderAmount: number;
    gatewayAmount: number;
    platformFee: number;
  };
  orderStatus: string;
};

type Props = {
  ordersByStatus: OrderStatusMetrics[];
};

const cardStyle = `
  flex flex-col items-center justify-center 
  rounded-xl bg-white p-6 text-center 
  border border-gray-200 shadow-sm
  hover:shadow-md hover:border-blue-200 hover:bg-blue-50
  transition-all duration-200
`;

const formatStatus = (status: string) =>
  status
    .replace(/_/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'DELIVERED':
      return <FaCheckCircle className="mb-1 text-3xl text-green-600" />;
    case 'PLACED':
    case 'PAYMENT_PENDING':
      return <FaClock className="mb-1 text-3xl text-yellow-500" />;
    case 'OUT_FOR_DELIVERY':
    case 'SHIPPED':
      return <FaTruck className="mb-1 text-3xl text-blue-500" />;
    case 'REJECTED_BY_DELIVERY_BOY':
    case 'REJECTED_BY_RETAILER':
    case 'REJECTED_BY_SUPER_ADMIN':
    case 'PRESCRIPTION_REJECTED':
      return <FaTimesCircle className="mb-1 text-3xl text-red-600" />;
    case 'CANCELED':
    case 'REFUND_INITIATED':
    case 'REFUND_COMPLETED':
      return <FaUndo className="mb-1 text-3xl text-gray-500" />;
    case 'PRESCRIPTION_APPROVED':
    case 'CONFIRMED_BY_RETAILER':
      return <FaCheckCircle className="mb-1 text-3xl text-blue-600" />;
    default:
      return <FaBox className="mb-1 text-3xl text-gray-400" />;
  }
};

const OrderStatusMetrics: React.FC<Props> = ({ ordersByStatus }) => {
  return (
    <div className="mt-12 px-4 md:px-8">
      <h2 className="mb-6 text-center text-2xl font-semibold">Order Status Metrics</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {ordersByStatus.map((item) => (
          <div key={item.orderStatus} className={cardStyle}>
            {getStatusIcon(item.orderStatus)}

            <h3 className="mt-2 text-sm font-bold tracking-wide text-gray-500 uppercase">
              {formatStatus(item.orderStatus)}
            </h3>

            <p className="mt-1 text-3xl font-bold text-gray-800">{item._count}</p>
            <span className="mt-1 text-xs text-gray-400">Orders</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatusMetrics;

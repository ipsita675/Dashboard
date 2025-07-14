import React from 'react';
import {
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaPrescriptionBottleAlt,
  FaPrescriptionBottle,
} from 'react-icons/fa';

type OrderStatusSummary = {
  _count: number;
  status: string;
};

type Props = {
  metrics: OrderStatusSummary[];
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
    case 'PENDING':
      return <FaClock className="mb-1 text-3xl text-yellow-500" />;
    case 'APPROVED':
      return <FaCheckCircle className="mb-1 text-3xl text-green-600" />;
    case 'REJECTED':
    case 'PRESCRIPTION_REJECTED':
      return <FaTimesCircle className="mb-1 text-3xl text-red-600" />;
    case 'ORDER_BY_PRESCRIPTION':
      return <FaPrescriptionBottleAlt className="mb-1 text-3xl text-blue-500" />;
    case 'PRESCRIPTION_REUPLOAD':
    case 'PRESCRIPTION_REUPLOADED':
      return <FaPrescriptionBottle className="mb-1 text-3xl text-purple-500" />;
    case 'PRESCRIPTION_APPROVED':
      return <FaCheckCircle className="mb-1 text-3xl text-blue-600" />;
    default:
      return null;
  }
};

const PrescriptionMetrics: React.FC<Props> = ({ metrics }) => {
  return (
    <div className="mt-12 px-4 md:px-8">
      <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
        Prescription Status Overview
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {metrics.map((item) => (
          <div key={item.status} className={cardStyle}>
            {getStatusIcon(item.status)}

            <h3 className="mt-2 text-sm font-bold tracking-wide text-gray-500 uppercase">
              {formatStatus(item.status)}
            </h3>

            <p className="mt-1 text-3xl font-bold text-gray-800">{item._count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PrescriptionMetrics;

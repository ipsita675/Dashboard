type MetricItem = {
  orderStatus: string;
  _count: { _all: number };
};

type Props = {
  warehouseMetrices: MetricItem[];
  orderMetrics: MetricItem[];
  totalAmt: number;
};

const formatKey = (key: string) =>
  key
    .replace(/_/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());

const Card = ({ label, count }: { label: string; count: number }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:bg-blue-50 hover:shadow-md">
      <h4 className="text-md mb-1 text-center font-semibold tracking-wide text-gray-500">
        {formatKey(label)}
      </h4>
      <p className="text-center text-xl font-bold text-gray-800">{count}</p>
    </div>
  );
};

const Warehouse: React.FC<Props> = ({ warehouseMetrices, orderMetrics, totalAmt }) => {
  return (
    <div className="mt-10 space-y-12 px-4 md:px-8">
      <section>
        <h3 className="mb-4 border-b border-b-gray-200 text-2xl font-semibold">
          Warehouse Metrics
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
          {warehouseMetrices.map((item) => (
            <Card key={item.orderStatus} label={item.orderStatus} count={item._count._all} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-4 border-b border-b-gray-200 text-2xl font-semibold">Order Metrics</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {orderMetrics.map((item) => (
            <Card key={item.orderStatus} label={item.orderStatus} count={item._count._all} />
          ))}
        </div>
      </section>

      <div className="mt-4 text-center">
        <span className="inline-block rounded-xl bg-blue-100 px-6 py-3 text-sm font-semibold tracking-wide text-blue-800 shadow-sm">
          Total Amount: ₹{totalAmt.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Warehouse;

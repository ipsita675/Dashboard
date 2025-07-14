'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

type SalesData = {
  datePart: string;
  orderCount: number;
  totalOrderAmount: number;
  totalGatewayAmount: number;
  totalPlatformFee: number;
}[];

const SalesGraph = ({ data }: { data: SalesData }) => {
  const sales = [...data].reverse();
  return (
    <div className="mt-10 space-y-10">
      <section>
        <h3 className="mb-2 ml-2 text-lg font-semibold">Order Count vs Date</h3>
        <div className="h-72 w-full rounded-xl border bg-white p-4 shadow">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sales}>
              <defs>
                <linearGradient id="colorOrderCount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="datePart"
                fontSize={14}
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })
                }
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="orderCount"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorOrderCount)"
                name="Order Count"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section>
        <h3 className="mb-2 ml-2 text-lg font-semibold">Total Gateway Amount vs Date</h3>
        <div className="h-72 w-full rounded-xl border bg-white p-4 shadow">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sales}>
              <defs>
                <linearGradient id="colorGateway" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="datePart"
                fontSize={14}
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })
                }
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="totalGatewayAmount"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorGateway)"
                name="Total Gateway Amount"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default SalesGraph;

'use client';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Tab2 from './tabs2';
import Tab3 from './tabs3';
import OrderMetric from '../metric';
import PrescriptionMetrics from '../prescription';
import OrderStatusMetrics from '../orderStatus';
import UserAdminMetrics from '../userAdminMetrics';
import SalesGraph from '../salesGraph';

import { orderdata } from '../../src/data/orders';
import { metrics } from '../../src/data/prescriptionMetrics';
import { ordersByStatus } from '../../src/data/ordersStatus';
import { userAdminData } from '../../src/data/userAdminData';
import { salesData } from '../../src/data/graphData';

export default function DashboardTabs() {
  return (
    <div className="space-y-12 px-4 md:px-10">
      <Tabs selectedTabClassName="text-blue-600 bg-gray-200" className="space-y-8">
        <TabList className="text-md grid grid-cols-6 gap-2 rounded-xl bg-gray-100 p-3 text-center font-medium">
          <Tab className="cursor-pointer rounded-lg px-4 py-2 transition duration-150 hover:bg-gray-200">
            Overview
          </Tab>
          <Tab className="cursor-pointer rounded-lg px-4 py-2 transition duration-150 hover:bg-gray-200">
            Orders
          </Tab>
          <Tab className="cursor-pointer rounded-lg px-4 py-2 transition duration-150 hover:bg-gray-200">
            Retailer & Pharmacy
          </Tab>
          <Tab className="cursor-pointer rounded-lg px-4 py-2 transition duration-150 hover:bg-gray-200">
            Warehouse
          </Tab>
          <Tab className="cursor-pointer rounded-lg px-4 py-2 transition duration-150 hover:bg-gray-200">
            Users
          </Tab>
          <Tab className="cursor-pointer rounded-lg px-4 py-2 transition duration-150 hover:bg-gray-200">
            Analytics
          </Tab>
        </TabList>

        <TabPanel>
          <div className="space-y-10">
            <OrderStatusMetrics ordersByStatus={ordersByStatus} />
            <PrescriptionMetrics metrics={metrics} />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="mt-8">
            <OrderMetric orderdata={orderdata} />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="mt-8">
            <Tab2 />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="mt-8">
            <Tab3 />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="mt-8">
            <UserAdminMetrics {...userAdminData} />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="mt-8">
            <SalesGraph data={salesData} />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

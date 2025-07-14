'use client';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Retail from '../retail';
import { retailData } from '../../src/data/retailData';

export default function TabsComponent() {
  return (
    <div className="mt-10 flex justify-center">
      <Tabs defaultIndex={0} className="w-full max-w-6xl">
        <TabList className="mx-auto flex w-fit space-x-4 rounded-full bg-gray-200 p-1">
          <Tab
            className="cursor-pointer rounded-full px-6 py-2 text-sm font-semibold transition-all outline-none"
            selectedClassName="bg-white text-blue-600 shadow"
          >
            Today
          </Tab>
          <Tab
            className="cursor-pointer rounded-full px-6 py-2 text-sm font-semibold transition-all outline-none"
            selectedClassName="bg-white text-blue-600 shadow"
          >
            All Time
          </Tab>
        </TabList>

        <TabPanel>
          <Retail data={retailData.today} />
        </TabPanel>

        <TabPanel>
          <Retail data={retailData.allTime} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

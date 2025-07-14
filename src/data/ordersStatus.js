export const ordersByStatus = [
  // 🟡 In Progress
  {
    _count: 543,
    _sum: {
      orderAmount: 211845.605,
      gatewayAmount: 198097.790259,
      platformFee: 1327.32,
    },
    orderStatus: 'PLACED',
  },
  {
    _count: 285,
    _sum: {
      orderAmount: 151387.7885,
      gatewayAmount: 143338.404197,
      platformFee: 640.02,
    },
    orderStatus: 'PAYMENT_PENDING',
  },
  {
    _count: 48,
    _sum: {
      orderAmount: 10321.47,
      gatewayAmount: 10024.5059,
      platformFee: 112.36,
    },
    orderStatus: 'CONFIRMED_BY_RETAILER',
  },
  {
    _count: 2,
    _sum: {
      orderAmount: 42.08,
      gatewayAmount: 59.98,
      platformFee: 20,
    },
    orderStatus: 'SHIPPED',
  },
  {
    _count: 5,
    _sum: {
      orderAmount: 18811.535,
      gatewayAmount: 18810.454568,
      platformFee: 0,
    },
    orderStatus: 'OUT_FOR_DELIVERY',
  },

  // ✅ Completed
  {
    _count: 365,
    _sum: {
      orderAmount: 84356.5695,
      gatewayAmount: 79717.583678,
      platformFee: 868.63,
    },
    orderStatus: 'DELIVERED',
  },

  // ❌ Rejected / Cancelled
  {
    _count: 39,
    _sum: {
      orderAmount: 21235.29,
      gatewayAmount: 19681.30512,
      platformFee: 55.63,
    },
    orderStatus: 'REJECTED_BY_RETAILER',
  },
  {
    _count: 8,
    _sum: {
      orderAmount: 1608.65,
      gatewayAmount: 1658.165,
      platformFee: 0.62,
    },
    orderStatus: 'REJECTED_BY_DELIVERY_BOY',
  },
  {
    _count: 8,
    _sum: {
      orderAmount: 12607.6,
      gatewayAmount: 11944.63205,
      platformFee: 0,
    },
    orderStatus: 'REJECTED_BY_SUPER_ADMIN',
  },
  {
    _count: 63,
    _sum: {
      orderAmount: 14868.655,
      gatewayAmount: 17804.950691,
      platformFee: 0,
    },
    orderStatus: 'CANCELED',
  },

  // 🔁 Refunds
  {
    _count: 7,
    _sum: {
      orderAmount: 2513.14,
      gatewayAmount: 2102.10544,
      platformFee: 19.32,
    },
    orderStatus: 'REFUND_INITIATED',
  },
  {
    _count: 10,
    _sum: {
      orderAmount: 560,
      gatewayAmount: 429.25,
      platformFee: 2.22,
    },
    orderStatus: 'REFUND_COMPLETED',
  },
];

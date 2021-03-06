const orders = [
    {
      orderId: '123',
      customerId: '123',
      deliveryDate: '01-01-2020',
      delivered: true,
      items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
      ],
    },
    {
      orderId: '234',
      customerId: '234',
      deliveryDate: '01-02-2020',
      delivered: false,
      items: [{ productId: '234', price: 30 }],
    },
    {
      orderId: '345',
      customerId: '234',
      deliveryDate: '05-01-2020',
      delivered: true,
      items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
      ],
    },
    {
      orderId: '456',
      customerId: '345',
      deliveryDate: '12-01-2020',
      delivered: true,
      items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
      ],
    },
    {
      orderId: '578',
      customerId: '456',
      deliveryDate: '12-01-2020',
      delivered: true,
      items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
      ],
    },
  ];
  
  // 1)Get a list of the orders for the customer ID 234 that have not been delivered.
  console.log(orders.filter((item) => !item.delivered && item.orderId === '234'));
  
  
  // 2)Create a new property on each order with the total price of items ordered.
  console.log(
    orders.map((order) => {
      const totalPrice = order.items.reduce((acc, curr) => acc + curr.price, 0);
      return { ...order, totalPrice };
    })
  );
  
  
  // 3)Does all the orders have been delivered?
  console.log(orders.every((order) => order.delivered));
  
  
  // 4)Has the customer with ID '123' made any orders?
  console.log(orders.some((order) => order.customerId === '123'));
  
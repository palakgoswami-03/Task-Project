import Order from "../models/order.js";

// Total sales per month
export const totalSalesPerMonth = async (req, res) => {
  const sales = await Order.aggregate([
    { $unwind: "$products" },
    { $group: {
        _id: { month: { $month: "$date" }, year: { $year: "$date" } },
        totalSales: { $sum: { $multiply: ["$products.quantity","$products.price"] } }
    }},
    { $sort: { "_id.year":1, "_id.month":1 } }
  ]);
  res.json(sales);
};

// Number of orders per customer
export const ordersPerCustomer = async (req, res) => {
  const orders = await Order.aggregate([
    { $group: { _id: "$customer", totalOrders: { $sum: 1 } } }
  ]);
  res.json(orders);
};

// Top 5 best-selling products
export const topProducts = async (req, res) => {
  const top = await Order.aggregate([
    { $unwind: "$products" },
    { $group: { _id: "$products.product", totalSold: { $sum: "$products.quantity" } } },
    { $sort: { totalSold: -1 } },
    { $limit: 5 }
  ]);
  res.json(top);
};

// Average order value
export const averageOrderValue = async (req, res) => {
  const avg = await Order.aggregate([
    { $project: {
        totalAmount: { $sum: { $map: { input:"$products", as:"p", in: { $multiply:["$$p.quantity","$$p.price"] } } } }
    }},
    { $group: { _id:null, averageOrderValue: { $avg:"$totalAmount" } } }
  ]);
  res.json(avg[0]);
};

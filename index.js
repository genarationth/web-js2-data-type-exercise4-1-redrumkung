const Products = {
  product_id: 1,
  product_name: "ghost bear",
  quantity_in_stock: 19,
  unit_price: 300,
  product_description: {
    product_brand: "shinwoo",
    size_or_quantity: ["small","large"],
    taste_or_scent: ["grape","melon","orange"],
    color: ["red", "green", "blue"],
    additional_description: "Arts toy",
  },
};

Products.product_description.product_brand = "test"

console.log(Products);
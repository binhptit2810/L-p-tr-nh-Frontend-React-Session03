type Product = {
  id: string;
  name: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
  discount?: number; // optional
};
function getFinalPrice(product: Product): number {
  if (product.discount) {
    return product.price * (1 - product.discount / 100)
  }
  return product.price;
}
function printProductInfo(product: Product): void {
  console.log(`Sản phẩm: ${product.name}`);
  console.log(`Danh mục: ${product.category.name}`)
  console.log(`Giá gốc: ${product.price} VND`)
  if (product.discount) {
    console.log(`Giảm giá: ${product.discount}%`)
    console.log(`Giá sau giảm: ${getFinalPrice(product).toFixed(0)} VND`)
  } else {
    console.log(`Không có giảm giá.`)
  }
  console.log('--------------------------')
}
let listProduct: Product[] = [
  {
    id: "p1",
    name: "Cao su",
    price: 10000,
    category: { id: "c1", name: "Đồ dùng" },
    discount: 5
  },
  {
    id: "p2",
    name: "Bánh mì",
    price: 15000,
    category: { id: "c2", name: "Thực phẩm" }
  },
  {
    id: "p3",
    name: "Xúc xích",
    price: 25000,
    category: { id: "c2", name: "Thực phẩm" },
    discount: 10
  }
];
for (let product of listProduct) {
  printProductInfo(product);
}

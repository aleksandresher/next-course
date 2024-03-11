import React from "react";
import Link from "next/link";

const ProductList = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <ul>
        <li>
          <Link href="products/1">Product 1</Link>
        </li>
        <li>
          <Link href="products/2">Product 2</Link>
        </li>
        <li>
          <Link href="products/3" replace>
            Product 3
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ProductList;

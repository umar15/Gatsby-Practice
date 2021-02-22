import React from "react";
import { Router } from "@reach/router";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import ProductOne from "../components/Product1";
import ProductTwo from "../components/Product2";
import Main from "../components/Main";

const Product = () => {
	return (
		<Layout>
			<h1>See Products</h1>
			<div>
				<Link to="/product/page1">Product 1</Link>
				<br />
				<Link to="/product/page2">Product 2</Link>
			</div>
			<Router basepath="/product/">
				<ProductOne path="/page1" />
				<ProductTwo path="/page2" />
				<Main path="/" />
			</Router>
		</Layout>
	);
};

export default Product;

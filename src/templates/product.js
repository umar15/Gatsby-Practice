import React from "react";
import Layout from "../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Product = ({ pageContext }) => {
	console.log(pageContext);
	const { itemDetails } = pageContext;
	return (
		<Layout>
			<h3>{itemDetails.title}</h3>
			<p>{documentToReactComponents(itemDetails.desc.json)}</p>
		</Layout>
	);
};

export default Product;

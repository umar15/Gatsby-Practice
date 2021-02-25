import React from "react";
import { Formik } from "formik";

const Basic = () => (
	<div>
		<h1>Messages</h1>
		<Formik
			initialValues={{ message: "" }}
			validate={(values) => {
				const errors = {};
				if (!values.message) {
					errors.message = "Required";
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				console.log(values);
				fetch(`/.netlify/functions/add_message`, {
					method: "post",
					body: JSON.stringify(values),
				})
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
					});
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
			}) => (
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="message"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.message}
					/>
					{errors.message && touched.message && errors.message}
					<button type="submit" disabled={isSubmitting}>
						Add message
					</button>
				</form>
			)}
		</Formik>
	</div>
);

export default Basic;

// import * as React from "react";
// import Layout from "../components/Layout";

// // markup
// const IndexPage = () => {
// 	return (
// 		<div>
// 			<Layout>
// 				<h3>Home Page</h3>
// 			</Layout>
// 		</div>
// 	);
// };

// export default IndexPage;

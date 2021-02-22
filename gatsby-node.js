// for client side routes
exports.onCreatePage = async ({ page, actions }) => {
	const { createPage } = actions;
	if (page.path.match(/^\/product/)) {
		page.matchPath = "/product/*";
		createPage(page);
	}
};

// FOr server side dynamic paths
// exports.createPages = async function ({ actions }) {
// 	actions.createPage({
// 		path: "fruits",
// 		component: require.resolve(`./src/templates/fruits.js`),
// 		context: {
// 			name: "mango",
// 			desc: "This is mango description",
// 		},
// 	});
// };

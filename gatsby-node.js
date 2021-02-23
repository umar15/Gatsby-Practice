var path = require("path");

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions;
	const result = await graphql(`
		{
			allContentfulElectronics {
				nodes {
					slug
					title
					desc {
						raw
					}
				}
			}
		}
	`);
	console.log(JSON.stringify(result));
	result.data.allContentfulElectronics.nodes.forEach((obj) => {
		createPage({
			path: `/product/${obj.slug}`,
			component: path.resolve("./src/templates/product.js"),
			context: {
				itemDetails: obj,
			},
		});
	});
};

// for client side routes
// exports.onCreatePage = async ({ page, actions }) => {
// 	const { createPage } = actions;
// 	if (page.path.match(/^\/product/)) {
// 		page.matchPath = "/product/*";
// 		createPage(page);
// 	}
// };

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

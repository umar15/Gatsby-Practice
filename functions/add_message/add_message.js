const faunadb = require("faunadb"),
	q = faunadb.query;

require("dotenv").config();

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event, context) => {
	if (event.httpMethod !== "POST") {
		return { statusCode: 405, body: "Method Not Allowed" };
	}
	try {
		const messageBody = JSON.parse(event.body);
		if (process.env.FAUNADB_ADMIN_SECRET) {
			var client = new faunadb.Client({
				secret: process.env.FAUNADB_ADMIN_SECRET,
			});
			var result = await client.query(
				q.Create(q.Collection("posts"), {
					data: { title: messageBody.message },
				})
			);
			// console.log("result" + result);
		} else {
			console.log("No faunadb admin secret key");
		}
	} catch (error) {
		console.log("Error" + error);
	}

	// const subject = event.queryStringParameters.name || "World";
	return {
		statusCode: 200,
		body: JSON.stringify({ message: result.ref.id }),
		// // more keys you can return:
		// headers: { "headerName": "headerValue", ... },
		// isBase64Encoded: true,
	};
};

module.exports = { handler };

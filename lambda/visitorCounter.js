const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const tableName = "VisitorCount";

exports.handler = async () => {
  const params = {
    TableName: tableName,
    Key: { id: "counter" },
    UpdateExpression: "ADD visits :inc",
    ExpressionAttributeValues: { ":inc": 1 },
    ReturnValues: "UPDATED_NEW",
  };

  const result = await dynamoDb.update(params).promise();
  return {
    statusCode: 200,
    body: JSON.stringify(result.Attributes),
  };
};

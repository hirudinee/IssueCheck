let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	//fail
	sns.publish({
		Message: 'this is a test message',
		Subject: 'test',
		MessageAttributes: {
			'test': {
				DataType: 'String',
				StringValue: '123'
			},
			'test1': {
				DataType: 'Number',
				StringValue: '456'
			},
			'sample': {
				DataType: 'Binary',
				BinaryValue: '001'
			},
		},
		MessageStructure: 'String',
		TopicArn: 'arn:aws:sns:us-east-1:263248768798:Testtopic'
	}).promise()
		.then(data => {
			// your code goes here
		})
		.catch(err => {
			// error handling goes here
		});

	callback(null, 'Successfully executed');
}
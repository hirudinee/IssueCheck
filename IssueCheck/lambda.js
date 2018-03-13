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
			console.log('sns publish ', data);
		})
		.catch(err => {
			// error handling goes here
			console.log('sns publish error', err);
		});

	sns.getTopicAttributes({
		TopicArn: 'arn:aws:sns:us-east-1:263248768798:Testtopic'
	}).promise()
		.then(data => {
			// your code goes here
			console.log('get topic attributes ', data);
		})
		.catch(err => {
			// error handling goes here
			console.log('error occurred get topic attributes ', err);
		});


	sns.listSubscriptionsByTopic({
		TopicArn: 'arn:aws:sns:us-east-1:263248768798:Testtopic'
	}).promise()
		.then(data => {
			// your code goes here
			console.log('list subscriptions by topic ', data);
		})
		.catch(err => {
			// error handling goes here
			console.log('error occurred list subscriptions by topic ', err);
		});

	sns.setTopicAttributes({
		AttributeName: 'DeliveryPolicy',
		AttributeValue: 'sample edit',
		TopicArn: 'arn:aws:sns:us-east-1:263248768798:Testtopic'
	}).promise()
		.then(data => {
			// your code goes here
			console.log('set topic attributes ', data);
		})
		.catch(err => {
			// error handling goes here
			console.log('error occurred set topic attributes ', err);
		});

	// sns.subscribe({
	// 	Protocol: 'email',
	// 	Endpoint: 'hirudinee@adroitlogic.com',
	// 	TopicArn: 'arn:aws:sns:us-east-1:263248768798:Testtopic'
	// }).promise()
	// 	.then(data => {
	// 		// your code goes here
	// 		console.log('subscription ', data);
	// 	})
	// 	.catch(err => {
	// 		// error handling goes here
	// 		console.log('subscription errors ', data);
	// 	});

	// sns.confirmSubscription({
	// 	Token: '2336412f37fb687f5d51e6e241da92fd76847fb23d977cc3ef7e4b9ffe92d72f0fd398c3b80ea11a9cda6b1bfef86cf3d27eee282a35ce0118b5c62223daf63e00e2601e2afd54a6934e66367c21a71fae7945a30c46d089e5df45e05c63ab370f1d3bb82574f6d77492a760b7afaa9f',
	// 	TopicArn: 'arn:aws:sns:us-east-1:263248768798:Testtopic',
	// 	AuthenticateOnUnsubscribe: 'false'
	// }).promise()
	// 	.then(data => {
	// 		// your code goes here
	// 		console.log('confirm subscription ', data);
	// 	})
	// 	.catch(err => {
	// 		// error handling goes here
	// 		console.log('confirm subscription error', err);
	// 	});

	sns.unsubscribe({
		SubscriptionArn: 'arn:aws:sns:us-east-1:263248768798:Testtopic:40abf061-4473-4cb5-b7bd-ed9973a8a76f'
	}).promise()
		.then(data => {
			// your code goes here
			console.log('remove subscription ', data);
		})
		.catch(err => {
			// error handling goes here
			console.log('remove subscription ', err);
		});


	callback(null, 'Successfully executed');
}
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

var table = null;

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public/'));

MongoClient.connect("mongodb://root:root1234@linus.mongohq.com:10073/mongodb", function(err, db) {
	if(!err) {
	  console.log("We are connected");
	  table = db.collection('test');
	}
});

app.get('/addMember', function(request, response) {

	var tmp = {
		name : request.query.name,
		surname : request.query.surname,
		phone : request.query.phone,
		address : request.query.address
	};

	table.insert(tmp,function(err,result){
		if(err){ throw err; }
		else response.send(result);
	});
	

});

app.get('/getMember',function(res,req){
	table.find().toArray(function(err,result){
		if(err)
			throw err;
		res.send(result);
	});
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

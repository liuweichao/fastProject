var fs = require('fs')
var path = 'page'


fs.readdir(path, function(err, files){
	//err 为错误 , files 文件名列表包含文件夹与文件
	if(err){
		console.log('error:\n' + err);
		return;
	}
	var arr = [];
	files.forEach(function(file,i){
		fs.stat(path + '/' + file, function(err, stat){
			if(err){console.log(err); return;}
			var obj = {};
			obj.name = path + '/' + file.split('.')[0]
			arr.push(obj);
			if( i === (files.length - 1) ){
				console.log( arr );
			}
		});

	});

});
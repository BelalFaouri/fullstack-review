const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = new mongoose.Schema({
  name:String,
  url:String,
  private:Boolean,
  description:String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {

  for (var i = 0; i < data.length; i++) {
  	   repo =new Repo({
  	   	    name:data[i].name,
  			url:data[i].url,
  			private:data[i].private,
  			description:data[i].description

  	   })
  repo.save(function(err, repo){
  	if(err){
  	 // console.error(err,null);
  	}else{
  		// console.log(repo)
  	}
  })
  }
}



module.exports.save = save;
module.exports.Repo = Repo;

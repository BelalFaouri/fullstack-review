const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  name:String,
  url:String,
  private:Boolean,
  description:String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  	
   repo =new Repo(data)

  repo.save(function(err, data){
  	if(err){
  	 console.error(err);
  	}
  	else{
  		// console.log(data);
  	}
  })
}

module.exports.save = save;
module.exports.Repo = Repo;
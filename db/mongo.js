const Agencies = require('./models/blog');
//ObjectId = require('mongodb').ObjectID;
console.log("This is mongo Page");

function Mongo() {
}

Mongo.prototype = (function () {

    return {

        getAgencies: async function (req, res) {

            try{
                const listOfAgencies = await Agencies.find();
                console.log('Agency List');
                res.send({status : 'success', listOfAgencies : listOfAgencies});
                console.log(listOfAgencies);
            }
            catch(err){

                return res.send({status : 'error' , error_message : err})
            }
        },

        getAgenciesId : async function (req,res){

            try{
                const agency = await Agencies.findById(req.params.id);
                console.log('Single current Post');
                res.send({status : 'success', agency : agency});
                console.log(agency);

            }
            catch(err){
                return res.send({status : 'error' , error_message : err})
            }
        }

    }

})();


const mongo = new Mongo();

module.exports = mongo;

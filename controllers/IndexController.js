class IndexController{
    async home(req, res){
        return res.render("index", {name : "Femi Fatokun"});
    }
}

module.exports = new IndexController();
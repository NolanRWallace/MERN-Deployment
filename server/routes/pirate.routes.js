const PirateController = require("../controller/pirate.controller")

module.exports = function(app){
    app.get("/api/pirates", PirateController.allPirates);
    app.get("/api/pirates/:id", PirateController.OnePirate);
    app.post("/api/pirates/new", PirateController.newPirate);
    app.delete("/api/pirates/:id", PirateController.DeletePirate);
    app.put("/api/pirates/:id", PirateController.UpdatePirate);
}
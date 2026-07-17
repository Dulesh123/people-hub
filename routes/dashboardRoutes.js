const getDashboard = require("../controllers/dashboard/GetDashboard");

module.exports = (app) => {

    // Dashboard Statistics
    app.get("/dashboard", (req, res) => {
        getDashboard(req, res);
    });

};
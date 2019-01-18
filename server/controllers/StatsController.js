const StatsService = require("../services/StatsService");
const IService = require("../services/ServiceWrapper")(StatsService);

module.exports = {
    GetStats: async (req, res, next) => {
        try {
            var data = await IService.GetStats();
            return res.json(data);
        }
        catch (e) {
            return next(e);
        }
    }
}
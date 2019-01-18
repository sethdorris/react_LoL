module.exports = (service) => {
    return {
        GetStats: () => {
            return service.getStats();
        }
    }
}
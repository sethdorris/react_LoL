const axios = require("axios");
const key = process.env.StatsAPIKey;
const GetSummonerUrl = "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/BruiseR";
const GetMatchesByAccountId = "https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/";
const GetMatchDetailsUrl = "https://na1.api.riotgames.com/lol/match/v3/matches/";

GetMatchDetails = async (mid) => {
    //silly goose using new Promise around a promise-based API in axios ..should fix.
    return new Promise((resolve, reject) => {
        return axios.get(`${GetMatchDetailsUrl}${mid}?api_key=${key}`).then(data => {
            return resolve(data.data);
        })

    })
}

module.exports = {
    getStats: async () => {
        let summonerGet = await axios.get(`${GetSummonerUrl}?api_key=${key}`);
        let summonerData = summonerGet.data;

        console.log(`${GetMatchesByAccountId}${summonerData.accountId}`);
        let matchesGet = await axios.get(`${GetMatchesByAccountId}${summonerData.accountId}?api_key=${key}&beginIndex=0&endIndex=4`);
        let matchesData = matchesGet.data;

        let matchDetailsGet = matchesData.matches.map(match => GetMatchDetails(match.gameId));

        let matchDetails = await Promise.all(matchDetailsGet);

        console.log(matchDetails)

        return {
            summoner: summonerData,
            matches: matchesData,
            matchDetails: matchDetails
        }

    }
}

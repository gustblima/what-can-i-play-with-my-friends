"use strict"
const config = require('../config')
const axios = require('axios')

exports.resolveCanonicalNames = (ids) => {
    let canonicalIds = []
    let promises = []
    ids.forEach((value) => {
        promises.push(
            axios.get(`http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${config.STEAM_API_KEY}&vanityurl=${value}`)
                .then((resp) => {
                    if(resp.data.response.success === 1){
                        canonicalIds.push(resp.data.response.steamid)
                    }
                    else{
                        canonicalIds.push(value)
                    }
                }, (error) => {

                })
            )
    })
    return Promise.all(promises).then((array) => {
        return canonicalIds
    })
}

exports.getLibraries = (ids) => {
    let libraries = []
    let gamesInfo = null
    let promises = []
    for(let i = 0; i < ids.length; i++){
        promises.push(
            axios.get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${config.STEAM_API_KEY}&steamid=${ids[i]}&format=json&include_appinfo=1&include_played_free_games=1`)
                .then((resp) => {
                    if(resp.data.response.games != undefined){
                        libraries.push(resp.data.response.games.map((item) => item.appid));
                        if(i == 0){
                            gamesInfo = resp.data.response.games
                        }
                    }
                }, (error) =>{
                    console.log(error);
                }
            )
        )
    }
   
    return Promise.all(promises).then((resp) => {
        return [gamesInfo, libraries]
    })
}




exports.getAllFriendsList = (id) => {
    return axios.get(`http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${config.STEAM_API_KEY}&steamid=${id}&relationship=friend`)
    .then((resp) => {
        if(resp.data.friendslist === undefined){
            throw "Error";
        }
        return resp.data.friendslist.friends
    })
}



exports.getUsersInfo = (ids) => {
    let promises = []
    let infos = []
    for(let i = 0; i < ids.length; i += 100){
        let params = ids.slice(i, i+100).join(',');
        promises.push(
            axios.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${config.STEAM_API_KEY}&steamids=${params}`)
                .then((resp) => {
                    if(resp.data.response === undefined){
                        throw "Error";
                    }
                    
                    resp.data.response.players.forEach((item) => {
                        infos.push({
                            item: item.steamid,
                            profileurl: item.profileurl,
                            avatar: item.avatarmedium,
                            personaname: item.personaname,
                            lastlogoff: item.lastlogoff,
                            public: item.communityvisibilitystate  === 1 ? false : true 
                        })
                    })
            })
        )
    }

    return Promise.all(promises).then((resp) => {
        return [infos]
    })

    
}

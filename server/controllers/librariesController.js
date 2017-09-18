"use strict"
const steamApi = require('..//utils/steamApi')
const osmosis = require('osmosis')


exports.getAllLibraries = (req, res) => {
    let ids = req.query.users.split(',')
    let gamesInfo = null
   steamApi.getLibraries(ids)
    .then((resp) => {
        gamesInfo = resp[0]
        return resp[1]
    }).then((resp) => {
        if(gamesInfo == undefined){
            return res.json([]);
        }
        let intersectedLibraries = intersectLibraries(resp)
        let gamesInfoLibrary = gamesInfo.filter((n) => intersectedLibraries.includes(n.appid))
        return res.json(gamesInfoLibrary)
    })
    
}

const intersectLibraries = (libraries) => {
    let intersectedLibraries = []
    intersectedLibraries = intersectedLibraries.concat(libraries[minLengthLibrary(libraries)])
    for(let i = 0; i < libraries.length; i++){
        intersectedLibraries = libraries[i].filter((n) => intersectedLibraries.includes(n))
    }
    return intersectedLibraries
}

const minLengthLibrary = (libraries) =>{
    let minLength = 9999;
    let libIndex = 0;
    libraries.forEach( (library, i) => {
        if(library.length < minLength){
            minLength = library.length;
            libIndex = i;
        }
    })
    return libIndex;
}



exports.getGameInfo = (req, res) => {
    let id = req.params.id
    let specs = []
    // bypass age check
    let coookieObject = {
        birthtime: '283993201',
        mature_content: '1'
    }
    osmosis
    .config('cookies', coookieObject)
    osmosis
    .get(`http://store.steampowered.com/app/${id}`)
    .find('.game_area_details_specs')
    .set('spec')
    .data(function(listing){
        specs.push(listing.spec)
    })
    .done((resp) => {
        return res.json({
            specs: specs
        })
    })
}
"use strict"
const config = require('../config')
const axios = require('axios')
const steamApi = require('../utils/steamApi')

exports.getFriendsList = (req, res) => {
    let id = req.params.id;
    let userInfo;
    steamApi.resolveCanonicalNames([id])
    .then((name) => 
        steamApi.getUsersInfo([name[0]]))
    .then((user) => {
        userInfo = user[0][0];
        if(userInfo === undefined){
          throw new Error("Profile doesn't exist.");
        } else if (userInfo.public === false){
          throw new Error("Profile is private.");
        }
        return steamApi.getAllFriendsList(userInfo.item);
    })
    .then((friends) => {
      return steamApi.getUsersInfo(friends.map((friend) => friend.steamid));
    })
    .then((resp) => res.json({
        friends: resp[0],
        user:userInfo}))
    .catch((err) => {
      return res.status(400).json({error: err.message});
    })

    
            
}

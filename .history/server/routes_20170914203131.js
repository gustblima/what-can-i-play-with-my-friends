"use strict";

module.exports = (app) => {
    const librariesController = require('./controllers/librariesController');
    const usersController = require('./controllers/usersController');
    app.route('/libraries').get(librariesController.getAllLibraries)
    app.route('/libraries/games/:id').get(librariesController.getGameInfo)
    app.route('/users/:id/friends/').get(usersController.getFriendsList)
}
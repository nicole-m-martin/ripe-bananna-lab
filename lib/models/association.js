const Actor = require('./Actor');
const Film = require('./Film');


Actor.hasMany(Film);
Film.belongsTo(Actor);


module.exports = association;
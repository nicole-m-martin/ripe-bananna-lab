const Actor = require('./Actor');
const Film = require('./Film');
const Studio = require('./Studio');

// Actor.hasMany(Film);
// Film.belongsTo(Actor);

Studio.hasMany(Film);
Film.belongsTo(Studio);

// module.exports = association;
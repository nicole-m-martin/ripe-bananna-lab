const Actor = require('./Actor');
const Film = require('./Film');
const Studio = require('./Studio');
const Review = require('./Review');
const Reviewer = require('./Reviewer');
const Cast = require('./Cast');

// Actor.hasMany(Film);
// Film.belongsTo(Actor);

Studio.hasMany(Film);
Film.belongsTo(Studio);

Review.belongsTo(Reviewer);
Reviewer.hasMany(Review);

Review.belongsTo(Film);
Film.hasMany(Review);

Actor.belongsToMany(Film, { through: Cast });
Film.belongsToMany(Actor, { through: Cast });

// module.exports = association;

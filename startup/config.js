<<<<<<< HEAD
// const config = require('config');

// module.exports = function () {
//     if (!config.get('jwtPrivateKey')) {
//         throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
//     }

//     if (!config.get('jwtRefreshKey')) {
//         throw new Error('FATAL ERROR: jwtRefreshKey is not defined.');
//     }
// }
=======
const config = require('config');

module.exports = function () {
    if (!config.get('jwtPrivateKey')) {
        throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
    }

    if (!config.get('jwtRefreshKey')) {
        throw new Error('FATAL ERROR: jwtRefreshKey is not defined.');
    }
}
>>>>>>> cf784656b39749252186ec27165ffd49c76a2057

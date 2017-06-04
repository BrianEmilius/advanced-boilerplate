const app = require('express')();

require('./config/server/index')(app);
require('./app/routes/index')(app);
require('./app/server/index')(app);
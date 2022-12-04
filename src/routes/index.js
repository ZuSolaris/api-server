'use strict';

const  { sequelizeDatabase } = require('./src/models');
const { start } = require('./src/server');

sequelizeDatabase.sync()
  .then(() => {
    console.log('Route Index has had a successful connection');
    start();
  })
  .catch(e => console.error(e));

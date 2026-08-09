const { join } = require('path');
const { unlink } = require('fs').promises;

const deleteSinglePlayer = async () => {
  await unlink(join('.', 'player-stack.js'));
};

deleteSinglePlayer();

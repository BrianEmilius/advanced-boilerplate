const filesystem = require('fs');

if (!filesystem.existsSync(__dirname + '/../logs')) {
	filesystem.mkdir(__dirname + '/../logs');
	console.info('\'logs\' directory created...');
}
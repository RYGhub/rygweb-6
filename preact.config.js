const path = require('path');


export default (config, env, helpers) => {
	config.module.loaders[4].include = [
		path.resolve(__dirname, 'src', 'routes'),
		path.resolve(__dirname, 'src', 'components'),
	];

	config.module.loaders[5].exclude = [
		path.resolve(__dirname, 'src', 'routes'),
		path.resolve(__dirname, 'src', 'components'),
	];
};

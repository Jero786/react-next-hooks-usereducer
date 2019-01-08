const withSass = require('@zeit/next-sass');

module.exports = {
  // some configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{reponame}' : '',

	generateBuildId: async () => {
		const id = process.env.BUILD_ID;
		return id;
	}
};

module.exports = withSass();

var runtime_configure = {
	appenders: {
		out: {type: 'stdout'},//设置是否在控制台打印日志
		info: {type: 'file', filename: './logs/info.log'},
	},
	categories: {
		default: {appenders: ['out', 'info'], level: 'info'},
	}
};

var database_configure = {
	appenders: {
		out: {type: 'stdout'},//设置是否在控制台打印日志
		info: {type: 'file', filename: './logs/info.log'},
	},
	categories: {
		default: {appenders: ['out', 'info'], level: 'debug'},
	}
};

var unittest_configure = {
	appenders: {
		out: {type: 'stdout'},//设置是否在控制台打印日志
		info: {type: 'file', filename: './logs/info.log'},
	},
	categories: {
		default: {appenders: ['out', 'info'], level: 'warn'},//去掉'out'。控制台不打印日志
	}
};
module.exports = {
	runtime_configure,
	unittest_configure,
	database_configure
};

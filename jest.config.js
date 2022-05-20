module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
      'ts-jest': {
        isolatedModules: true,
      },
    },
    moduleDirectories: ['node_modules', 'test', 'src'],
    setupFiles: ["<rootDir>/.jest/setEnvVars.js"]
  };
  
  
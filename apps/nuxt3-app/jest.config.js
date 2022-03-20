module.exports = {
  displayName: "nuxt3-app",
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": { tsconfig: "<rootDir>/tsconfig.spec.json" },
    "vue-jest": { tsConfig: "<rootDir>/tsconfig.spec.json" }
  },
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.ts$": "ts-jest",
    "^.+\\.js$": "babel-jest"
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules",
    "<rootDir>/src/stubs/stub.service.ts"
  ],
  testMatch: ["<rootDir>/test/**/*.{acceptance,unit,spec}.*s"],
  moduleFileExtensions: ["ts", "js", "vue", "json"],
  coverageDirectory: "../../coverage/apps/nuxt3-app",
  collectCoverageFrom: [
    "<rootDir>/components/**/*.vue",
    "<rootDir>/pages/**/*.vue"
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1"
  }
};

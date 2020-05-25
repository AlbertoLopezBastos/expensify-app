module.exports = {
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    setupFiles: [
        "raf/polyfill",
        "<rootDir>/src/tests/setupTest.js"
    ],
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ]
}
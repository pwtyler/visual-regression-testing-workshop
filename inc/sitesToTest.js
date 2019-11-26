module.exports = {
    "return-to-pantheon-test": {
        label: "Return to Pantheon Test",
        productionBaseUrl: "https://live-return-to-pantheon-test.pantheonsite.io/",
        nonProductionBaseUrl: "https://test-return-to-pantheon-test.pantheonsite.io/",
        pathsToTest: [
            "/2018/04/",
            "/2018/04/04/hello-world/",
        ]
    },
    "wordpress-at-scale": {
        label: "WordPress at Scale",
        productionBaseUrl: "https://scalewp.io/",
        nonProductionBaseUrl: "https://dev-wp-microsite.pantheonsite.io/",
        pathsToTest: [
            "/resources",
            "/elastic-architecture",
            "/page-caching",
            "/object-caching",
            "/query-performance",
            "/searching-for-scale",
            "/a-real-world-scalable-architecture",
            "/development-and-workflow",
        ]
    },
    "pwtyler": {
        label: "PwTyler",
        productionBaseUrl: "http://live-pwtyler.pantheonsite.io/",
        nonProductionBaseUrl: "http://test-pwtyler.pantheonsite.io/",
        pathsToTest: [
            "/",
            "/about-me/",
            "/multiple-aliases-in-ssh-config/",
            "/author/pwtyler/",
            "/category/uncategorized/"
        ]


    },
    "sticky-header":{
        label:"sticky",
        productionBaseUrl:"https://www.searchenginejournal.com/",
        nonProductionBaseUrl:"https://www.searchenginejournal.com/",
        pathsToTest:[]
    }
};

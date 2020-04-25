const schemaLocations = {
    input: {
        path: "../schemas/input/",
        files: [
            "udp.json",
            "tcp.json"
        ],
    },
    intermediate: {
        path: "../schemas/intermediate/",
        files: ["anonymization.json"],
    },
    output: {
        path: "../schemas/output/",
        files: [
            "json.json",
            "dummy.json",
            "lnfstore.json",
            "unirec.json",
            "timecheck.json",
            "viewer.json"
        ],
    },
};
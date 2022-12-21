module.exports = {
    info: {
        name: "MemeSoundsPlus",
        authors: [
            {
                name: "Lonk#6942",
                discord_id: "557388558017495046",
                github_username: "Lonk12",
                twitter_username: "wolfyypaw12"
            },
            {
                name: "FlooferLand",
                github_username: "FlooferLand",
                twitter_username: "FlooferLand"
            }
        ],
        version: "0.7.0",
        description: "Plays funny meme sounds based on text/emojis sent in chat. PS: This is a fork of MemeSounds that adds new sounds, MemeSounds itself was inspired by the idea of Metalloriff's bruh plugin.",
        github: "https://github.com/FlooferLand/BetterDiscordPlugins/blob/main/MemeSoundsPlus/MemeSoundsPlus.plugin.js",
        github_raw: "https://raw.githubusercontent.com/FlooferLand/BetterDiscordPlugins/main/MemeSoundsPlus/MemeSoundsPlus.plugin.js"
    },
    defaultConfig: [{
        id: "setting",
        name: "Sound Settings",
        type: "category",
        collapsible: true,
        shown: true,
        settings: [
            {
                id: "LimitChan",
                name: "Limit to the current channel only.",
                note: "When enabled, sound effects will only play within the currently selected channel.",
                type: "switch",
                value: true
            },
            {
                id: "delay",
                name: "Sound effect delay (ms)",
                note: "The delay in miliseconds between each sound effect.",
                type: "slider",
                value: 200, min: 10, max: 1000
            },
            {
                id: "volume",
                name: "Sound effect volume (percent)",
                note: "How loud the sound effects will be.",
                type: "slider",
                value: 1, min: 0.01, max: 1
            }
        ]
    }],
    changelog: [],
    main: "MemeSoundsPlus.index.js"
}

BdApi.saveData("MemeSoundsPlus", "config", module.exports.defaultConfig);


let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
        overrideStorage: true,
        temperature: {
            location: "Lisbon",
            scale: "C",
        },
        clock: {
            format: "h:i p",
            iconColor: "#f38ba8",
        },
        disabled: [],
        fastlink: "https://app.raindrop.io",
        openLastVisitedTab: true,
        tabs: [{
                name: "myself",
                background_url: "src/img/banners/cbg-9.gif",
                categories: [{
                        name: "music",
                        links: [{
                            name: "spotify",
                            url: "https://open.spotiy.com",
                            icon: "brand-spotify",
                            icon_color: "#a6e3a1",
                        }, {
                            name: "musicForProgramming();",
                            url: "https://musicforprogramming.net/sixty",
                            icon: "binary-tree",
                            icon_color: "#fab387",
                        }, {
                            name: "lofi cafe",
                            url: "https://www.lofi.cafe",
                            icon: "music-heart",
                            icon_color: "89b4fa",
                        }, ],
                    }, {
                        name: "workspace",
                        links: [{
                            name: "gmail",
                            url: "https://mail.google.com",
                            icon: "brand-gmail",
                            icon_color: "#a6e3a1",
                        }, {
                            name: "github",
                            url: "https://github.com",
                            icon: "brand-github",
                            icon_color: "#cba6f7",
                        }, {
                            name: "gpt",
                            url: "https://chatgpt.com",
                            icon: "brand-openai",
                            icon_color: "#f38ba8",
                        }, ],
                    }, {
                        name: "media",
                        links: [{
                                name: "insta",
                                url: "https://www.instagram.com",
                                icon: "brand-instagram",
                                icon_color: "#a6e3a1",
                            }, {
                                name: "spotify",
                                url: "https://spotify.com",
                                icon: "brand-spotify",
                                icon_color: "#fab387",
                            }, {
                                name: "youtube",
                                url: "https://youtube.com",
                                icon: "brand-youtube",
                                icon_color: "#89b4fa",
                            }, {
                                name: "reddit",
                                url: "https://reddit.com",
                                icon: "brand-reddit",
                                icon_color: "#fab388",
                            ],
                        },
                    ],
                },
                {
                    name: "dev",
                    background_url: "src/img/banners/cbg-8.gif",
                    categories: [{
                        name: "resources",
                        links: [{
                            name: "github",
                            url: "https://github.com",
                            icon: "brand-github",
                            icon_color: "#a6e3a1",
                        }, {
                            name: "VS Code",
                            url: "https://github.dev",
                            icon: "brand-vscode",
                            icon_color: "#fab387",
                        }, {
                            name: "startpage repository",
                            url: "https://github.com/TangenteLakai/catppuccin-startpage",
                            icon: "folder",
                            icon_color: "#f38ba8",
                        }, ],
                    }, {
                        name: "challenges",
                        links: [{
                            name: "kaggle",
                            url: "https://www.kaggle.com",
                            icon: "brain",
                            icon_color: "#a6e3a1",
                        }, {
                            name: "leetcode",
                            url: "https://leetcode.com",
                            icon: "code-plus",
                            icon_color: "#fab387",
                        }, {
                            name: "stackoverflow",
                            url: "https://stackoverflow.com",
                            icon: "brand-stackoverflow",
                            icon_color: "#f38ba8",
                        }, ],
                    }, {
                        name: "cs50",
                        links: [{
                            name: "codespaces",
                            url: "https://cs50.dev",
                            icon: "brand-prisma",
                            icon_color: "#a6e3a1",
                        }, {
                            name: "introduction to python",
                            url: "https://cs50.harvard.edu/python/2022/",
                            icon: "brand-python",
                            icon_color: "#fab387",
                        }, {
                            name: "cs50 me",
                            url: "https://cs50.me/cs50p",
                            icon: "brand-uber",
                            icon_color: "#f38ba8",
                        }, {
                            name: "cs50 submit",
                            url: "https://submit.cs50.io/courses/1202",
                            icon: "hexagon-letter-g",
                            icon_color: "#89b4fa",
                        }, ],
                    }, ],
                },
                {
                    name: "chi ll",
                    background_url: "src/img/banners/cbg-10.gif",
                    categories: [{
                        name: "social medias",
                        links: [{
                            name: "telegram",
                            url: "https://web.telegram.org",
                            icon: "brand-telegram",
                            icon_color: "#a6e3a1",
                        }, {
                            name: "facebook",
                            url: "https://www.facebook.com",
                            icon: "brand-facebook",
                            icon_color: "#fab387",
                        }, {
                            name: "reddit unix",
                            url: "https://www.reddit.com/r/unixporn",
                            icon: "brand-reddit",
                            icon_color: "#f38ba8",
                        }, ],
                    }, {
                        name: "games",
                        links: [{
                            name: "GG",
                            url: "https://ggapp.io/pivoshenko",
                            icon: "device-gamepad",
                            icon_color: "#a6e3a1",
                        }, {
                            name: "steam",
                            url: "https://store.steampowered.com",
                            icon: "brand-steam",
                            icon_color: "#fab387",
                        }, {
                            name: "epicgames",
                            url: "https://store.epicgames.com",
                            icon: "brand-fortnite",
                            icon_color: "#f38ba8",
                        }, {
                            name: "nintendo",
                            url: "https://store.nintendo.co.uk",
                            icon: "device-nintendo",
                            icon_color: "#89b4fa",
                        }, ],
                    }, {
                        name: "video",
                        links: [{
                            name: "anilist",
                            url: "https://anilist.co/home",
                            icon: "brand-funimation",
                            icon_color: "#a6e3a1",
                        }, {
                            name: "youtube",
                            url: "https://www.youtube.com",
                            icon: "brand-youtube",
                            icon_color: "#fab387",
                        }, {
                            name: "patreon",
                            url: "https://www.patreon.com",
                            icon: "brand-patreon",
                            icon_color: "#f38ba8",
                        }, {
                            name: "kyivstar",
                            url: "https://tv.kyivstar.ua",
                            icon: "star-filled",
                            icon_color: "#89b4fa",
                        }, ],
                    }, ],
                },
            ],
        };

        const CONFIG = new Config(default_config);

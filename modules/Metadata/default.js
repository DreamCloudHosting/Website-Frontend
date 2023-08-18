export default class DefaultMetadata {
    constructor() {
        this.defaultValue = {
            title: "Dream Cloud Hosting",
            description: "Customize your needs for hosting",
            generator: "Next.js",
            applicationName: "Dream Cloud",
            referrer: "origin-when-cross-origin",
            keywords: ["Dream Cloud Hosting", "DCH", "Hosting", "Server", "Minecraft", "Minecraft Server", "Discord", "Discord Bot", "Web", "Web Hosting"],
            authors: [
                { name: "Kyle" },
                { name: "OnCloud", url: "https://github.com/OnCloud125252" }
            ],
            colorScheme: "dark",
            creator: "OnCloud",

            openGraph: {
                title: "Dream Cloud Hosting",
                description: "Customize your needs for hosting",
                url: "https://dreamcloudhosting.netlify.app",
                siteName: "Dream Cloud Hosting",
                images: [
                    {
                        url: "https://i.ibb.co/j4x7pkM/logo-blue.png",
                        width: 640,
                        height: 640,
                        alt: "Banner",
                    },
                    {
                        url: "https://i.ibb.co/F7fGP4w/logo-blue.png",
                        width: 4267,
                        height: 4267,
                        alt: "Banner",
                    },
                ],
                locale: "zh_TW",
                type: "website",
            },
        };
    }

    editValue({
        title,
        description,
        generator,
        applicationName,
        referrer,
        keywords,
        authors,
        colorScheme,
        creator,
        openGraph_title,
        openGraph_description,
        openGraph_url,
        openGraph_siteName,
        openGraph_images,
        openGraph_locale,
        openGraph_type
    }) {
        const defaultOpenGraph = this.defaultValue.openGraph;
        return {
            title: title ?? this.defaultValue.title,
            description: description ?? this.defaultValue.description,
            generator: generator ?? this.defaultValue.generator,
            applicationName: applicationName ?? this.defaultValue.applicationName,
            referrer: referrer ?? this.defaultValue.referrer,
            keywords: Array.isArray(keywords) ? keywords : this.defaultValue.keywords,
            authors: Array.isArray(authors) ? authors : this.defaultValue.authors,
            colorScheme: colorScheme ?? this.defaultValue.colorScheme,
            creator: creator ?? this.defaultValue.creator,
            openGraph: {
                title: openGraph_title ?? defaultOpenGraph.title,
                description: openGraph_description ?? defaultOpenGraph.description,
                url: openGraph_url ?? defaultOpenGraph.url,
                siteName: openGraph_siteName ?? defaultOpenGraph.siteName,
                images: Array.isArray(openGraph_images) ? openGraph_images : defaultOpenGraph.images,
                locale: openGraph_locale ?? defaultOpenGraph.locale,
                type: openGraph_type ?? defaultOpenGraph.type,
            }
        };
    }

    value() {
        return this.defaultValue;
    }
}
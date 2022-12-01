export interface Content {
    "contentId": number;
    "title": string;
    "actor": string[];
    "genre": string[];
    "feature": string[];
    "thumbnail": string;
    "year": number;
    "ageLimit": number;
    "rank": number;
    "episodes": Episode[];
    "episodeCount": number;
}

interface Episode {
    "episode": number;
    "description": string;
}

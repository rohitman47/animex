import { GraphQLEnumType } from "graphql";

export const SeasonEnum = new GraphQLEnumType({
  name: "SeasonEnum",
  values: {
    winter: { value: "winter" },
    summer: { value: "summer" },
    fall: { value: "fall" },
    spring: { value: "spring" },
  },
});

export const GenreEnum = new GraphQLEnumType({
  name: "GenreEnum",
  values: {
    action: { value: "action" },
    adventure: { value: "adventure" },
    cars: { value: "cars" },
    comedy: { value: "comedy" },
    crime: { value: "crime" },
    dementia: { value: "dementia" },
    demons: { value: "demons" },
    drama: { value: "drama" },
    dub: { value: "dub" },
    ecchi: { value: "ecchi" },
    family: { value: "family" },
    fantasy: { value: "fantasy" },
    game: { value: "game" },
    gourmet: { value: "gourmet" },
    harem: { value: "harem " },
    hentai: { value: "hentai" },
    historical: { value: "historical" },
    horror: { value: "horror" },
    josei: { value: "josei" },
    kids: { value: "kids" },
    magic: { value: "magic" },
    martialArts: { value: "martial-arts" },
    mecha: { value: "mecha" },
    military: { value: "military" },
    music: { value: "music" },
    mystery: { value: "mystery" },
    parody: { value: "parody" },
    police: { value: "police" },
    psychological: { value: "psychological" },
    romance: { value: "romance" },
    samurai: { value: "samurai" },
    school: { value: "school" },
    sciFi: { value: "sci-fi" },
    seinen: { value: "seinen" },
    shoujo: { value: "shoujo" },
    shoujoAi: { value: "shoujo-ai" },
    shounen: { value: "shounen" },
    shounenAi: { value: "shounen-ai" },
    sliceOfLife: { value: "slice-of-Life" },
    space: { value: "space" },
    sports: { value: "sports" },
    superPower: { value: "super-power" },
    supernatural: { value: "supernatural" },
    suspense: { value: "suspense" },
    thriller: { value: "thriller" },
    vampire: { value: "vampire" },
    yaoi: { value: "yaoi" },
    yuri: { value: "yuri" },
  },
});

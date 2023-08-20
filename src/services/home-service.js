import { gql } from '@apollo/client';


const GET_TRENDING_ANIME = gql`
    query ($page: Int, $perPage: Int, $type: MediaType, $season: MediaSeason, $seasonYear: Int, $sort: [MediaSort]) {
        Page(page: $page, perPage: $perPage) {
            media(type: $type, season: $season, seasonYear: $seasonYear, sort: $sort) {
            title {
                english
                native
                romaji
            }
            coverImage {
                large
                extraLarge
            }
            bannerImage
            id
            }
        }
    }
`;

const GET_TOP_VIEWS = gql`
    query ($type: MediaType, $season: MediaSeason, $seasonYear: Int, $page: Int, $perPage: Int, $sort: [MediaSort], $startDateGreater: FuzzyDateInt) {
        Page(page: $page, perPage: $perPage) {
            media(type: $type, season: $season, seasonYear: $seasonYear, sort: $sort, startDate_greater: $startDateGreater) {
            title {
                english
                native
                romaji
            }
            coverImage {
                large
                extraLarge
            }
            bannerImage
            id
            }
        }
    }
`;

const GET_POPULAR_SEASON_ANIME = gql`
    query ($page: Int, $perPage: Int, $sort: [MediaSort], $startDateGreater: FuzzyDateInt, $type: MediaType, $season: MediaSeason, $seasonYear: Int) {
        Page(page: $page, perPage: $perPage) {
            media(sort: $sort, startDate_greater: $startDateGreater, type: $type, season: $season, seasonYear: $seasonYear) {
            title {
                english
                native
                romaji
            }
            coverImage {
                large
            extraLarge
            }
            bannerImage
            id
            }
        }
    }
`;

const GET_UPCOMING_ANIME = gql`
    query ($page: Int, $perPage: Int, $startDateGreater: FuzzyDateInt, $type: MediaType, $season: MediaSeason, $seasonYear: Int, $sort: [MediaSort]) {
        Page(page: $page, perPage: $perPage) {
            media(startDate_greater: $startDateGreater, type: $type, season: $season, seasonYear: $seasonYear, sort: $sort) {
            title {
                english
                native
                romaji
            }
            coverImage {
            large
            extraLarge
            }
            bannerImage
            id
            }
        }
    }
`;

const GET_TOP_COMMENT_ANIME = gql`
    query($sort: [ActivitySort], $hasReplies: Boolean, $perPage: Int, $page: Int)  {
      Page(perPage: $perPage, page: $page) {
        activities(sort: $sort, hasReplies: $hasReplies) {
          ... on ListActivity {
            createdAt
            id
            media {
              id
              title {
                english
                romaji
              }
              coverImage {
                extraLarge
                large
              }
            }
            replies {
              text
            }
          }
        }
      }
    }
`;

export {
    GET_TRENDING_ANIME, 
    GET_TOP_VIEWS, 
    GET_POPULAR_SEASON_ANIME,
    GET_UPCOMING_ANIME,
    GET_TOP_COMMENT_ANIME
};
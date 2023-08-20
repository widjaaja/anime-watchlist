import { gql } from '@apollo/client';


const GET_DETAIL_ANIME = gql`
    query Query($mediaId: Int) {
        Media(id: $mediaId) {
            id
            title {
                english
                romaji
                native
            }
            coverImage {
                extraLarge
                color
            }
            startDate {
                day
                month
                year
            }
            description
            averageScore
            duration
            status
            popularity
            meanScore
            genres
            favourites
            format
            season
            seasonYear
            studios {
                nodes {
                    name
                    id
                }
            }
        }
    }
`;

export {
    GET_DETAIL_ANIME, 
};

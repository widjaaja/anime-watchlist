import { useNavigate } from "react-router-dom";
import { useQuery } from '@apollo/client';
import {
    GET_TRENDING_ANIME, 
    GET_TOP_VIEWS, 
    GET_POPULAR_SEASON_ANIME,
    GET_UPCOMING_ANIME,
    GET_TOP_COMMENT_ANIME
} from '../../services/home-service'

function TrendingProduct({ truncateString }) {
    const navigate = useNavigate();
    const { loading, error, data } = useQuery(GET_TRENDING_ANIME, {
        variables: { 
            page: 1, 
            perPage: 6, 
            sort: "TRENDING_DESC",
            type: "ANIME",
        }
    });
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log("Trending ANIME", data);

    const redirect = (id) => {
        navigate(`/detail?anime=${id}`);
    }

    return (
        <div className="row">
            {data.Page.media.map(({coverImage, title, id}) => (
                <div key={id} className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div onClick={() => redirect(id)} style={{backgroundImage: `url(${coverImage.extraLarge})`}} className="product__item__pic set-bg">
                            <div className="ep">18 / 18</div>
                            <div className="comment"><i className="fa fa-comments"></i> 11</div>
                            <div className="view"><i className="fa fa-eye"></i> 9141</div>
                        </div>
                        <div className="product__item__text">
                            <ul>
                                <li>Active</li>
                                <li>Movie</li>
                            </ul>
                            <h5><a href="/">
                                {truncateString(title.english === null ? title.romaji : title.english , 50)}
                            </a></h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function TopViews({ truncateString }) {
    const { loading, error, data } = useQuery(GET_TOP_VIEWS, {
        variables: { 
            page: 1, 
            perPage: 6, 
            sort: "SCORE_DESC",
            type: "ANIME",
            seasonYear: 2023
        }
      });
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log('top views', data);

    return (
        <div className="filter__gallery">
            {data.Page.media.map(({coverImage, title, id}) => (
                <div key={id} className="product__sidebar__view__item set-bg mix day years"
                    style={{backgroundImage: `url(${coverImage.extraLarge})`}}>
                    <div className="ep">18 / ?</div>
                    <div className="view"><i className="fa fa-eye"></i> 9141</div>
                    <h5><a href="/">
                        {truncateString(title.english === null ? title.romaji : title.english , 50)}
                    </a></h5>
                </div>
            ))}
        </div>
    )
}

function PopularProduct({ truncateString }) {
    const { loading, error, data } = useQuery(GET_POPULAR_SEASON_ANIME, {
        variables: { 
            page: 1,
            perPage: 6,
            sort: "POPULARITY_DESC",
            type: "ANIME",
            season: "SUMMER",
            seasonYear: 2023
        }
      });
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log('Popular Anime', data);

    return (
        <div className="row">
            {data.Page.media.map(({coverImage, title, id}) => (
                <div key={id} className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div style={{backgroundImage: `url(${coverImage.extraLarge})`}} className="product__item__pic set-bg" data-setbg="img/popular/popular-1.jpg">
                            <div className="ep">18 / 18</div>
                            <div className="comment"><i className="fa fa-comments"></i> 11</div>
                            <div className="view"><i className="fa fa-eye"></i> 9141</div>
                        </div>
                        <div className="product__item__text">
                            <ul>
                                <li>Active</li>
                                <li>Movie</li>
                            </ul>
                            <h5><a href="/">
                                {truncateString(title.english === null ? title.romaji : title.english , 50)}
                            </a></h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function TopCommentProduct({ truncateString }) {
    const { loading, error, data } = useQuery(GET_TOP_COMMENT_ANIME, {
        variables: {
            sort: "ID_DESC",
            hasReplies: true,
            perPage: 6,
            page: 1
          }
      });
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log('Top Comment Anime', data);

    return (
        <div className="product__sidebar__comment">
            <div className="section-title">
                <h5>New Comment</h5>
            </div>
            {data.Page.activities.map(({media, id}) => (
                <div key={id} className="product__sidebar__comment__item">
                    <div className="product__sidebar__comment__item__pic">
                        <img height="150" width="auto" src={media.coverImage.large} alt=""/>
                    </div>
                    <div className="product__sidebar__comment__item__text">
                        <ul>
                            <li>Active</li>
                            <li>Movie</li>
                        </ul>
                        <h5><a href="/">
                            {truncateString(media.title.english === null ? media.title.romaji : media.title.english , 50)}
                        </a></h5>
                        <span><i className="fa fa-eye"></i> 19.141 Viewes</span>
                    </div>
                </div>
            ))}
        </div>

    )
}

function UpcomingProduct({ truncateString }) {
    const { loading, error, data } = useQuery(GET_UPCOMING_ANIME, {
        variables: {
            page: 1,
            perPage: 6,
            type: "ANIME",
            season: "FALL",
            seasonYear: 2023,
            sort: "POPULARITY_DESC",
          }
      });
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log('Upcoming Anime', data);

    return (
        <div className="row">
            {data.Page.media.map(({bannerImage, coverImage, title, id}) => (
                <div key={id} className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div style={{backgroundImage: `url(${coverImage.extraLarge})`}} className="product__item__pic set-bg" data-setbg="img/popular/popular-1.jpg">
                            <div className="ep">18 / 18</div>
                            <div className="comment"><i className="fa fa-comments"></i> 11</div>
                            <div className="view"><i className="fa fa-eye"></i> 9141</div>
                        </div>
                        <div className="product__item__text">
                            <ul>
                                <li>Active</li>
                                <li>Movie</li>
                            </ul>
                            <h5><a href="/">
                                {truncateString(title.english === null ? title.romaji : title.english , 50)}
                            </a></h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function HomePage() {

    function truncateString(str, num) {
        if (str.length > num) {
          return str.slice(0, num) + "...";
        }
        else {
          return str;
        }
    }

    return (
        <section className="product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">

                        {/* Trending NOW Anime */}
                        <div className="trending__product">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8">
                                    <div className="section-title">
                                        <h4>Trending Now</h4>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="btn__all">
                                        <a href="/" className="primary-btn">View All <span className="arrow_right"></span></a>
                                    </div>
                                </div>
                            </div>
                            <TrendingProduct truncateString={truncateString}></TrendingProduct>
                        </div>
                        {/* END Trending NOW Anime */}

                        <div className="popular__product">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8">
                                    <div className="section-title">
                                        <h4>Popular Shows</h4>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="btn__all">
                                        <a href="/" className="primary-btn">View All <span className="arrow_right"></span></a>
                                    </div>
                                </div>
                            </div>
                            {/* Trending NOW Anime */}
                            <PopularProduct truncateString={truncateString}></PopularProduct>
                            {/* END Trending NOW Anime */}
                        </div>
                        <div className="recent__product">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8">
                                    <div className="section-title">
                                        <h4>Upcoming Next Season</h4>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="btn__all">
                                        <a href="/" className="primary-btn">View All <span className="arrow_right"></span></a>
                                    </div>
                                </div>
                            </div>
                            {/* Upcoming Next Season */}
                            <UpcomingProduct truncateString={truncateString}></UpcomingProduct>
                            {/* END Upcoming Next Season */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="product__sidebar">
                            {/* sidebar Top View Anime */}
                            <div className="product__sidebar__view">
                                <div className="section-title">
                                    <h5>Top Views</h5>
                                </div>
                                <ul className="filter__controls">
                                    <li className="active" data-filter="*">Day</li>
                                    <li data-filter=".week">Week</li>
                                    <li data-filter=".month">Month</li>
                                    <li data-filter=".years">Years</li>
                                </ul>
                                <TopViews truncateString={truncateString}></TopViews>
                            </div>
                            {/* END sidebar Top View Anime*/}

                            {/* sidebar Top Comment Anime */}
                            <TopCommentProduct truncateString={truncateString}></TopCommentProduct>
                            {/* END sidebar Top Comment Anime */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default HomePage;
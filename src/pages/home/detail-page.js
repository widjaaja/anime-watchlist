import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_DETAIL_ANIME } from '../../services/detail-service'

function DetailPage() {
    const mS = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const [searchParams] = useSearchParams();
    const AnimeId = searchParams.get("anime"); // "ID ANIME"

    const { loading, error, data } = useQuery(GET_DETAIL_ANIME, {
        variables: { 
            mediaId: AnimeId, 
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    const {
        title, description, status,
        coverImage, format, studios, 
        popularity, duration, season,
        genres, averageScore, seasonYear,
        startDate 
    } = data.Media;
    console.log("Detail ANIME", data);

    function parseText(item) {
        let txt = ''
        for (let index = 0; index < item.length; index++) {
            txt = txt + item[index] + ', ';     
        }
        return txt;
    }

    return (
        <section className="anime-details spad">
            <div className="container">
                <div className="anime__details__content">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="anime__details__pic set-bg" 
                                style={{backgroundImage: `url(${coverImage.extraLarge})`}}>
                                <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                <div className="view"><i className="fa fa-eye"></i> 9141</div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="anime__details__text">
                                <div className="anime__details__title">
                                    <h3>{title.english}</h3>
                                    <span>{title.native}, {title.romaji}</span>
                                </div>
                                <div className="anime__details__rating">
                                    <div className="rating">
                                        <a href="#"><i className="fa fa-star"></i></a>
                                        <a href="#"><i className="fa fa-star"></i></a>
                                        <a href="#"><i className="fa fa-star"></i></a>
                                        <a href="#"><i className="fa fa-star"></i></a>
                                        <a href="#"><i className="fa fa-star-half-o"></i></a>
                                    </div>
                                    <span>1.029 Votes</span>
                                </div>
                                <p dangerouslySetInnerHTML={{ __html: description }}></p>
                                <div className="anime__details__widget">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <ul>
                                                <li><span>Type:</span> {format}</li>
                                                <li><span>Studios:</span> {studios.nodes[0].name}</li>
                                                <li><span>Date aired:</span> {mS[startDate.month]} {startDate.day}, {startDate.year} to ?</li>
                                                <li className='text-capitalize'><span>Status:</span> {status.toLowerCase()}</li>
                                                <li><span>Genre:</span> {parseText(genres)}</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <ul>
                                                <li><span>Scores:</span> {averageScore} / 100</li>
                                                <li><span>Season:</span> {season} {seasonYear}</li>
                                                <li><span>Duration:</span> {duration} min / episode</li>
                                                <li><span>Quality:</span> HD</li>
                                                <li><span>Views:</span> {popularity}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="anime__details__btn">
                                    <a href="#" className="follow-btn"><i className="fa fa-heart-o"></i> Follow</a>
                                    <a href="#" className="watch-btn"><span>Watch Now</span> <i
                                        className="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div className="anime__details__review">
                                <div className="section-title">
                                    <h5>Reviews</h5>
                                </div>
                                <div className="anime__review__item">
                                    <div className="anime__review__item__pic">
                                        <img src="img/anime/review-1.jpg" alt=""/>
                                    </div>
                                    <div className="anime__review__item__text">
                                        <h6>Chris Curry - <span>1 Hour ago</span></h6>
                                        <p>whachikan Just noticed that someone categorized this as belonging to the genre
                                        "demons" LOL</p>
                                    </div>
                                </div>
                                <div className="anime__review__item">
                                    <div className="anime__review__item__pic">
                                        <img src="img/anime/review-2.jpg" alt=""/>
                                    </div>
                                    <div className="anime__review__item__text">
                                        <h6>Lewis Mann - <span>5 Hour ago</span></h6>
                                        <p>Finally it came out ages ago</p>
                                    </div>
                                </div>
                                <div className="anime__review__item">
                                    <div className="anime__review__item__pic">
                                        <img src="img/anime/review-3.jpg" alt=""/>
                                    </div>
                                    <div className="anime__review__item__text">
                                        <h6>Louis Tyler - <span>20 Hour ago</span></h6>
                                        <p>Where is the episode 15 ? Slow update! Tch</p>
                                    </div>
                                </div>
                                <div className="anime__review__item">
                                    <div className="anime__review__item__pic">
                                        <img src="img/anime/review-4.jpg" alt=""/>
                                    </div>
                                    <div className="anime__review__item__text">
                                        <h6>Chris Curry - <span>1 Hour ago</span></h6>
                                        <p>whachikan Just noticed that someone categorized this as belonging to the genre
                                        "demons" LOL</p>
                                    </div>
                                </div>
                                <div className="anime__review__item">
                                    <div className="anime__review__item__pic">
                                        <img src="img/anime/review-5.jpg" alt=""/>
                                    </div>
                                    <div className="anime__review__item__text">
                                        <h6>Lewis Mann - <span>5 Hour ago</span></h6>
                                        <p>Finally it came out ages ago</p>
                                    </div>
                                </div>
                                <div className="anime__review__item">
                                    <div className="anime__review__item__pic">
                                        <img src="img/anime/review-6.jpg" alt=""/>
                                    </div>
                                    <div className="anime__review__item__text">
                                        <h6>Louis Tyler - <span>20 Hour ago</span></h6>
                                        <p>Where is the episode 15 ? Slow update! Tch</p>
                                    </div>
                                </div>
                            </div>
                            <div className="anime__details__form">
                                <div className="section-title">
                                    <h5>Your Comment</h5>
                                </div>
                                <form action="#">
                                    <textarea placeholder="Your Comment"></textarea>
                                    <button type="submit"><i className="fa fa-location-arrow"></i> Review</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="anime__details__sidebar">
                                <div className="section-title">
                                    <h5>you might like...</h5>
                                </div>
                                <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-1.jpg">
                                    <div className="ep">18 / ?</div>
                                    <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    <h5><a href="#">Boruto: Naruto next generations</a></h5>
                                </div>
                                <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-2.jpg">
                                    <div className="ep">18 / ?</div>
                                    <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                </div>
                                <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-3.jpg">
                                    <div className="ep">18 / ?</div>
                                    <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    <h5><a href="#">Sword art online alicization war of underworld</a></h5>
                                </div>
                                <div className="product__sidebar__view__item set-bg" data-setbg="img/sidebar/tv-4.jpg">
                                    <div className="ep">18 / ?</div>
                                    <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    <h5><a href="#">Fate/stay night: Heaven's Feel I. presage flower</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default DetailPage;


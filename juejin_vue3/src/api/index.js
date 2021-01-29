import http from './http'

export default {
    getRecommendTagList:(params)=>http.post('/api/recommend_api/v1/tag/recommend_tag_list',params),
    getRecommendAllfeed:(params)=>http.post('/api/recommend_api/v1/article/recommend_all_feed',params), 
    getRecommendCatFeedByTag:(params)=>http.post('/api/recommend_api/v1/article/recommend_cate_tag_feed',params), 
    getRecommendCatFeed:(params)=>http.post('/api/recommend_api/v1/article/recommend_cate_feed',params), 

}
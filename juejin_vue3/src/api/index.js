import http from './http'

export default {
    getRecommendTagList:(params)=>http.post('/api/recommend_api/v1/tag/recommend_tag_list',params),
    getRecommendAllfeed:(params)=>http.post('/api/recommend_api/v1/article/recommend_all_feed',params), 
    getRecommendCatFeedByTag:(params)=>http.post('/api/recommend_api/v1/article/recommend_cate_tag_feed',params), 
    getRecommendCatFeed:(params)=>http.post('/api/recommend_api/v1/article/recommend_cate_feed',params),  
    getRecommendTagTopicList:(params)=>http.post('/api/recommend_api/v1/tag/recommend_topic_list',params),  
    getTopicList:(params)=>http.post('/api/recommend_api/v1/short_msg/topic',params),  
    getBooksList:(params)=>http.post('/api/booklet_api/v1/booklet/listbycategory',params),  //掘金小册列表
    getBookDetial:(params)=>http.post('/api/booklet_api/v1/booklet/get',params),  //掘金小册列表
}

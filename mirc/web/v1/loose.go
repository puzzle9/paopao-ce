package v1

import (
	. "github.com/alimy/mir/v4"
	. "github.com/alimy/mir/v4/engine"
	"github.com/rocboss/paopao-ce/internal/model/web"
)

func init() {
	Entry[Loose]()
}

// Loose 宽松授权的服务
type Loose struct {
	Chain `mir:"-"`
	Group `mir:"v1"`

	// Timeline 获取广场流
	Timeline func(Get, Context, web.TimelineReq) web.TimelineResp `mir:"/posts"`

	// GetUserTweets 获取用户动态列表
	GetUserTweets func(Get, Context, web.GetUserTweetsReq) web.GetUserTweetsResp `mir:"/user/posts"`

	// GetUserProfile 获取用户基本信息
	GetUserProfile func(Get, Context, web.GetUserProfileReq) web.GetUserProfileResp `mir:"/user/profile"`

	// TopicList 获取话题列表
	TopicList func(Get, Context, web.TopicListReq) web.TopicListResp `mir:"/tags"`

	// TweetComments 获取动态评论
	TweetComments func(Get, Context, web.TweetCommentsReq) web.TweetCommentsResp `mir:"/post/comments"`

	// TweetDetail 获取动态详情
	TweetDetail func(Get, Context, web.TweetDetailReq) web.TweetDetailResp `mir:"/post"`
}

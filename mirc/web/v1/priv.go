package v1

import (
	. "github.com/alimy/mir/v4"
	. "github.com/alimy/mir/v4/engine"
	"github.com/rocboss/paopao-ce/internal/model/web"
)

func init() {
	Entry[Priv]()
}

// Priv 私有授权的服务
type Priv struct {
	Chain `mir:"-"`
	Group `mir:"v1"`

	// UploadAttachment 上传资源
	UploadAttachment func(Post, Context, web.UploadAttachmentReq) web.UploadAttachmentResp `mir:"/attachment"`

	// DownloadAttachmentPrecheck 下载资源预检
	DownloadAttachmentPrecheck func(Get, Context, web.DownloadAttachmentPrecheckReq) web.DownloadAttachmentPrecheckResp `mir:"/attachment/precheck"`

	// DownloadAttachment 下载资源
	DownloadAttachment func(Get, Context, web.DownloadAttachmentReq) web.DownloadAttachmentResp `mir:"/attachment"`

	// CreateTweet 发布动态
	CreateTweet func(Post, Chain, Context, web.CreateTweetReq) web.CreateTweetResp `mir:"/post"`

	// DeleteTweet 删除动态
	DeleteTweet func(Delete, Context, web.DeleteTweetReq) `mir:"/post"`

	// StarTweet 动态点赞操作
	StarTweet func(Post, Context, web.StarTweetReq) web.StarTweetResp `mir:"/post/star"`

	// CollectionTweet 动态收藏操作
	CollectionTweet func(Post, Context, web.CollectionTweetReq) web.CollectionTweetResp `mir:"/post/collection"`

	// LockTweet 锁定动态
	LockTweet func(Post, Context, web.LockTweetReq) web.LockTweetResp `mir:"/post/lock"`

	// StickTweet 置顶动态
	StickTweet func(Post, Context, web.StickTweetReq) web.StickTweetResp `mir:"/post/stick"`

	// HighlightTweet 推文亮点设置
	HighlightTweet func(Post, Context, web.HighlightTweetReq) web.HighlightTweetResp `mir:"/post/highlight"`

	// VisibleTweet 修改动态可见度
	VisibleTweet func(Post, Context, web.VisibleTweetReq) web.VisibleTweetResp `mir:"/post/visibility"`

	// CreateTweetComment 发布动态评论
	CreateComment func(Post, Context, web.CreateCommentReq) web.CreateCommentResp `mir:"/post/comment"`

	// DeletePostComment 删除动态评论
	DeleteComment func(Delete, Context, web.DeleteCommentReq) `mir:"/post/comment"`

	// HighlightComment 精选动态评论
	HighlightComment func(Post, Context, web.HighlightCommentReq) web.HighlightCommentResp `mir:"/post/comment/highlight"`

	// CreateCommentReply 发布评论回复
	CreateCommentReply func(Post, Context, web.CreateCommentReplyReq) web.CreateCommentReplyResp `mir:"/post/comment/reply"`

	// DeleteCommentReply 删除评论回复
	DeleteCommentReply func(Delete, Context, web.DeleteCommentReplyReq) `mir:"/post/comment/reply"`

	// ThumbsUpTweetComment 点赞评论
	ThumbsUpTweetComment func(Post, Context, web.TweetCommentThumbsReq) `mir:"/tweet/comment/thumbsup"`

	// ThumbsDownTweetComment 点踩评论
	ThumbsDownTweetComment func(Post, Context, web.TweetCommentThumbsReq) `mir:"/tweet/comment/thumbsdown"`

	// ThumbsUpTweetReply 点赞评论回复·
	ThumbsUpTweetReply func(Post, Context, web.TweetReplyThumbsReq) `mir:"/tweet/reply/thumbsup"`

	// ThumbsDownTweetReply 点踩评论回复
	ThumbsDownTweetReply func(Post, Context, web.TweetReplyThumbsReq) `mir:"/tweet/reply/thumbsdown"`

	// StickTopic 置顶话题
	StickTopic func(Post, Context, web.StickTopicReq) web.StickTopicResp `mir:"/topic/stick"`

	// PinTopic 钉住话题
	PinTopic func(Post, Context, web.PinTopicReq) web.PinTopicResp `mir:"/topic/pin"`

	// FollowTopic 关注话题
	FollowTopic func(Post, Context, web.FollowTopicReq) `mir:"/topic/follow"`

	// UnfollowTopic 取消关注话题
	UnfollowTopic func(Post, Context, web.UnfollowTopicReq) `mir:"/topic/unfollow"`
}

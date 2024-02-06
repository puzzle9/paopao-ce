package v1

import (
	. "github.com/alimy/mir/v4"
	. "github.com/alimy/mir/v4/engine"
	"github.com/rocboss/paopao-ce/internal/model/web"
)

func init() {
	Entry[Core]()
}

// Core 核心服务，需要授权访问
type Core struct {
	Chain `mir:"-"`
	Group `mir:"v1"`

	// SyncSearchIndex 同步索引
	SyncSearchIndex func(Get, Context, web.SyncSearchIndexReq) `mir:"/sync/index"`

	// GetUserInfo 获取当前用户信息
	GetUserInfo func(Get, Context, web.UserInfoReq) web.UserInfoResp `mir:"/user/info"`

	// GetMessages 获取消息列表
	GetMessages func(Get, Context, web.GetMessagesReq) web.GetMessagesResp `mir:"/user/messages"`

	// ReadMessage 标记未读消息已读
	ReadMessage func(Post, Context, web.ReadMessageReq) `mir:"/user/message/read"`

	// ReadAllMessage 标记所有未读消息已读
	ReadAllMessage func(Post, Context, web.ReadAllMessageReq) `mir:"/user/message/readall"`

	// SendUserWhisper 发送用户私信
	SendUserWhisper func(Post, Context, web.SendWhisperReq) `mir:"/user/whisper"`

	// GetCollections 获取用户收藏列表
	GetCollections func(Get, Context, web.GetCollectionsReq) web.GetCollectionsResp `mir:"/user/collections"`

	// GetStars 获取用户点赞列表
	GetStars func(Get, Context, web.GetStarsReq) web.GetStarsResp `mir:"/user/stars"`

	// UserPhoneBind 绑定用户手机号
	UserPhoneBind func(Post, Context, web.UserPhoneBindReq) `mir:"/user/phone"`

	// ChangePassword 修改密码
	ChangePassword func(Post, Context, web.ChangePasswordReq) `mir:"/user/password"`

	// ChangeNickname 修改昵称
	ChangeNickname func(Post, Context, web.ChangeNicknameReq) `mir:"/user/nickname"`

	// ChangeAvatar 修改头像
	ChangeAvatar func(Post, Context, web.ChangeAvatarReq) `mir:"/user/avatar"`

	// SuggestUsers 检索用户
	SuggestUsers func(Get, Context, web.SuggestUsersReq) web.SuggestUsersResp `mir:"/suggest/users"`

	// SuggestTags 检索标签
	SuggestTags func(Get, Context, web.SuggestTagsReq) web.SuggestTagsResp `mir:"/suggest/tags"`

	// TweetStarStatus 获取动态点赞状态
	TweetStarStatus func(Get, Context, web.TweetStarStatusReq) web.TweetStarStatusResp `mir:"/post/star"`

	// TweetCollectionStatus 获取动态收藏状态
	TweetCollectionStatus func(Get, Context, web.TweetCollectionStatusReq) web.TweetCollectionStatusResp `mir:"/post/collection"`
}

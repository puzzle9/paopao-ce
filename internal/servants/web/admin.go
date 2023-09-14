// Copyright 2022 ROC. All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

package web

import (
	"github.com/alimy/mir/v4"
	"github.com/gin-gonic/gin"
	api "github.com/rocboss/paopao-ce/auto/api/v1"
	"github.com/rocboss/paopao-ce/internal/conf"
	"github.com/rocboss/paopao-ce/internal/core"
	"github.com/rocboss/paopao-ce/internal/model/web"
	"github.com/rocboss/paopao-ce/internal/servants/base"
	"github.com/rocboss/paopao-ce/internal/servants/chain"
	"github.com/rocboss/paopao-ce/pkg/xerror"
	"github.com/sirupsen/logrus"
)

var (
	_ api.Admin = (*adminSrv)(nil)
)

type adminSrv struct {
	api.UnimplementedAdminServant
	*base.DaoServant
	ac core.AppCache
}

func (s *adminSrv) Chain() gin.HandlersChain {
	return gin.HandlersChain{chain.JWT(), chain.Admin()}
}

func (s *adminSrv) ChangeUserStatus(req *web.ChangeUserStatusReq) mir.Error {
	user, err := s.Ds.GetUserByID(req.ID)
	if err != nil || user.Model == nil || user.ID <= 0 {
		return web.ErrNoExistUsername
	}
	// 执行更新
	user.Status = req.Status
	if err := s.Ds.UpdateUser(user); err != nil {
		return xerror.ServerError
	}
	return nil
}

func (s *adminSrv) SiteInfo(req *web.SiteInfoReq) (*web.SiteInfoResp, mir.Error) {
	registerUserCount, err := s.Ds.GetRegisterUserCount()
	if err != nil {
		logrus.Errorf("get SiteInfo[1] occurs error: %s", err)
	}
	onlineUserKeys, err := s.ac.Keys(conf.PrefixOnlineUser + "*")
	if err != nil {
		logrus.Errorf("get Siteinfo[2] occurs error: %s", err)
	}
	// 错误进行宽松赦免处理
	return &web.SiteInfoResp{
		RegisterUserCount: registerUserCount,
		OnlineUserCount:   len(onlineUserKeys),
	}, nil
}

func newAdminSrv(s *base.DaoServant, ac core.AppCache) api.Admin {
	return &adminSrv{
		DaoServant: s,
		ac:         ac,
	}
}

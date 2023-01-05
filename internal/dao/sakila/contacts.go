// Copyright 2023 ROC. All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

package sakila

import (
	"github.com/jmoiron/sqlx"
	"github.com/rocboss/paopao-ce/internal/core"
	"github.com/rocboss/paopao-ce/pkg/debug"
)

var (
	_ core.ContactManageService = (*contactManageServant)(nil)
)

type contactManageServant struct {
	db            *sqlx.DB
	stmtAddFriend *sqlx.Stmt
	stmtDelFriend *sqlx.Stmt
}

func (s *contactManageServant) RequestingFriend(userId int64, friendId int64, greetings string) (err error) {
	// TODO
	debug.NotImplemented()
	return nil
}

func (s *contactManageServant) AddFriend(userId int64, friendId int64) (err error) {
	// TODO
	debug.NotImplemented()
	return nil
}

func (s *contactManageServant) RejectFriend(userId int64, friendId int64) (err error) {
	// TODO
	debug.NotImplemented()
	return nil
}

func (s *contactManageServant) DeleteFriend(userId int64, friendId int64) (err error) {
	// TODO
	debug.NotImplemented()
	return nil
}

func (s *contactManageServant) GetContacts(userId int64, offset int, limit int) (*core.ContactList, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *contactManageServant) IsFriend(userId int64, friendId int64) bool {
	// TODO
	debug.NotImplemented()
	return false
}

func newContactManageService(db *sqlx.DB) core.ContactManageService {
	return &contactManageServant{
		db:            db,
		stmtAddFriend: c(`SELECT * FROM @person WHERE first_name=?`),
		stmtDelFriend: c(`SELECT * FROM @person WHERE first_name=?`),
	}
}
// Code generated by go-mir. DO NOT EDIT.
// versions:
// - Yesql v1.1.2

package cc

import (
	"context"

	"github.com/alimy/yesql"
	"github.com/jmoiron/sqlx"
)

const (
	_TagsByKeywordB_Topic = `SELECT id, user_id, tag, quote_num FROM @tag WHERE is_del = 0 AND tag LIKE ? ORDER BY quote_num DESC LIMIT 6`
	_InsertTag_Topic      = `INSERT INTO @tag (user_id, tag, created_on, modified_on, quote_num) VALUES (?, ?, ?, ?, 1)`
	_TagsByIdA_Topic      = `SELECT id FROM @tag WHERE id IN (?) AND is_del = 0 AND quote_num > 0`
	_TagsByIdB_Topic      = `SELECT id, user_id, tag, quote_num FROM @tag WHERE id IN (?)`
	_TagsForIncr_Topic    = `SELECT id, user_id, tag, quote_num FROM @tag WHERE tag IN (?)`
	_IncrTagsById_Topic   = `UPDATE @tag SET quote_num=quote_num+1, is_del=0, modified_on=? WHERE id IN (?)`
	_NewestTags_Topic     = `SELECT t.id id, t.user_id user_id, t.tag tag, t.quote_num quote_num, u.id, u.nickname, u.username, u.status, u.avatar, u.is_admin FROM @tag t JOIN @user u ON t.user_id = u.id WHERE t.is_del = 0 AND t.quote_num > 0 ORDER BY t.id DESC LIMIT ? OFFSET ?`
	_TagsByKeywordA_Topic = `SELECT id, user_id, tag, quote_num FROM @tag WHERE is_del = 0 ORDER BY quote_num DESC LIMIT 6`
	_DecrTagsById_Topic   = `UPDATE @tag SET quote_num=quote_num-1, modified_on=? WHERE id IN (?)`
	_HotTags_Topic        = `SELECT t.id id, t.user_id user_id, t.tag tag, t.quote_num quote_num, u.id, u.nickname, u.username, u.status, u.avatar, u.is_admin FROM @tag t JOIN @user u ON t.user_id = u.id WHERE t.is_del = 0 AND t.quote_num > 0 ORDER BY t.quote_num DESC LIMIT ? OFFSET ?`
)

type Topic struct {
	yesql.Namespace `yesql:"topic"`
	DecrTagsById    string     `yesql:"decr_tags_by_id"`
	IncrTagsById    string     `yesql:"incr_tags_by_id"`
	TagsByIdA       string     `yesql:"tags_by_id_a"`
	TagsByIdB       string     `yesql:"tags_by_id_b"`
	TagsForIncr     string     `yesql:"tags_for_incr"`
	HotTags         *sqlx.Stmt `yesql:"hot_tags"`
	InsertTag       *sqlx.Stmt `yesql:"insert_tag"`
	NewestTags      *sqlx.Stmt `yesql:"newest_tags"`
	TagsByKeywordA  *sqlx.Stmt `yesql:"tags_by_keyword_a"`
	TagsByKeywordB  *sqlx.Stmt `yesql:"tags_by_keyword_b"`
}

func BuildTopic(p yesql.PreparexBuilder, ctx ...context.Context) (obj *Topic, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &Topic{
		DecrTagsById: p.QueryHook(_DecrTagsById_Topic),
		IncrTagsById: p.QueryHook(_IncrTagsById_Topic),
		TagsByIdA:    p.QueryHook(_TagsByIdA_Topic),
		TagsByIdB:    p.QueryHook(_TagsByIdB_Topic),
		TagsForIncr:  p.QueryHook(_TagsForIncr_Topic),
	}
	if obj.HotTags, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_HotTags_Topic))); err != nil {
		return
	}
	if obj.InsertTag, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_InsertTag_Topic))); err != nil {
		return
	}
	if obj.NewestTags, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_NewestTags_Topic))); err != nil {
		return
	}
	if obj.TagsByKeywordA, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_TagsByKeywordA_Topic))); err != nil {
		return
	}
	if obj.TagsByKeywordB, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_TagsByKeywordB_Topic))); err != nil {
		return
	}
	return
}

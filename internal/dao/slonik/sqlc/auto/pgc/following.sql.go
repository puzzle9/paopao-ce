// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.21.0
// source: following.sql

package pgc

import (
	"context"
)

const createFollowing = `-- name: CreateFollowing :exec

INSERT INTO p_following (user_id, follow_id, created_on) VALUES ($1, $2, $3)
`

type CreateFollowingParams struct {
	UserID    int64
	FollowID  int64
	CreatedOn int64
}

// ------------------------------------------------------------------------------
// following_manager sql dml
// ------------------------------------------------------------------------------
func (q *Queries) CreateFollowing(ctx context.Context, arg *CreateFollowingParams) error {
	_, err := q.db.Exec(ctx, createFollowing, arg.UserID, arg.FollowID, arg.CreatedOn)
	return err
}

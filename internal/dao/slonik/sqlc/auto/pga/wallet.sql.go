// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.21.0
// source: wallet.sql

package pga

import (
	"context"
)

const getUserWalletBills = `-- name: GetUserWalletBills :one

SELECT id, user_id, change_amount, balance_snapshot, reason, post_id, created_on, modified_on, deleted_on, is_del 
FROM p_wallet_statement 
WHERE user_id=$1 AND is_del=0 
ORDER BY id DESC 
LIMIT $2 OFFSET $3
`

type GetUserWalletBillsParams struct {
	UserID int64
	Limit  int32
	Offset int32
}

// ------------------------------------------------------------------------------
// wallet sql dml
// ------------------------------------------------------------------------------
func (q *Queries) GetUserWalletBills(ctx context.Context, arg *GetUserWalletBillsParams) (*PWalletStatement, error) {
	row := q.db.QueryRow(ctx, getUserWalletBills, arg.UserID, arg.Limit, arg.Offset)
	var i PWalletStatement
	err := row.Scan(
		&i.ID,
		&i.UserID,
		&i.ChangeAmount,
		&i.BalanceSnapshot,
		&i.Reason,
		&i.PostID,
		&i.CreatedOn,
		&i.ModifiedOn,
		&i.DeletedOn,
		&i.IsDel,
	)
	return &i, err
}

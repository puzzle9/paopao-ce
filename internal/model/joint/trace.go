// Copyright 2024 ROC. All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

package joint

import "context"

type TraceContext interface {
	SetContext(c context.Context)
	Context() context.Context
}

type BaseTraceContext struct {
	ctx context.Context
}

func (tc *BaseTraceContext) SetContext(c context.Context) {
	tc.ctx = c
}

func (tc *BaseTraceContext) Context() context.Context {
	return tc.ctx
}

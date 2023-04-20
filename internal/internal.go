// Copyright 2022 ROC. All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

package internal

import (
	"github.com/rocboss/paopao-ce/internal/migration"
	"github.com/rocboss/paopao-ce/internal/wasm"
)

func Initial() {
	migration.Run()
	wasm.Initial()
}

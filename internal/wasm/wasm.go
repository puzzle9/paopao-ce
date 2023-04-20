// Copyright 2023 ROC. All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

package wasm

import (
	"github.com/alimy/cfg"
	"github.com/rocboss/paopao-ce/internal/wasm/calculator"
	"github.com/sirupsen/logrus"
)

func Initial() {
	if cfg.If("Wasm") || cfg.If("WebAssembly") {
		logrus.Infoln("wasm(initial): just for wasm test now")
		calculator.Run(4, 21)
	}
}

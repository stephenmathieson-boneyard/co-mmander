
BIN := node_modules/.bin
REPORTER ?= spec

test: node_modules
	@$(BIN)/mocha \
	  --harmony-generators \
	  --require co-mocha \
	  --reporter $(REPORTER)

node_modules: package.json
	@npm install
	@touch $@

.PHONY: test

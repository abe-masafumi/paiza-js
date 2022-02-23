# github actions

----

<!-- [document](https://docs.github.com/en/actions) -->
[document](https://docs.cypress.io/guides/continuous-integration/github-actions#Cypress-GitHub-Action)

- エラー 一覧

1. [Error: Cache folder path is retrieved for npm but doesn't exist on disk: /home/runner/.npm](https://github.com/actions/setup-node/issues/317)

> 解決

```yml
name: Node.js CI

on:
  push:
    branches: [master]
  pull_request:
    branches: [master]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}

          # cacheを設定する場合はcache用のフォルダを設定しないといけないのでコメントアウト
          # cache: "npm"
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```
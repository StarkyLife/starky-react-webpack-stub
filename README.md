# Template for bootstrapping React projects via webpack

## How to reuse this template?

1. Clone
2. rm -rf .git - to clean history
3. git init
4. Update package.json meta information
5. Update README.md
6. Update index.html
7. Update service name in docker-compose.tests.yml

## Available commands

```sh
# build and run app's container
docker build -t app-image .
docker run -p 8080:8080 --name app-container app-image

# local development
yarn start:dev

# production
yarn build && yarn start:prod

# lint & test
yarn verify

# unit tests
yarn test

# integration tests
yarn test:int
docker compose -f docker-compose.tests.yml up int-tests

# e2e tests
yarn test:e2e
yarn test:e2e:ui
docker compose -f docker-compose.tests.yml up e2e-tests
```

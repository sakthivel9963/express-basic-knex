# express-basic-knex

## knex command

Knex help

```sh
npx knex -h
```

Knex init

```sh
npx knex init
```

knex migrate

```sh
npx knex migrate:make initial
```

initial is the custom name in which file is created.

knex migrate run latest

```sh
npx knex migrate:latest
```

knex migrate rollback

```sh
npx knex migrate:rollback
```

knex create all the initial folder and file in the requiere directory

```sh
npx knex seed:make initial
```

initial is the custom name in which file is created.

we can create multiple seed file and the seed file will in alphabetical order.

run all the seed file

```sh
npx knex seed:run
```

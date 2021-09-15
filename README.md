To see test failures:

- run a postgres container: `docker run --rm -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres`
- run the tests: `PGUSER=postgres PGDATABASE=postgres PGPASSWORD=postgres deno test --allow-all`

I'm seeing output like:
```
AssertionError: Test case is leaking async ops.
Before:
  - dispatched: 91
  - completed: 71
After:
  - dispatched: 151
  - completed: 151
```

However, the `Before:` numbers change from run to run. This makes sense, the timinig of when the `Pool` is constructed is not correlated to the beginning of the test in any way.
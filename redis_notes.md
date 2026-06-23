## Redis is…

Redis is an in-memory key-value store. It keeps all data in RAM, so
reading and writing are very fast. But RAM is small and expensive, so Redis is used for data that must be fast, not for storing everything permanently.

## Data structures used in this assignment

| Structure | What it stores | Used for |
| --- | --- | --- |
| String | one key -> one value | single product fields (`product:1:name`) |
| Hash | one key -> many fields | a whole product as an object (`product:2`) |
| List | ordered values | feed of recent orders (`recent_orders`) |
| Set | unique values, no order | product tags (`product_tags`) |
| Sorted Set | unique values ordered by a score | sales leaderboard (`sales_leaderboard`) |
| TTL | expiration time on a key | featured product and cached page |

## Main use cases

- **Caching** — store the result of a slow operation with a TTL, so the
  next requests are answered instantly from Redis.
- **Session storage** — keep user sessions that are read on every request
  and expire after some time.
- **Leaderboards / ranking** — a Sorted Set keeps items ordered by score
  automatically, so showing the top items is one fast command.
- **Rate limiting** — count requests with a short TTL to limit how often a
  user can do something.
- **Real-time feeds / queues** — Lists keep a short ordered feed of recent
  events .

## Redis vs main database

- Use the main database to store all data permanently.
- Use Redis for the small, frequently-read data that can be rebuilt if lost: cached
results, sessions, counters, and rankings.
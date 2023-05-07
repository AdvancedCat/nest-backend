


# 数据库

Powered by Prisma

## 填充假数据

```bash
# in package.json
"prisma": {
    "seed": "ts-node prisma/seed.ts"
}
# 填充假数据
$ npx prisma db seed
```
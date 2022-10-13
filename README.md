# GraphQL, Apollo Client, CodeGen and NextJS with TypeScript 
## Enviorment
NEXT_PUBLIC_ACCESS_TOKEN should be set inside a .env.local file
```

NEXT_PUBLIC_ACCESS_TOKEN = token

```
## CodeGen
* Generates TypeScript types from graphql which results in end-to-end type saftey 
[Read more](https://www.the-guild.dev/graphql/codegen)

* Codegen will look at any .graphql or .gql file inside the `/graphql/queries` folder.


* CodeGen configuration -> codegen.yml

```bash
npm run codegen
#will generate new graphql/generated/schema.ts file
npm run codegenw
#will generate new graphql/generated/schema.ts and watch for changes in .graphql and .gql files
npm run dev
# Will also run "npm run codegen" on start 
```

* [This VS Code extension](https://marketplace.visualstudio.com/items?itemName=capaj.graphql-codegen-vscode) will auto generate the schema.ts file every time you hit save inside .gql or .graphql file.

* `pages/index.tsx` does not use CodeGen files. Only Apollo Client.

---
## Apollo Client & Codegen
A hook will be generated for each query inside `graphql/queries`. The hook can be imported from graphql/generated/schema.ts. 
See `pages/work/[id].tsx` for an example. useGetWorkQuery()

---
## Next
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

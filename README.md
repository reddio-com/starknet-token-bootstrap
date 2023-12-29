# Token app bootstrap on Starknet

This is a [Starknet token app](https://starknet-token-bootstrap.vercel.app/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [starknet-react](https://github.com/apibara/starknet-react).

![Starknet token bootstrap](public/screenshot.png)

## Getting Started

First, clone the repo and install the dependencies:

```sh
git clone git@github.com:reddio-com/starknet-token-bootstrap.git
```

```sh
cd starknet-token-bootstrap
```

Next, go to /deploy folder, compile and deploy the ERC20 smart contract by following this [guide](https://github.com/reddio-com/cairo).

Then, register your Reddio account to get API Key from [Dashboard](https://dashboard.reddio.com/), fill your API Key at .env file,

```javascript
NEXT_PUBLIC_REDDIO_API_KEY="your-reddio-api-key"
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


Note:
You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

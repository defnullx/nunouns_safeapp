import dotenv from 'dotenv';

dotenv.config();

export const config = {
  redisPort: Number(process.env.REDIS_PORT ?? 6379),
  redisHost: process.env.REDIS_HOST ?? 'localhost',
  redisDb: Number(process.env.REDIS_DB ?? 0),
  redisPassword: process.env.REDIS_PASSWORD,
  nounsSubgraph:
    process.env.NOUNS_SUBGRAPH_URL ??
    'https://api.thegraph.com/subgraphs/name/nunounsdao/nunouns-subgraph-mainnet',
  twitterEnabled: process.env.TWITTER_ENABLED === 'true',
  twitterClientId:
    process.env.TWITTER_CLIENT_ID ?? '',
  twitterClientSecret:
    process.env.TWITTER_CLIENT_SECRET ?? '',
  twitterAppKey:
    process.env.TWITTER_APP_KEY ?? '',
  twitterAppSecret:
    process.env.TWITTER_APP_SECRET ?? '',
  twitterAccessToken:
    process.env.TWITTER_ACCESS_TOKEN ?? '',
  twitterAccessSecret:
    process.env.TWITTER_ACCESS_SECRET ?? '',
  twitterBearerToken:
    process.env.TWITTER_BEARER_TOKEN ?? '',
  nounsTokenAddress:
    process.env.NOUNS_TOKEN_ADDRESS ?? '0x4c597608A1045ac3089B4683f2787AF8f991139D',
  jsonRpcUrl: process.env.JSON_RPC_URL ?? '',
  discordEnabled: process.env.DISCORD_ENABLED === 'true',
  discordWebhookToken: process.env.DISCORD_WEBHOOK_TOKEN ?? '',
  discordWebhookId: process.env.DISCORD_WEBHOOK_ID ?? '',
  discordPublicWebhookToken: process.env.DISCORD_PUBLIC_WEBHOOK_TOKEN ?? '',
  discordPublicWebhookId: process.env.DISCORD_PUBLIC_WEBHOOK_ID ?? '',
  pinataEnabled: process.env.PINATA_ENABLED === 'true',
  pinataApiKey: process.env.PINATA_API_KEY ?? '',
  pinataApiSecretKey: process.env.PINATA_API_SECRET_KEY ?? '',
};

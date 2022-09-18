export enum ExternalURL {
  discord,
  twitter,
  notion,
  discourse,
}

export const externalURL = (externalURL: ExternalURL) => {
  switch (externalURL) {
    case ExternalURL.discord:
      return 'http://discord.gg/nounpunks';
    case ExternalURL.twitter:
      return 'https://twitter.com/nunounsdao';
    case ExternalURL.notion:
      return 'https://nounpunks.notion.site/nounpunks/Welcome-to-nuNouns-6bd35761417e49dcb3e2c02c83d4e7eb';
    case ExternalURL.discourse:
      return 'https://nunouns.discourse.group/';
  }
};

import { TweetV2PostTweetResult, TwitterApi } from 'twitter-api-v2';
import * as dotenv from 'dotenv';

dotenv.config();

export async function PostTweet(
  tweet: string,
): Promise<TweetV2PostTweetResult> {
  const twitterClient = new TwitterApi({
    appKey: process.env.appKey,
    appSecret: process.env.appSecret,
    accessToken: process.env.accessToken,
    accessSecret: process.env.accessSecret,
  });

  const result = await twitterClient.v2.tweet(tweet);
  return result;
}

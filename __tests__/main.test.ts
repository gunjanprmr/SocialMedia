import { PostTweet } from '../src/main.js';
import { v4 as uuidv4 } from 'uuid';

describe('greeter function', () => {
  beforeAll(async () => {});

  // Teardown (cleanup) after assertions
  afterAll(() => {});

  // Assert if setTimeout was called properly
  it('Successful tweet', async () => {
    const mockTweet = uuidv4();
    const response = await PostTweet(mockTweet);
    console.log(response);
    expect(response.data.text).toEqual(mockTweet);
  });
});

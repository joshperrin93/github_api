const Github = require('./github');
const GithubApi = require('./githubApi');

describe('Github', () => {
  it('fetches sinatra/sinatra with a mock API', () => {
    const mockedApi = {
      fetchRepositoryData: (repoName, callback) => {
        callback({
          name: 'sinatra/sinatra',
          description: 'Some fake description'
        });
      }
    };

    const github = new Github(mockedApi);
    
    github.fetch('sinatra/sinatra')
    expect(github.getRepoData()).toEqual({
      name: 'sinatra/sinatra',
      description: 'Some fake description'
    })
  });

  it('fetches sinatra/sinatra with real API', async() => {
    const githubApi = new GithubApi('sinatra/sinatra', callback)
    const github = new Github(githubApi)

    github.fetch('sinatra/sinatra')

    await new Promise(resolve => setTimout(resolve, 1000))

    expect(github.getRepoData().id).toEqual(106995)
  })
});
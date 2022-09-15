const Github = require('./github');
const GithubApi = require('./githubApi');

describe('Github', () => {
  it('fetches sinatra/sinatra', () => {
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
});
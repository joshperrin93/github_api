const api = require('./githubApi');
const github = require('./github');

describe('github', () => {
    it('should return a JS object', () => {
        const api = new GithubApi()
        const github = new Github(api)

        github.fetch('sinatra/sinatra')

        expect(github.getRepoData().id).toEqual(106995)
    })
})
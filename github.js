const GithubApi = require('./githubAPI');

class Github {
  constructor(api) {
    this.api = api;
    this.data = null;
  }

  fetch(path) {
    this.api.fetchRepositoryData(path, (response) => {
      this.data = response;
    });
  }

  getRepoData() {
    return this.data
  }
}

module.exports = Github;

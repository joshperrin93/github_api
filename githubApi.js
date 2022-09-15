const got = require('got');

class GithubApi {
  fetchRepositoryData(path, callback) {
    const url = 'https://api.github.com/repos/' + path;
    got(url).then((response) => {
      const responseObj = JSON.parse(response.body);
      callback(responseObj);
    });
  };
}

module.exports = GithubApi;
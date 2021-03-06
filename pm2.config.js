module.exports = {
  apps: [
    {
      name: "nodeDeployfe",
      script: "index.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],
  deploy: {
    user: "root",
    host: ["49.234.222.116"],
    port: "22",
    ref: "origin/master",
    repo: "https://github.com/mission-sun/nodeDeployfe.git",
    path: "file01/nideFirst",
    ssh_options: "StrictHostKeyChecking=no",
    env: {
      NODE_ENV: "production"
    }
  }
};

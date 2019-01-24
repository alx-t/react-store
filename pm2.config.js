module.exports = {
  apps: [
    {
      name: 'ReactStor',
      script: './build/server.js',
      cwd: '/home/alxt/react_stor/current',
      instances: 2,
      exec_mode: 'cluster',
      env_production: {
        NODE_ENV: 'production',
        PORT: 9020
      }
    }
  ],

  deploy: {
    production: {
      user: 'alxt',
      host: ['test.host.com'],
      ref: 'origin/master',
      repo: 'git@github.com:alx-t/react-store.git',
      path: '/home/alxt/react_stor',
      'post-deploy': 'yarn && yarn build:server && pm2 startOrRestart pm2.config.js --env production'
    }
  }
};

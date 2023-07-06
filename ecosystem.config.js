module.exports = {
  apps: [
    {
      name: 'strapi-deployment', // Your project name
      cwd: '/home/ubuntu/strapi-deployment', // Path to your project
      script: 'npm', // For this example we're using npm, could also be yarn
      args: 'start', // Script to start the Strapi server, `start` by default
      env: {
        APP_KEYS: 'SL5DZZfofYWmkKRje4RqNA==,ZlORgaMUNSMO03nC0Oa/Xg==,rdMrkCue/50PWrcF3wFL4g==,Xen3E+XxP4ooIVr7zpZplA==', // you can find it in your project .env file.
        API_TOKEN_SALT: 'nhr9/rzd4WmnLqaGRybraA==',
        ADMIN_JWT_SECRET: 'm3SCRvapRyD9thzHhABpew==',
        JWT_SECRET: '/5WDGdXKnlcPD8onZor6aA==',
        NODE_ENV: 'production',
        DATABASE_HOST: '127.0.0.1', // database Endpoint under 'Connectivity & Security' tab
        DATABASE_PORT: '5432',
        DATABASE_NAME: 'acadamiastrapi', // DB name under 'Configuration' tab
        DATABASE_USERNAME: 'saleor', // default username
        DATABASE_PASSWORD: 'saleor',
      },
    },
  ],
};

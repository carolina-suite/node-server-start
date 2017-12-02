
this.SITE = {
  // mongodb configuration
  db: {
    host: 'localhost',
    name: 'carolina',
    port: 27017
  },
  email: {
    address: 'webmaster@example.com',
    // email service choice
    serviceName: 'HtmlEmailService',
    // only used for AwsSesEmailService
    awsProfile: 'default',
    awsRegion: 'us-west-2'
  },
  // npm log levels
  logLevel: {
    db: 'warning',
    file: 'info',
    console: 'silly'
  },
  // sitewide title
  name: 'My Site',
  // static files to copy from node_modules (to update)
  npmStaticFiles: [
    // code mirror
    {
      src: './node_modules/codemirror/lib/codemirror.css',
      dest: './site/static/css/codemirror.css'
    },
    // font-awesome
    {
      src: './node_modules/font-awesome/css/font-awesome.min.css',
      dest: './site/static/css/font-awesome.min.css'
    },
    {
      src: './node_modules/font-awesome/fonts/FontAwesome.otf',
      dest: './site/static/fonts/FontAwesome.otf'
    },
    {
      src: './node_modules/font-awesome/fonts/fontawesome-webfont.eot',
      dest: './site/static/fonts/fontawesome-webfont.eot'
    },
    {
      src: './node_modules/font-awesome/fonts/fontawesome-webfont.svg',
      dest: './site/static/fonts/fontawesome-webfont.svg'
    },
    {
      src: './node_modules/font-awesome/fonts/fontawesome-webfont.ttf',
      dest: './site/static/fonts/fontawesome-webfont.ttf'
    },
    {
      src: './node_modules/font-awesome/fonts/fontawesome-webfont.woff',
      dest: './site/static/fonts/fontawesome-webfont.woff'
    },
    {
      src: './node_modules/font-awesome/fonts/fontawesome-webfont.woff2',
      dest: './site/static/fonts/fontawesome-webfont.woff2'
    }
  ]
};

Package.describe({
  name: 'pinku1:stellar',
  summary: 'Stellar.js - Parallax scrolling made easy'
  version: '0.1.0',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/perminder-klair/meteor-stellar',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files(['bower_components/stellar.js/jquery.stellar.js'], 'client');
});

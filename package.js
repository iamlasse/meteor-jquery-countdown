Package.describe({
  name: 'krisp:jquery-countdown-timer',
  summary: 'Reverse count down jquery plugin as per your need.',
  version: '1.0.0',
  git: 'https://github.com/Reflejo/jquery-countdown.git'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
  api.imply('jquery', 'client');
  api.addFiles([
    'jqcountdown/js/jquery.countdown.js',
    'jqcountdown/css/media.css'
  ], 'client'
  );
});
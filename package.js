Package.describe({
  name: 'krisp:jquery-countdown-timer',
  summary: 'Reverse count down jquery plugin as per your need.',
  version: '1.7.0',
  git: 'https://github.com/harshen/jquery-countdownTimer.git'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
  api.imply('jquery', 'client');
  api.addFiles([
    'countdown/jquery.countdownTimer.min.js',
    'countdown/CSS/jquery.countdownTimer.css'
  ], 'client'
  );
});
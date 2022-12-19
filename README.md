# wsssockexample

Ensure to refer the .env file to update the private key and certificate path

Start an app
The simplest way to start, daemonize and monitor your application is by using this command line:

$ pm2 start server/secser.js


Managing processes
Managing application state is simple here are the commands:

$ pm2 restart app_name
$ pm2 reload app_name
$ pm2 stop app_name
$ pm2 delete app_name

Display logs
To display logs in realtime:

$ pm2 logs


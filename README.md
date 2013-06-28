# About StatD w/ CloudWatch

This is the statsd server for [Mozilla-IDP](https://github.com/mozilla/vinz-clortho) project, 
with the CloudWatch backend as a dependency. No need to install the backend 
as a global library. 

It listens on `127.0.0.1` for StatsD UDP messages and sends them off to CloudWatch. 

## Running It

    > start-server default-config.js

## CloudWatch Backend 

See: [statsd-backend-cloudwatch](https://github.com/mostlygeek/statsd-backend-cloudwatch)

## License

MIT


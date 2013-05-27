# About

This is the statsd server for [Mozilla-IDP][https://github.com/mozilla/vinz-clortho] project. 
It listens on `localhost` for StatsD UDP messages and sends them off to CloudWatch. 

# AWS Permissions / Roles

* IAM Role's access key, secret and token are pulled from the EC2 meta-data
* that's it. :) 

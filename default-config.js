/**
 * Default configuration for Mozilla-IDP statsd monitor
 */
{
  address: "127.0.0.1",
  port: 8125
, backends: [ 
    // "statsd-backend-raw", /* uncomment to see raw output dumped to the console */
    "statsd-backend-cloudwatch" 
]
, flushInterval : 60000 /* 1min, min. granularity of cloudwatch */

, cloudwatch: {
      namespace : "MozIDP",
      region    : "__AUTO",
      creds     : "IAM"
  }
};

/**
 * Staging Configuration ... more debug output
 */
{
  address: "127.0.0.1",
  port: 8125
, backends: [ 
    // "statsd-backend-raw",
    "statsd-backend-cloudwatch" 
]
, flushInterval : 60000 /* 1min, min. granularity of cloudwatch */

, cloudwatch: {
      namespace : "MozIDP",
      region    : "__AUTO",
      creds     : "IAM",
      debug     : true
  }
};

import IBMCOS from 'ibm-cos-sdk';
import util from 'util';
import stream from 'stream';
import * as AWS from 'aws-sdk';
//AWS.EventListeners['Core'].removeListener('afterBuild', AWS.EventListeners['Core'].COMPUTE_SHA256);

const config= {
    endpoint: 's3.ap.cloud-object-storage.appdomain.cloud',
    apiKeyId: 'gvGnsya130a5RmMyOELPxPDNInBYpsMCnBV3ijLAomhP',
    serviceInstanceId: 'crn:v1:bluemix:public:cloud-object-storage:global:a/a4f7deacfe2e492d89d8f66e2a7fa9b8:4c65a3c8-516c-4856-a0f6-902a195fbce8::',
    credentials: {
        accessKeyId: '6e5a715ff97d44f494b6ca1f3393a4b6',
        secretAccessKey: '17ad4c7ae58a92ed9c3251d8698dda314ad47ac439a30f49',
    },
    //region: 'eu-gb',
};

const cos = new AWS.S3(config);

export const doCreateBucket = () => {
    console.log('Creating bucket');
    return cos.createBucket({
        Bucket: 'disaster-resiliency-my-bucket-test1',
        CreateBucketConfiguration: {
          LocationConstraint: 'ap-standard'
        },
        //IBMServiceInstanceId: 'crn:v1:bluemix:public:cloud-object-storage:global:a/a4f7deacfe2e492d89d8f66e2a7fa9b8:4fcb054b-fb1d-4f49-bd72-fd50d5b33514::',
    }).promise();
}
 
export const doCreateObject = (title,image,location) => {
    console.log('Creating object');
    return cos.putObject({
        Bucket: 'disaster-resiliency-my-bucket-test1',
        Key: JSON.stringify(image),
        Body: JSON.stringify(location)
    }).promise();
}
 
function doDeleteObject() {
    console.log('Deleting object');
    return cos.deleteObject({
        Bucket: 'my-bucket',
        Key: 'foo'
    }).promise();
}
 
export const doDeleteBucket = () => {
    console.log('Deleting bucket');
    return cos.deleteBucket({
        Bucket: 'my-bucket'
    }).promise();
}
 
// doCreateBucket()
//     .then(doCreateObject)
//     .then(doDeleteObject)
//     .then(doDeleteBucket)
//     .then(function() {
//         console.log('Finished!');
//     })
//     .catch(function(err) {
//         console.error('An error occurred:');
//         console.error(util.inspect(err));
//     });


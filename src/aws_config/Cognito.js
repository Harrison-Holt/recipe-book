import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'us-east-1_AkRD8bJUN',
    ClientId: '42qk69ucev7p5j7jt7dpjtlisa'
}

const  userPool = new CognitoUserPool(poolData); 

export default userPool; 
import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'us-east-1_aLN62XR1m',
    ClientId: '62thbei4nhiivplj5vdiafn26i'
}

export default new CognitoUserPool(poolData); 
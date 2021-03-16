# OpenGraphParser-Lambda


OpenGraph Protocol을 호출해 OG 값을 반환하는 Serverless기반 프로젝트입니다.

클라이언트 사이드에서는 CORS 정책에 의해 값을 가져올 수 없고, 
Server에서 처리하자니 비용에 대한 부담을 줄이고자 Serverless로 설계하였으며
AWS Lambda + AWS API Gateway 서비스를 기준으로 작성하였습니다.

Lambda에 업로드하는 파일은 작성한 스크립트 파일(js)과 node_modules 폴더입니다. 
이를 압축해서 aws cli 명령어를 통해 zip 파일을 업로드하는 방식으로 진행됩니다.

```
npm install
# Lambda에 업로드하기 위한 zip 파일로 만들어주는 명령어입니다.
npm run make

#aws cli를 설치한 뒤, IAM 계정을 만든 후 사용해주세요.
#권한은 미리정의된 권한에서 AWS Lambda FullAccess 권한이 필요합니다.
aws cli configure

#이 명령어를 통해 IAM 계정과 aws cli를 연동합니다.
#이미 다른 서비스를 통해 cli 연동을 했으면 안해도 무방합니다.
aws lambda update-function-code --function-name YOUR_FUNCTION_NAME --zip-file fileb://lambdaFunc.zip
#lambdaFunc.zip 은 npm run make를 통해 생성된 파일입니다.
```

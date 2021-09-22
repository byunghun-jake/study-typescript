# TS Config



## TS Config 셋업하기

```bash
# tsconfig.json 파일 생성
$ tsc --init

# tsconfig에 맞도록 compiler 실행
$ tsc -w
```



## 프로젝트 구조 정리하기

### Option

```json
// tsconfig.json
{
    "compilerOptions": {
        outDir: "./build",
        rootDir: "./src",
    },
    // "exclude": ["./src/dev.ts"],
  	// "include": ["./src/main.ts"]
}
```

#### compilerOptions

1. outDir

   > Specify an output folder for all emitted files.

   TS에서 JS 파일로 컴파일된 파일의 기본 생성위치는 Config 파일이 위치한 곳이다.

   컴파일된 JS 파일의 생성위치를 옮기려면?

2. rootDir

   > Specify the root folder within your source files.
   >
   > 컴파일 할 타입스크립트 파일의 최상위 경로를 설정합니다.

#### exclude

> 컴파일하지 않을 파일을 지정합니다.



#### include

> 컴파일 할 파일을 지정합니다.







compile의 source 파일이 최상위 디렉토리가 아닌 다른 곳에 있다면, output의 위치는 어떻게 될까?

1. 모든 ts 파일이 동일한 디렉토리에 있을 때

   ```
   /src
   	main.ts
   	logging.ts
   tsconfig.json
   ```

   ```
   /build
   	main.js
   	logging.js
   ```

2. ts파일이 다른 디렉토리에 있을 때

   ```
   /src
   	main.ts
       /logging
           logging.ts
   ```

   

   ```
   /build
       main.js
       /logging
   		logging.js
   ```

> 타입스크립트 파일이 있는 최상위 디렉토리를 기준으로 작성된다.


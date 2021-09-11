{
  // 예상 가능한 에러라면, throw가 아닌 ErrorState를 리턴하자.

  interface NetworkClient {
    tryConnect(): void
  }

  type NetworkErrorState = {
    result: "fail"
    reason: "offline" | "down" | "timeout"
  }

  type SuccessState = {
    result: "success"
  }

  type ResultState = SuccessState | NetworkErrorState

  class NetworkClientImpl implements NetworkClient {
    tryConnect(): ResultState {
      return {
        result: "fail",
        reason: "offline",
      }
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect()
      // login...
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login()
      } catch (error) {
        // show dialog
      }
    }
  }

  const client = new NetworkClientImpl()
  const service = new UserService(client)
  const app = new App(service)
  app.run()
}

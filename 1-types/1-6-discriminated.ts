{
  /**
   * Union Types: OR
   * 활용도가 굉장히 높다.
   */

  // function: login -> success, fail
  type SuccessState = {
    result: "success"
    response: {
      body: string
    }
  }
  type FailState = {
    result: "fail"
    message: string
  }
  type LoginState = SuccessState | FailState
  function login(id: string, password: string): LoginState {
    try {
      console.log("request 요청")
      console.log("성공")
      return {
        result: "success",
        response: {
          body: "Login",
        },
      }
    } catch (error) {
      return {
        result: "fail",
        message: "실패!",
      }
    }
  }

  // printLoginState(state)
  // success => ✅, body
  // fail => 🥲, message
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`)
    } else {
      console.log(`💩 ${state.message}`)
    }
  }
}

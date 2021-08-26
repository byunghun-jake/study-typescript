{
  /**
   * Union Types: OR
   * 활용도가 굉장히 높다.
   */

  type Direction = "left" | "right" | "up" | "down"

  function move(direction: Direction) {
    console.log(direction)
  }

  move("down")
  move("right")

  type TileSize = 8 | 16 | 32
  const tile: TileSize = 32

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string
    }
  }
  type FailState = {
    message: string
  }
  type LoginState = SuccessState | FailState
  function login(id: string, password: string): LoginState {
    try {
      console.log("request 요청")
      console.log("성공")
      return {
        response: {
          body: "Login",
        },
      }
    } catch (error) {
      return {
        message: "실패!",
      }
    }
  }

  // printLoginState(state)
  // success => ✅, body
  // fail => 🥲, message
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`🎉 ${state.response.body}`)
    } else {
      console.log(`💩 ${state.message}`)
    }
  }
}

{
  // 언어별 존재하는 객체 이름
  // Java: Exception
  // JavaScript: Error
  // Error(Exception) Handling: try(시도) -> catch(에러 발생) -> finally(무조건 실행)
  function readFile(fileName: string): string {
    if (fileName === "not exist! 💩") {
      throw new Error("파일이 존재하지 않아요!")
    }
    return "file contents!"
  }

  function closeFile(fileName: string) {
    //
  }

  const fileName = "file"
  try {
    console.log(readFile(fileName))
  } catch (error) {
    console.log("error 잡았다!")
  } finally {
    closeFile(fileName)
    console.log("finally!")
  }
}

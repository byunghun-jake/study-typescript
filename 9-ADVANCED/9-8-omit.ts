{
  // 기존 타입에서 필요없는 Attribute를 제거하고 싶을 떄

  type Video = {
    id: string
    title: string
    url: string
    data: string
  }

  type VideoMetadata = Omit<Video, "url" | "data">
  // type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
  // type Exclude<T, U> = T extends U ? never : T;

  function getVideo(id: string): Video {
    console.log(`axios.get(/videos/${id})`)
    return {
      id: "1",
      data: "byte-data",
      title: "video",
      url: "https://",
    }
  }

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: "title",
    }
  }

  type User = {
    name: string
    age: number
    joinDate: string
  }

  const excludeUser: Exclude<"name" | "age" | "joinDate", "joinDate"> = "age"
}

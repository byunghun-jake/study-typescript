{
  // 기존 타입에서 필요한 Attribute만 골라서 사용하고 싶을 때

  type Video = {
    id: string
    title: string
    url: string
    data: string
  }

  type VideoMetadata = Pick<Video, "id" | "title">

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
}

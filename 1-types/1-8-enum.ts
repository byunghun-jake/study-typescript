{
  /**
   * Enum 💩
   * 상수 값을 모아서 정리하는 타입
   * Enum이 필요한 경우: 다른 클라이언트와 값을 주고받아야 하는 경우 (ex, 안드로이드, IOS)
   */
  // JavaScript
  // 상수 표현
  const MAX_NUM = 1000
  const MAX_STUDENTS_PER_CLASS = 15

  const MONDAY = 0
  const TUESDAY = 1
  const WEDNESDAY = 2
  // enum에 가깝게 표현하려면?
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  })
  const dayOfToday = DAYS_ENUM.MONDAY
  console.log(dayOfToday)

  //TypeScript
  // enum Days {
  //   Monday = "MON",
  //   TuesDay = "TUE",
  //   WednesDay = "WED",
  //   Thursday = "THU",
  //   Friday = "FRI",
  //   Satarday = "SAT",
  //   Sunday = "SUN",
  // }
  // enum Days {
  //   Monday = 1, // 1
  //   TuesDay, // 2
  //   WednesDay, // 3
  //   Thursday,
  //   Friday,
  //   Satarday,
  //   Sunday,
  // }
  enum Days {
    Monday, // 0
    TuesDay, // 1
    WednesDay, // 2
    Thursday,
    Friday,
    Satarday,
    Sunday,
  }
  console.log(Days.Monday)
  let day: Days = Days.Friday
  day = 100 // Error가 발생하지 않는 것이 문제
  console.log(day)

  /**
   * UNION으로 대체하는 방법
   */
  type DaysOfWeek = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN"
  let today: DaysOfWeek = "MON"
  console.log(today)
}

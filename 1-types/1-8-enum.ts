{
  /**
   * Enum ๐ฉ
   * ์์ ๊ฐ์ ๋ชจ์์ ์ ๋ฆฌํ๋ ํ์
   * Enum์ด ํ์ํ ๊ฒฝ์ฐ: ๋ค๋ฅธ ํด๋ผ์ด์ธํธ์ ๊ฐ์ ์ฃผ๊ณ ๋ฐ์์ผ ํ๋ ๊ฒฝ์ฐ (ex, ์๋๋ก์ด๋, IOS)
   */
  // JavaScript
  // ์์ ํํ
  const MAX_NUM = 1000
  const MAX_STUDENTS_PER_CLASS = 15

  const MONDAY = 0
  const TUESDAY = 1
  const WEDNESDAY = 2
  // enum์ ๊ฐ๊น๊ฒ ํํํ๋ ค๋ฉด?
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
  day = 100 // Error๊ฐ ๋ฐ์ํ์ง ์๋ ๊ฒ์ด ๋ฌธ์ 
  console.log(day)

  /**
   * UNION์ผ๋ก ๋์ฒดํ๋ ๋ฐฉ๋ฒ
   */
  type DaysOfWeek = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN"
  let today: DaysOfWeek = "MON"
  console.log(today)
}

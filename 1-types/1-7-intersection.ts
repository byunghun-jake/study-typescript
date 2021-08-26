{
  /**
   * Intersection Types: &
   */
  type Student = {
    name: string
    score: number
  }

  type Worker = {
    employeeId: number
    work: () => void
  }

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.score, person.work())
  }

  internWork({
    employeeId: 1,
    name: "김병훈",
    score: 100,
    work: () => {},
  })
}

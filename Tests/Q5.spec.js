const getCandidates = require('@questions/Q5');

describe('testing for "getCandidates" function', () => {
  const mockDB = {
    Compiler: [
      {
        name: "User4",
        rollNumber: 4
      },
      {
        name: "User2",
        rollNumber: 2
      },
      {
        name: "User3",
        rollNumber: 3
      }
    ],
    MPMC : [
      {
        name: "User2",
        rollNumber: 2
      },
      {
        name: "User3",
        rollNumber: 3
      },
      {
        name: "User4",
        rollNumber: 4
      }
    ],
    AI : [
      {
        name: "User2",
        rollNumber: 2
      },
      {
        name: "User4",
        rollNumber: 4
      }
    ],

  }
  it('getCandidates function should be defined', () =>  {
    expect(getCandidates).toBeDefined();
  });
  it('when no parameter provided, should return empty array', () => {
    expect(getCandidates()).toHaveLength(0);
  });
  it('when Database is provided, but no subject array is provided, should return array containing all unique students', () => {
    expect(getCandidates(mockDB).toHaveLength(4));
  })
  it('when Database and subject array(with just 1 subject) both are provided, should return students that have taken just that subject', () => {
    expect(getCandidates(mockDB,['AI'])).toHaveLength(mockDB['AI'].length);
  });
  it('when Database and subject array(2 subjects) both are provided, should return corresponding array of students', () => {
    const mockResult = [
      {
        name: "User4",
        rollNumber: 4
      },
      {
        name: "User2",
        rollNumber: 2
      }
    ]
    expect(getCandidates(mockDB,['AI', 'Compiler'])).toHaveLength(mockResult.length);
  });
  it('when Database and subject array(3 subjects) both are provided, should return corresponding array of students', () => {
    const mockResult = [
      {
        name: "User4",
        rollNumber: 4
      }
    ]
    expect(getCandidates(mockDB,['AI', 'Compiler','MPMC'])).toEqual(mockResult.length);
  });
  it('when subject array contains subjects not in DB, should return empty Array', () => {
    expect(getCandidates(mockDB,['FOC'])).toEqual([]);
  });
  it('when subject array contains subjects in db and not in db both, should return empty Array', () => {
    expect(getCandidates(mockDB,['FOC','AI'])).toEqual([]);
  });
});

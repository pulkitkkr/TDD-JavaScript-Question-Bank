const showFaliures = require('@questions/Q3');
describe('Test for Q3: show Faliures', () => {

  it('function is defined', () => {
      expect(showFaliures).toBeDefined();
  });

  it('should return empty array when param is empty array ', () => {
    const mockArray = [
    ]
    expect(showFaliures(mockArray)).toHaveLength(0);
  });

  it('should return empty array when no param ', () => {
    const mockArray = [
    ]
    expect(showFaliures()).toHaveLength(0);
  });

  it('should return array of faliures (<40%)', () => {
    const mockArray = [
      {
        name: 'Ravi',
        rollNumber: 1,
        percentage: 44
      },
      {
        name: 'Jai',
        rollNumber: 30,
        percentage: 28
      },
      {
        name: 'Mehak',
        rollNumber: 22,
        percentage: 98
      },
      {
        name: 'Kishan',
        rollNumber: 3,
        percentage: 22
      },
      {
        name: 'Mohit',
        rollNumber: 2,
        percentage: 54
      },
    ];
    const mockResult = [
      {
        name: 'Jai',
        rollNumber: 30,
        percentage: 28
      },
      {
        name: 'Kishan',
        rollNumber: 3,
        percentage: 22
      }
    ];
    expect(showFaliures(mockArray)).toHaveLength(mockResult.length);
  });

  it('should not consider student with 40% as a faliure', () => {
    const mockArray = [
      {
        name: 'Jai',
        rollNumber: 30,
        percentage: 40
      },
    ];
    expect(showFaliures(mockArray)).toHaveLength(0);
  });

  it('each element of faliures array, should contain all details and not just single detail', () => {
    const mockArray = [
      {
        name: 'Jai',
        rollNumber: 30,
        percentage: 22
      },
    ];
    expect(showFaliures(mockArray)).toEqual(mockArray);
  })
});

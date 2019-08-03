import { colorCode, COLORS } from './resistor-color'

describe('ResistorColor', () => {
  describe('Color codes', () => {
    test('Black', () => {
      expect(colorCode("black")).toEqual(0)
    })

    test('Brown', () => {
      expect(colorCode("brown")).toEqual(1)
    })

    test('Red', () => {
      expect(colorCode("red")).toEqual(2)
    })

    test('Orange', () => {
      expect(colorCode("orange")).toEqual(3)
    })
    
    test('White', () => {
      expect(colorCode("white")).toEqual(9)
    })

  })

  test('Colors', () => {
    expect(COLORS).toEqual(["black","brown","red","orange","yellow","green","blue","violet","grey","white"])
  })
})

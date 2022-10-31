import { HexColor } from './Parsers';

describe('Hex color parser tests', () => {
  it('Correct 3 symbol string', () => {
    const hexColor = HexColor('#fff');
    expect(hexColor).toBe(0xffffff);
  });

  it('Correct 6 symbol string', () => {
    const hexColor = HexColor('#ffffff');
    expect(hexColor).toBe(0xffffff);
  });

  it('Incorrect string length', () => {
    const hexColor = () => HexColor('#fff4');
    expect(hexColor).toThrow('Wrong string format');
  });

  it('Incorrect string format', () => {
    const hexColor = () => HexColor('#ffz');
    expect(hexColor).toThrow('Wrong string format');
  });
});

/**
 * Parses hex string to hex number.
 *
 * @param hexString Hex string one of the following format: #fff, #FFF, #ffffff, #FFFFFF.
 *
 * @returns Hex number of format 0xffffff.
 */
export function HexColor(hexString: string): number {
  const isColor: boolean = /(#[a-fA-F0-9]{3}$)|(#[a-fA-F0-9]{6}$)/g.test(
    hexString
  );
  if (isColor) {
    return hexString.length === 7
      ? Number(hexString.replace(/#/g, '0x'))
      : Number(hexString.replace(/./g, '$&$&').substring(1).replace(/#/, '0x'));
  }
  throw new Error('Wrong string format');
}

const Capitalize = (str: string): string => {
  const strings: Array<string> = str.split(' ').map((s: string) => (
    s.charAt(0).toUpperCase() + s.slice(1).toLocaleLowerCase() + ' '
  ))
  return strings.join(' ').trim()
}

export default Capitalize
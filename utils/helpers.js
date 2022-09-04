export const CapitaliseFirstLetter = (str) => {
  const newStr = str.replace(/-/g, ' ')
  return newStr
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ')
}

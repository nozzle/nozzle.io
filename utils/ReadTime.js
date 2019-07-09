export default function ReadTime (words) {
  return words ? Math.max(Math.round(words / 275), 1) : 1
}

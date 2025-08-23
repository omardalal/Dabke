export const mergeClasses = (...c: Array<string | false | null | undefined>) =>
  c.filter(Boolean).join(" ");
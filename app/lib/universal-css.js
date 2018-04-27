const css = new Set()

export const insertCss = (...styles) => {
  if (__SERVER__) {
    styles.forEach(style => css.add(style._getCss()))
  } else {
    const removeCss = styles.map(x => x._insertCss())
    return () => {
      removeCss.forEach(f => f())
    }
  }
}

export const getCss = () => {
  return css
}

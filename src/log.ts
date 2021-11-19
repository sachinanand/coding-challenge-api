class Logger {
  error(...args: any[]) {
    console.error(...args)
  }

  info(...args: any[]) {
    console.info(...args)
  }

  warn(...args: any[]) {
    console.warn(...args)
  }
}

export default new Logger()

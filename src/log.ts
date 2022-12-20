class Logger {
  error(...args: any[]) {
    console.error("Error:",...args)
  }

  info(...args: any[]) {
    console.info("Info",...args)
  }

  warn(...args: any[]) {
    console.warn("Warning",...args)
  }
}

export default new Logger()

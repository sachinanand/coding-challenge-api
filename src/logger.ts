import Winston from 'winston'

class Logger {
 private winston: Winston.Logger

  constructor() {
    this.winston = Winston.createLogger({
      transports: [new Winston.transports.Console({
        format: Winston.format.combine(
          Winston.format.colorize(),
          Winston.format.timestamp(),
          Winston.format.metadata(),
          Winston.format.simple()
        ),
      })]
    })
  }

  private args(args: any[]) {
    return args?.map((it) => it.toString()).join(' ')
  }

  log(...args: any[]) {
    this.winston.log('info', this.args(args))
  }

  warn(...args: any[]) {
    this.winston.warn(this.args(args))
  }

  error(...args: any[]) {
    this.winston.error(this.args(args))
  }

  info(...args: any[]) {
    this.winston.info(this.args(args))
  }
}

export default new Logger()

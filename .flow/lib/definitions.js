type ProjectConfig = {
  secret: string,
  proxy: Object,
  graphql: {
    endpoint: string,
    host: string
  },
  auth: {
    cookieKey: string,
    cookieAccountIndexKey: string,
    cookieAccountsKey: string,
    cookieExpirationDateKey: string,
    ttlMinutes: number,
    keepSignedTtlMinutes: number,
  },
  baseUrl: string
}

declare function it(...args:any) :any

declare function describe(...args:any):any

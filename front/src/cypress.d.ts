export interface Stats {
  suites: number;
  tests: number;
  passes: number;
  pending: number;
  failures: number;
  start: string;
  end: string;
  duration: number;
  testsRegistered: number;
  passPercent: number;
  pendingPercent: number;
  other: number;
  hasOther: boolean;
  skipped: number;
  hasSkipped: boolean;
}
export interface CypressLog {
  stats: Stats;
  results?: Results[] | null;
  meta: Meta;
}
export interface Results {
  uuid: string;
  title: string;
  fullFile: string;
  file: string;
  beforeHooks?: any[] | null;
  afterHooks?: any[] | null;
  tests?: any[] | null;
  suites?: Suites[] | null;
  passes?: any[] | null;
  failures?: any[] | null;
  pending?: any[] | null;
  skipped?: any[] | null;
  duration: number;
  root: boolean;
  rootEmpty: boolean;
  _timeout: number;
}
export interface Suites {
  uuid: string;
  title: string;
  fullFile: string;
  file: string;
  beforeHooks?: any[] | null;
  afterHooks?: any[] | null;
  tests?: Tests[] | null;
  suites?: any[] | null;
  passes?: string[] | null;
  failures?: any[] | null;
  pending?: any[] | null;
  skipped?: any[] | null;
  duration: number;
  root: boolean;
  rootEmpty: boolean;
  _timeout: number;
}
export interface Tests {
  title: string;
  fullTitle: string;
  timedOut?: null;
  duration: number;
  state: string;
  speed: string;
  pass: boolean;
  fail: boolean;
  pending: boolean;
  context?: null;
  code: string;
  err: Err;
  uuid: string;
  parentUUID: string;
  isHook: boolean;
  skipped: boolean;
}
export interface Err {
  message: string;
  estack: string;
  diff?: null;
}
export interface Mocha {
  version: string;
}
export interface Meta {
  mocha: Mocha;
  mochawesome: Mochawesome;
  marge: Marge;
}
export interface Options {
  quiet: boolean;
  reportFilename: string;
  saveHtml: boolean;
  saveJson: boolean;
  consoleReporter: string;
  useInlineDiffs: boolean;
  code: boolean;
  id: string;
  reportDir: string;
  overwrite: boolean;
  html: boolean;
  json: boolean;
  timestamp: string;
}
export interface Mochawesome {
  options: Options;
  version: string;
}
export interface Marge {
  options: Options;
  version: string;
}

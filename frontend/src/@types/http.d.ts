import 'http';

declare module 'http' {
  interface IncomingMessage {
    rawBody?: Buffer;
  }
}
export type Todo = {
  id: string;
  title: string;
  description: string;
  date: string | number | Date;
};

export type IConfirmModal = {
  confirm?: any;
  cancel?: any;
};

export interface DateTimeFormatOptions {
  weekday?: 'long' | 'short' | 'narrow';
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
  timeZoneName?: 'long' | 'short';
  hour12?: boolean;
}

export type Todo = {
  id: string | number;
  title: string;
  description: string;
  date: string | number | Date;
  dateString?: string;
};

export type IConfirmModal = {
  confirm?: any;
  cancel?: any;
};
export type IEditTodoModal = {
  confirm?: any;
  cancel?: any;
  id: string | number;
  title?: string;
  description?: string;
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

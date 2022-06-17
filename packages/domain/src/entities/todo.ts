import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import { ValidationException } from '../exceptions';
import { strings } from '../strings';

export class Todo {
  public readonly id: number;

  private _description: string;

  private _date: Date;

  get description() {
    return this._description;
  }

  set description(description: string) {
    this._description = description;
  }

  get date() {
    return this._date;
  }

  constructor(id: number, date: Date, description: string) {
    if (differenceInCalendarDays(date, new Date()) < 0) {
      throw new ValidationException(strings.toDoDateValidation);
    }

    this.id = id;
    this._date = date;
    this._description = description;
  }
}

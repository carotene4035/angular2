import { Injectable } from '@angular/core';

import { Task } from './task';
import { TASKS } from './mock-tasks';

@Injectable()
export class TaskService {

  // taskの配列を返します
  public getTasks(): Promise<Task[]> {
    return Promise.resolve(TASKS);
  }

  constructor() { }

}

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

  public getTask(id: number): Promise<Task> {
    return this.getTasks().then(tasks => tasks.find(task => task.id === id));

  }
}

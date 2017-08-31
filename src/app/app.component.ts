import { Component } from '@angular/core';
import { Task } from  './Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // そのコンポーネントが持っている
  // プロパティを宣言していく
  title: string = 'todo app';
  task: Task = {
    id: 1,
    name: '田中さんにメール'
  };
  tasks = TASKS;
  selectedTask: Task;

  // 渡されたtaskクラスを引数として受け取る
  onSelect(task: Task): void {
    this.selectedTask = task;
  }
}

// 定数として管理
const TASKS: Task[] = [
  {id: 11, name: 'hahaha'},
  {id: 12, name: 'hahaha'},
  {id: 13, name: 'hahaha'},
  {id: 14, name: 'hahaha'},
];

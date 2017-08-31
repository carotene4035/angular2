import { Component } from '@angular/core';
import { Task } from  './Task';
import { TaskService } from  './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // そのコンポーネントが持っている
  // プロパティを宣言していく
  private title: string = 'todo app';
  private tasks = [];
  private selectedTask: Task;

  // サービスの注入
  constructor(private taskService: TaskService) {}

  private getTasks(): void {
    this.taskService.getTasks().then(
      tasks => this.tasks = tasks
    );
  }

  // コンポーネントが生成時イベント：
  ngOnInit() {
    this.getTasks();
  }

  // クリック時イベント：
  // 渡されたtaskクラスを引数として受け取る
  onSelect(task: Task): void {
    this.selectedTask = task;
  }
}


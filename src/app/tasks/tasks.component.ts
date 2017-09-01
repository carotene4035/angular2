import { Component, OnInit } from '@angular/core';
import { TaskService } from  '../task.service';
import { Task } from  '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {

  private tasks: Task[] = [];
  private selectedTask: Task;

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

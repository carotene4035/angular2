import { Component, OnInit, Input } from '@angular/core';

// ここから下、全然わからん from ジャガー
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})

export class TaskDetailComponent implements OnInit {
  @Input() task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  )
  { }

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.taskService.getTask(+params['id']))
    .subscribe(task => this.task = task);
  }

  public goBack(): void {
    this.location.back();
  }
}

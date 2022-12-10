import { Component } from '@angular/core';

interface taskObject {
  title: string;
  done: boolean;
  deadline: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {



  tasks: taskObject[] = [
    {title: '牛乳を買う', done: false, deadline: new Date('2021-01-01')},
    {title: '可燃ゴミを出す', done: true, deadline: new Date('2021-01-02')},
    {title: '銀行に行く', done: false, deadline: new Date('2021-01-03')},
    {title: '可燃ゴミを出す', done: true, deadline: new Date('2020-01-02')},
   {title: '銀行に行く', done: false, deadline: new Date('2020-01-03')},
  ];

  newTaskTitle = '';

  newTask= {
    title: '',
    deadline: new Date(),
  };

  addTask() {
    this.tasks.push({
      title: this.newTask.title, 
      done: false,
    deadline: new Date(this.newTask.deadline)});
    this.newTask = {
      title: '',
      deadline: new Date(),
    }
  }

  isOverdue(task: taskObject) {
    return !task.done && task.deadline < new Date();
  }

}

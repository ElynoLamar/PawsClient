import { UserService } from './../../services/user.service';
import { TasksService } from './../../services/tasks.service';
import { CatService } from './../../services/cat.service';
import { Component, OnInit } from '@angular/core';
import { PersistentService } from '../../services/persistence.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-my-paw',
  templateUrl: './my-paw.component.html',
  styleUrls: ['./my-paw.component.css']
})
export class MyPawComponent implements OnInit {

  constructor(private catService: CatService, private userService: UserService, private taskService: TasksService,) { }
  userTasks: any[] = []
  userBundle: any
  bundlePath: any
  catStates: any[] = ['happy', 'neutral', 'sad', 'gone', 'love']
  cats: any[] = [

  ]
  userId: any
  async ngOnInit(): Promise<void> {
    this.reload();
  }
  async reload() {
    this.userId = PersistentService.getUser()
    if (this.userId && this.userId > 0) {
      this.cats = await this.catService.getUsersCat(this.userId)
      this.userTasks = await this.taskService.getUsersTasks(this.userId)
      this.userBundle = await this.userService.getUserBundle(this.userId)
      this.userBundle = this.userBundle.filter((bundle: any) => {
        return bundle.active == 1
      })[0].name

      this.bundlePath = `../../../../assets/images/Bundles/${this.userBundle}`
      for (let i = 0; i < this.cats.length; i++) {
        this.cats[i].image = `${this.bundlePath}/${this.catStates[this.cats[i].state - 1]}.png`
      }
      for (let i = 0; i < this.userTasks.length; i++) {
        let object: any = {
          gold_medal: this.userTasks[i].gold_medal,
          silver_medal: this.userTasks[i].silver_medal,
          bronze_medal: this.userTasks[i].bronze_medal,
          wood_medal: this.userTasks[i].wood_medal
        }
        const getMax = Object.keys(object)
          .filter(x => {
            return object[x] == Math.max.apply(null,
              Object.values(object));
          })
        if (getMax.length == 1)
          this.userTasks[i].displayMedal = `../../../../assets/images/medals/${getMax[0]}.png`
        else
          this.userTasks[i].displayMedal = `../../../../assets/images/medals/wood_medal.png`
        if (this.userTasks[i] && this.userTasks[i].done > 0)
          this.userTasks[i].percentage = this.userTasks[i].done / this.userTasks[i].quantity * 100
        else this.userTasks[i].percentage = 0
      }


    }
  }
  async completeTask(id_task: number) {
    let result = await this.taskService.updateUsersTasks(this.userId, id_task)
    this.reload()
  }

}

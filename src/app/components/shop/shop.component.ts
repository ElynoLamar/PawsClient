import { Component, OnInit } from '@angular/core';
import { PersistentService } from '../../services/persistence.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private userService: UserService) { }
  pawCoins: number = 0
  userId: any
  user: any
  userBundles: any
  bundles: any[] = [
    {
      "name": "Beige  ",
      "price": "100 ",
      "image": "../../../../assets/images/Bundles/beige/Bundle_Pack.png",
    },
    {
      "name": "Pink  ",
      "price": "300 ",
      "image": "../../../../assets/images/Bundles/pink/Bundle_Pack.png",
    },
    {
      "name": "Grey ",
      "price": "300 ",
      "image": "../../../../assets/images/Bundles/grey/Bundle_Pack.png",
    },
    {
      "name": "Orange ",
      "price": "500 ",
      "image": "../../../../assets/images/Bundles/orange/Bundle_Pack.png",
    },
    {
      "name": "Brown ",
      "price": "500 ",
      "image": "../../../../assets/images/Bundles/brown/Bundle_Pack.png",
    },
    {
      "name": "Blue ",
      "price": "1000 ",
      "image": "../../../../assets/images/Bundles/blue/Bundle_Pack.png",
    },

  ]
  ngOnInit() {
    this.reload();
  }

  async reload() {
    this.userId = PersistentService.getUser()
    if (this.userId && this.userId > 0) {
      this.user = await this.userService.getUser(this.userId)
      this.pawCoins = this.user[0].points
      this.userBundles = await this.userService.getUserBundle(this.userId)
      this.bundles = await this.userService.getUnownedUserBundle(this.userId)
      for (let i = 0; i < this.bundles.length; i++) {
        this.bundles[i].image = `../../../../assets/images/Bundles/${this.bundles[i].name}/Bundle_Pack.png`
      }
    }
  }

  async buyPack(bundleId: number, bundlePrice: number) {
    let result = await this.userService.BuyBundle(bundlePrice, bundleId, this.userId)
    this.reload()
  }
}

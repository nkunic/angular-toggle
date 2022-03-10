import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-item',
  templateUrl: './toggle-item.component.html',
  styleUrls: ['./toggle-item.component.scss'],
})
export class ToggleItemComponent {
  // AAAA
  itemClassIsActive: boolean = false;

  // BBBB
  sqareClassIsActive = false;

  // CCC
  boxStatus: boolean = false;

  // DDD
  blockStatusClass = false;

  // EEE
  circleClassIsActive = false;

  // BBBB
  toggleSquareClass(): void {
    this.sqareClassIsActive = !this.sqareClassIsActive;
  }

  // CCC
  changeBlockStatusClickEvent() {
    this.blockStatusClass = !this.blockStatusClass;
  }

  // EEE
  public toggleCircleClass() {
    this.circleClassIsActive = !this.circleClassIsActive;
  }
}

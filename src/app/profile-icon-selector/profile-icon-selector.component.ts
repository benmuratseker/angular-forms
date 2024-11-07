import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { profileIconName } from './profile-icon-names';

@Component({
  selector: 'con-profile-icon-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-icon-selector.component.html',
  styleUrl: './profile-icon-selector.component.css'
})
export class ProfileIconSelectorComponent {
  profileIcons = profileIconName;
  showAllIcons: boolean = true;
  selectedIcon!: string | null; // ! ->  we will initialize it later

  iconSelected(icon: string) {
    this.showAllIcons = false;
    this.selectedIcon = icon;
  }
}

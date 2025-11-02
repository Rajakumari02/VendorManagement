import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedRole: string | null = null;
  selectedVendor: string='';
  vendors = [
    { id: '1', name: 'TechTrain Solutions' },
    { id: '2', name: 'SkillWave Learning' },
    { id: '3', name: 'InspireEdge Consulting' }
  ];

  onRoleChange(event: any) {
    this.selectedVendor = '';
  }

  onVendorSelect(event: any) {}

  proceed() {
    console.log(`Selected Role: ${this.selectedRole}, Vendor: ${this.selectedVendor}`);
  }
}

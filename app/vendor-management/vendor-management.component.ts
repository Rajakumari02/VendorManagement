import { Component, OnInit } from '@angular/core';

interface Vendor {
  id: number;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  status: 'ACTIVE' | 'INACTIVE';
}

@Component({
  selector: 'app-vendor-management',
  templateUrl: './vendor-management.component.html',
  styleUrls: ['./vendor-management.component.css']
})
export class VendorManagementComponent implements OnInit {
  vendors: Vendor[] = [];
  formVisible = false;
  editingVendor: Vendor | null = null;
  model: Partial<Vendor> = {};

  ngOnInit(): void {
    this.vendors = [
      { id: 1, name: 'TechTrain', contactPerson: 'Alice', email: 'alice@techtrain.com', phone: '9876543210', address: 'Chennai', status: 'ACTIVE' },
      { id: 2, name: 'SkillEdge', contactPerson: 'Bob', email: 'bob@skilledge.com', phone: '8765432109', address: 'Bangalore', status: 'INACTIVE' }
    ];
  }

  openForm(vendor?: Vendor): void {
    this.formVisible = true;
    if (vendor) {
      this.editingVendor = vendor;
      this.model = { ...vendor };
    } else {
      this.editingVendor = null;
      this.model = {};
    }
  }

  closeForm(): void {
    this.formVisible = false;
  }

  save(): void {
    if (this.editingVendor) {
      Object.assign(this.editingVendor, this.model);
    } else {
      const newVendor: Vendor = {
        id: this.vendors.length + 1,
        name: this.model.name || '',
        contactPerson: this.model.contactPerson || '',
        email: this.model.email || '',
        phone: this.model.phone || '',
        address: this.model.address || '',
        status: 'ACTIVE'
      };
      this.vendors.push(newVendor);
    }
    this.closeForm();
  }

  deactivate(id: number): void {
    const vendor = this.vendors.find(v => v.id === id);
    if (vendor) vendor.status = 'INACTIVE';
  }
}

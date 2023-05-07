import { Component, OnInit } from '@angular/core';
import { FavReceipt } from '../../shared/models/FavReceipt';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  //ez meg mi afaszért nem lehet FavReceipt
  favReceipts: Array<any> = [];

  favReceiptsForm = this.createForm({
    favReceipt: '',
    date: new Date()
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createForm(model: FavReceipt) {
    let formGroup = this.fb.group(model);
    
    formGroup.get('favReceipt')?.addValidators([Validators.required, Validators.minLength(3)]);
    return formGroup;
  }

  addFavReceipt() {
    
    if (this.favReceiptsForm.valid) {
      if (this.favReceiptsForm.get('favReceipt')) {
        this.favReceiptsForm.get('date')?.setValue(new Date());
        this.favReceipts.push({...this.favReceiptsForm.value});
      }
    }
  }

}
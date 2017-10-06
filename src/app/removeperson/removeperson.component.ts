import { Component, OnInit } from '@angular/core';
import { IPerson } from '../interfaces/iperson';
import { DbService } from '../services/db.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-removeperson',
  templateUrl: './removeperson.component.html',
  styleUrls: ['./removeperson.component.css']
})
export class RemovepersonComponent implements OnInit {
baseURL = 'https://fir-trial-baae6.firebaseio.com';
rootNode = 'people';
dataCollection: IPerson[];
  constructor(private dbService: DbService) { }
  ngOnInit() {
  }

  removeNameEntry(dataForm: NgForm) {
    const person = {
      firstName: dataForm.value.fname,
      lastName: dataForm.value.lname
    }
    this.dbService.deleteData(`${this.baseURL}/${this.rootNode}.json`, person)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}

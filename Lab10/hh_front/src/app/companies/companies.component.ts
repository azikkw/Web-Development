import {Component, OnInit} from '@angular/core';
import {Company} from "../models";
import {AllService} from "../all.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit{

  companies: Company[] = []

  loaded: Boolean = false

  constructor(private appService: AllService) {
  }

  ngOnInit(): void {
    this.appService.getCompanies().subscribe((companies) => {
      this.companies = companies
      this.loaded = true
    })
  }


}

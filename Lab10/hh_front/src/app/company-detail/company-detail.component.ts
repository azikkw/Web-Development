import {Component, OnInit} from '@angular/core';
import {Company} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AllService} from "../all.service";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit{

  company: Company

  constructor(private route: ActivatedRoute, private appService: AllService, private location: Location) {
    this.company = {} as Company
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.appService.getCompany(id).subscribe( (company) => {
      this.company = company;
    })
  }

}

import { Component } from '@angular/core';
import { Vacancy } from "../models";
import { AllService } from "../all.service";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent {

  vacancies: Vacancy[] = []

  constructor(private appService: AllService) {
  }

  ngOnInit(): void {
    this.appService.getVacancies().subscribe((vacancies) => {
      this.vacancies = vacancies
    })
  }

}

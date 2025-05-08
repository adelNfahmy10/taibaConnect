import { Component, inject } from '@angular/core';
import { AboutComponent } from "../../about/about.component";
import { ServiceComponent } from "../../service/service.component";
import { FeatureComponent } from "../../feature/feature.component";
import { NavbarComponent } from "../../navbar/navbar.component";
import { HomeComponent } from "../../home/home.component";
import { FooterComponent } from "../../footer/footer.component";
import { AppDownloadComponent } from "../../app-download/app-download.component";
import { AllLogoComponent } from "../../all-logo/all-logo.component";
import { CeoComponent } from "../../ceo/ceo.component";
import { WhyChooseUsComponent } from "../../why-choose-us/why-choose-us.component";
import { ActivatedRoute } from '@angular/router';
import { OurWorkComponent } from "../../our-work/our-work.component";
import { PartnersComponent } from "../../partners/partners.component";
import { RequestMeetingComponent } from "../../request-meeting/request-meeting.component";

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [AboutComponent, FeatureComponent, NavbarComponent, HomeComponent, FooterComponent, AllLogoComponent, CeoComponent, WhyChooseUsComponent, OurWorkComponent, PartnersComponent, RequestMeetingComponent],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.scss'
})
export class BlankComponent {
  private readonly _ActivatedRoute = inject(ActivatedRoute)
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        console.log(params);
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ResponsivasService } from '../../services/responsivas.service';

@Component({
  selector: 'app-ver-responsivas-page',
  templateUrl: './ver-responsivas-page.component.html',
  styleUrls: ['./ver-responsivas-page.component.css']
})
export class VerResponsivasPageComponent implements OnInit {

  constructor(
    private responsivasService: ResponsivasService
  ) {}

  ngOnInit(): void {

  }

}

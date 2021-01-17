import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBook, faDiceD20, faPortrait } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;
  faPortrait = faPortrait;
  faBook = faBook;
  faDiceD20 = faDiceD20

  constructor() { }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit {

  public isAuthenticated: boolean = false;
  public isAdmin: boolean = false;

  public sidebarItems: any[] = [];
  public navbarItems: any[] = [];

  constructor(
    private router: Router,
    // private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.sidebarItems = this.isAuthenticated ?
      this.isAdmin ?
      [
        { label: 'Dispositivos', icon: 'area', url: './control/responsivas' },
        { label: 'Responsivas', icon: 'area', url: './control/responsivas' },
      ]
      : []
    : [];

    this.navbarItems = !this.isAuthenticated ? [
      { label: 'Login', icon: 'area', url: '../auth' },
    ] : [];
  }

  onLogout(): void {
    // this.authService.logout();
    this.router.navigate(['./auth']);
  }
}

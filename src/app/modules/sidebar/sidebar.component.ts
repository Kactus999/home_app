import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void { }

  constructor(private breakPointObserver: BreakpointObserver) {
    this.breakPointObserver
      .observe(['(max-width : 768px)'])
      .subscribe((result: BreakpointState) => {
        const sidebar = document.getElementById('side_nav');
        const title = document.getElementById('title');
        const content = document.getElementById('content');
        if (result.matches) {
          if (sidebar != null && title != null && content != null) {
            if (sidebar.classList.contains('active')) {
              title.classList.add('dim');
            }
          }
        } else {
          if (title != null && content != null) {
            {
              title.classList.remove('dim');
              content.classList.remove('dim');
            }
          }
        }
      });
  }

  toggle_side() {
    const sidebar = document.getElementById('side_nav');
    const openCloseBtn = document.getElementById('open_close_btn');
    const content = document.getElementById('content');
    const title = document.getElementById('title');

    if (
      sidebar != null &&
      openCloseBtn != null &&
      content != null &&
      title != null
    ) {
      if (!sidebar.classList.contains('active')) {
        sidebar.classList.add('active');
        openCloseBtn.classList.remove('fa-bars');
        openCloseBtn.classList.add('fa-times');
        // content.classList.add('dim');
        title.classList.add('dim');
      } else {
        sidebar.classList.remove('active');
        openCloseBtn.classList.remove('fa-times');
        openCloseBtn.classList.add('fa-bars');

        content.classList.remove('dim');
        title.classList.remove('dim');
      }
    }
  }

  closeSide() {
    const sidebar = document.getElementById('side_nav');
    const openCloseBtn = document.getElementById('open_close_btn');
    const content = document.getElementById('content');
    const title = document.getElementById('title');
    if (sidebar?.classList.contains('active')) {
      sidebar.classList.remove('active');

      openCloseBtn?.classList.remove('fa-times');
      openCloseBtn?.classList.add('fa-bars');

      content?.classList.remove('dim');
      title?.classList.remove('dim');
    }
  }
}

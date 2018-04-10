import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JadeService } from '../@core/data/jade.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  username: string;
  password: string;

  constructor(private jService: JadeService, private route: Router) { }

  ngOnInit() {
  }

  signin_handler() {
    this.jService.login(this.username, this.password).subscribe(
      res => {
        const token = res.result.authtoken;

        // set authtoken
        this.jService.set_authtoken(token);

        // init
        this.jService.init();

        this.route.navigate(['/']);
      }
    );
  }
}

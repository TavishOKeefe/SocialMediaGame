import { Component, OnInit } from '@angular/core';
import { Userpost } from '../userpost.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})

export class PostComponent implements OnInit {
  userposts: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private postService: PostService) {}

  ngOnInit(){
    this.userposts = this.postService.getPosts();
  }

  goToDetailPage(clickedPost) {
    // this.router.navigate(['userposts', clickedPost.id]);
    this.router.navigate(['userposts', clickedPost.$key]);
  }
}

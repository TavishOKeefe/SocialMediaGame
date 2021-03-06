import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Userpost } from '../userpost.model';
import { PostService} from '../post.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService]
})

export class PostDetailComponent implements OnInit {
  postId: string;
  postToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = urlParameters['id'];
    });
    this.postToDisplay = this.postService.getPostById(this.postId);
    // this.postService.getPostById(this.postId).subscribe((userposts) => {
    // // this.postToDisplay = userposts;
    //   console.log("userposts", userposts);
      // console.log(this.postToDisplay);
      // console.log(this.postService.getPostById(this.postId).title))
    }
  }

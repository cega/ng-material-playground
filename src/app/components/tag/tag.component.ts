import { Component, OnDestroy, OnInit } from '@angular/core';

// import { TagService } from '../../services/tag.service';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit, OnDestroy {
    tags: string[];
    sub: any;

    constructor(
      // private tagService: TagService
    ) {}

    ngOnInit(): void {
        // this.sub = this.tagService
        //     .getTags()
        //     .subscribe((tags) => {
        //         return (this.tags = tags);
        //     });
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}

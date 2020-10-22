import { Component, OnDestroy, OnInit } from '@angular/core';

import { Category } from '../../models/category';
import { CategoryService } from '../../services/category';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit, OnDestroy {
    categories: Category[];
    sub: any;

    constructor(private categoryService: CategoryService) {}

    ngOnInit(): void {
        this.sub = this.categoryService
            .getCategories()
            .subscribe((categories) => {
                console.log(
                    'TCL: : CategoryComponent -> ngOnInit -> categories',
                    categories
                );
                return (this.categories = categories);
            });
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}

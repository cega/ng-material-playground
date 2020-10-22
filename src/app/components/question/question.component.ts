import { Component, OnDestroy, OnInit } from '@angular/core';

import { Question } from '../../models/question';
import { QuestionService } from '../../services/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {
    questions: any;
    sub: any;

    constructor(private questionService: QuestionService) {}

    ngOnInit(): void {
        this.sub = this.questionService
            .getQuestions()
            .subscribe((questions) => {
                return (this.questions = questions  );
            });
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}

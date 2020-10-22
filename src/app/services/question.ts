import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class QuestionService {
  SERVER_URL: string = "http://localhost:3000/api/";
  constructor(private httpClient: HttpClient) {}

  public getQuestions() {
    return this.httpClient.get(this.SERVER_URL + "questions");
  }

  public getQuestion(questionId): any {
    return this.httpClient.get(
      `${this.SERVER_URL + "questions"}/${questionId}`
    );
  }

  public createQuestion(question: {
    id: number;
    questionName: string;
  }) {
    return this.httpClient.post(`${this.SERVER_URL + "questions"}`, question);
  }

  public deleteQuestion(questionId) {
    return this.httpClient.delete(
      `${this.SERVER_URL + "questions"}/${questionId}`
    );
  }

  public updateQuestion(question: {
    id: number;
    name: number;
  }) {
    return this.httpClient.put(
      `${this.SERVER_URL + "questions"}/${question.id}`,
      question
    );
  }
}

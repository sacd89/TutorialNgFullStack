"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var todo_cmp_1 = require("./todo/components/todo-cmp");
var todo_service_1 = require("./todo/services/todo-service");
var curso_1 = require("./cursos/components/curso");
var curso_2 = require("./cursos/services/curso");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
        ],
        declarations: [
            todo_cmp_1.TodoCmp,
            curso_1.CursoComponent,
        ],
        providers: [
            todo_service_1.TodoService,
            curso_2.CursoService,
        ],
        bootstrap: [
            curso_1.CursoComponent,
        ],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;

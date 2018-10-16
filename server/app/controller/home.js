'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async hi() {
        this.ctx.body = 'hello world';
    }
    async home() {
        this.ctx.body = await this.ctx.render('home', {
            name: 'Kapp'
        });
    }
}

module.exports = HomeController;

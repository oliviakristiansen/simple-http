namespace App {
    export class PostsController {
        static $inject = ['$http'];

        private httpService;
        public postList;
        public currentPost;
        public title;
        public newPost;
        public author;
        public description;

        constructor ($http: angular.IHttpService) {
            this.httpService = $http;
            this.postList = [];
            this.newPost = {};
        }

        public getPostList () {
            console.log ('here');
            this.httpService ({
                url: '/posts',
                method: 'GET',

            })
            .success ((response) => {
                console.log ('Test data: ', response);
                this.postList = response;
            })
            .error ((response) => {
            })
        }
        public getPostById (id) {
            console.log ('here');
            this.httpService ({
                url: '/posts',
                method: 'GET',
                params: {
                    id: id,
                }
            })
            .success ((response) => {
                console.log ('Test data: ', response);
                this.currentPost = response [0]
            })
            .error ((response) => {
            })
        }

        public save () {
            console.log ('title: ', this.title);
            console.log ('description: ', this.description);
            console.log ('author: ', this.author);

            this.httpService ({
                url: '/posts',
                method: 'POST',
                data: {
                    title: this.title,
                    description: this.description,
                    author: this.author
                }
            })
            .success ((response) => {
                console.log ('Test data: ', response);
            })
            .error ((response) => {
            })
        }




    }
}

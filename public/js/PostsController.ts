namespace App {
    export class PostsController {
        static $inject = ['$http', '$state'];

        private httpService;
        private stateService;

        public postList;
        public currentPost;
        public title;
        public newPost;
        public author;
        public description;

        constructor ($http: angular.IHttpService,
            $state: angular.ui.IState
        ) {
            this.httpService = $http;
            this.stateService = $state;

            console.log ('- test: ', this.stateService);

            this.postList = [];
            this.newPost = {};

            this.getPostList ();
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

        public getPost (id) {
            console.log ('here');
            this.httpService ({
                url: '/posts',
                method: 'GET',
                params: {
                    id: id
                }
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

        public save (id) {
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

                //below will reload the page when the save button is successful
                this.stateService.reload ()
            })
            .error ((response) => {
            })
        }

        public deletePost (id) {
            console.log ('Deleted!', + id)

            this.httpService ({
                //below adding +id will specify that you only delete that specific posts by the id. So If you click the 4th post it will only delete that one.
                url: '/posts/' + id,
                method :'DELETE'
            })
            .success ((response) => {
                console.log ('Post Deleted Successfully', response);

                //below will direct the page to the home page when the post is deleted successfully.
                this.stateService.go ('home')
            })
            .error ((response) => {
                console.log ('Error Deleting Post', response);
            })
        }

        public editPost (postId) {
            console.log ('post id: ' + postId);

            this.stateService.go ('posts-edit',
                {
                    id: postId
                }
            );

        }

    }
}

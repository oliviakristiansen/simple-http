namespace App {
    export class PostEditController {
        static $inject = ['$http', '$state']

        private stateService;
        private httpService;

        public post;

        constructor (
            $http: angular.IHttpService,
            $state: angular.ui.IState
        ) {
            this.httpService = $http;
            this.stateService = $state;

            //Load the contents of a specific psot by that post's id number
            console.log ('Passed parameters: ', this.stateService.params.id);
            this.httpService({
                url:'/posts/' + this.stateService.params.id,
                method: 'GET'
            })
            .success ((response)=>{
                console.log (response);
                this.post = response;
            })
            .error (()=> {

            })
        }

        public savePostChanges () {
            this.httpService ({
                url:'/posts/' + this.stateService.params.id,
                method: 'PUT',
                data: {
                    title: this.post.title,
                    description: this.post.description,
                    author: this.post.author
                }
            })
            .success ((response) => {
                console.log (response);
                this.stateService.go ('posts')
            })
            .error (() => {

            })
        }
    }
}

namespace App {
    export class HttpController {
        static $inject = ['$http'];

        private httpService;
        public messageResult;

        constructor ($http: angular.IHttpService) {
            this.httpService = $http;
            this.messageResult = '';
        }

        public getRequest (){

            //Use the angular http service object to make a call to our server.
            this.httpService ({
                //Provide the HTTP method to use.
                method: 'GET',

                //Provide the url to hit.
                url: '/test'
            })

            //Check for the success of the call.
            .success  ((response) => {
                console.log ('The call was successful.');
                // console.log ('This is the response:', response);
                console.log ('This is the response message ***', response.message);
                this.messageResult = response.message;
            })

            //Check for the failure of the call.
            .error (function (){
                console.error ('The call failed.');
            });
        }

        public getRoute () {
            this.httpService ({
                method: 'Get',
                url:'/someroute'
            })

            .success (function (response) {
                console.log ('The call was successful.');
                console.log ('This is the response message', response.message);
            })

            .error (function () {
                console.error ('The call failed.');
            });
        }
    }
}

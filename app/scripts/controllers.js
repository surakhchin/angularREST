'use strict';

angular.module('budgetsApp')

    .controller('JumboController', ['$scope', 'menuFactory', function($scope, menuFactory) {

            $scope.date = new Date();

            $scope.sortType     = 'id'; // set the default sort type
            $scope.sortReverse  = false;  // set the default sort order
            $scope.searchBudgets   = '';     // set the default search/filter term

          // create the list of campaign budgets
            $scope.budgets = menuFactory.getBudgets();


            //code for add a budget button

            $scope.mybudget = {budget: 0, cpc: 0, cpm: 0, id: 0, spentv: 0};

            $scope.addBudget = function () {


                $scope.budgets.push($scope.mybudget);

                // $scope.commentForm.$setPristine();

                $scope.mybudget = {budget: 0, cpc: 0, cpm: 0, id: 0, spentv: 0};
            };

            //code for delete a budget button

            $scope.deleteBudget = function (Budget) {

                if (confirm("ARE YOU SURE YOU WANT TO DELETE THIS BUDGET PLAN?") == true) {
                    $scope.removeIndex = $scope.budgets.map(function (item) {
                    return item.id;
                }).indexOf(Budget.id);
                ~$scope.removeIndex && $scope.budgets.splice($scope.removeIndex, 1);
                } else {
                    console.log(Budget);
                console.log($scope.budgets);
                }



            };


        }])



;

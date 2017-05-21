'use strict';

angular.module('confusionApp')

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

            $scope.deleteBudget = function (BudgetId) {


                alert("Budget Id is "+BudgetId);

                $scope.array = [$scope.budgets.budget];

                console.log($scope.mybudget);
                console.log($scope.budgets);

            };


        }])



;

/*=========================
    Budget Contoller
==========================*/
var budgetController = (function() {
    

})();

/*===============================
    UI Conroller
=================================*/
var UIController = (function() {

    //DOM manupulations
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }


    // Get inputs
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            }
        },
        getDOMStrings: function() {
            return DOMStrings;
        }
    }

})();


/*============================================
    App Controller
==============================================*/
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);       
        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }   
        });

    }
    

    var ctrlAddItem = function() {

        // Get input value
        var input = UICtrl.getInput();

        // Add the item to the budget controller


        // Add item to the UI 


        // Calculate the budget


        // Display the budget to the UI

    }
    
    return {
        init : function() {
            console.log('App starts!!!');
            setupEventListeners();
        }
    }


})(budgetController, UIController);

controller.init();
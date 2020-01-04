/*=========================
    Budget Contoller
==========================*/
var budgetController = (function() {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            // Create new ID
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            

            // Creating new item based on 'exp' or 'inc' type
            if(type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if(type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Pushing the new item to the data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        },
        getData: function() {
            console.log(data);
        }
    };

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
        var input, newItem;
        // Get input value
        input = UICtrl.getInput();

        // Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

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
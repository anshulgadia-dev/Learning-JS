const set_budget_input = document.getElementById('set-budget-input')
const set_budget_btn = document.getElementById('set-budget-btn')


const expense_input = document.getElementById('expense-input')
const expense_amount_input = document.getElementById('expense-amount-input')
const add_btn = document.getElementById('add-btn')


const total_budget_tag = document.getElementById('total-budget-tag');
const total_expense_tag = document.getElementById('total-expense-tag')
const remaining_bal_tag = document.getElementById('remaining-bal-tag')


const saveToLocalStorage = () => {
    localStorage.setItem('TOTAL_BUDGET', TOTAL_BUDGET);
    localStorage.setItem('REM_BAL', REM_BAL);
    localStorage.setItem('TOTAL_EXPENSE', TOTAL_EXPENSE);
    localStorage.setItem('EXPENSES', JSON.stringify(EXPENSES));
};

const loadFromLocalStorage = () => {
    TOTAL_BUDGET = Number(localStorage.getItem('TOTAL_BUDGET')) || 0;
    REM_BAL = Number(localStorage.getItem('REM_BAL')) || 0;
    TOTAL_EXPENSE = Number(localStorage.getItem('TOTAL_EXPENSE')) || 0;
    EXPENSES = JSON.parse(localStorage.getItem('EXPENSES')) || [];

    total_budget_tag.innerText = TOTAL_BUDGET;
    remaining_bal_tag.innerText = REM_BAL;
    total_expense_tag.innerText = TOTAL_EXPENSE;

    renderList();
};



let EXPENSES = []


let TOTAL_BUDGET = 0;
let REM_BAL = 0;
let TOTAL_EXPENSE = 0;

set_budget_btn.addEventListener('click' , () => {
    const val = Number(set_budget_input.value.trim())
    TOTAL_BUDGET = val;
    REM_BAL = val;
    set_budget_input.value = ""
    total_budget_tag.innerText = TOTAL_BUDGET;
    remaining_bal_tag.innerText = REM_BAL;
    saveToLocalStorage()
})


add_btn.addEventListener('click' , () => {
    const expense_name = expense_input.value.trim();
    const val = Number(expense_amount_input.value.trim());
    expense_input.value = "";
    expense_amount_input.value = ""

    if(!expense_name || !val || val < 0){
        alert('Please enter valid expense')
    }

    else{
        REM_BAL -= val;
        TOTAL_EXPENSE += val;

    
    const expense = {
        name : expense_name,
        amount : val
    }

    EXPENSES.push(expense);

    renderList();
    saveToLocalStorage()
    remaining_bal_tag.innerText = REM_BAL;
    total_expense_tag.innerText = TOTAL_EXPENSE;


    // console.log("Remaining Bal :",REM_BAL);
    // console.log("Total expense ", TOTAL_EXPENSE);
    // console.log("EXPENSES " , EXPENSES);
    }  
})

const expense_list_tag = document.getElementById('expense-list')
const renderList = () => {
    expense_list_tag.innerHTML = "";

    EXPENSES.forEach((exp, index) => {
        const li_tag = document.createElement('li');
        const p_tag_1 = document.createElement('p');
        const p_tag_2 = document.createElement('p');
        const del_btn = document.createElement('button');

        p_tag_1.innerText = exp.name;
        p_tag_2.innerText = exp.amount;
        del_btn.innerText = 'Delete';

        del_btn.style = "padding: 5px 15px;";
        li_tag.style = "display: flex; justify-content: space-between; padding: 20px; background-color: white;";

        del_btn.addEventListener('click', () => {
            TOTAL_EXPENSE -= exp.amount;
            REM_BAL += exp.amount;

            EXPENSES.splice(index, 1);

            total_expense_tag.innerText = TOTAL_EXPENSE;
            remaining_bal_tag.innerText = REM_BAL;

            saveToLocalStorage();
            renderList();
        });

        li_tag.appendChild(p_tag_1);
        li_tag.appendChild(p_tag_2);
        li_tag.appendChild(del_btn);

        expense_list_tag.appendChild(li_tag);
    });
};

loadFromLocalStorage()
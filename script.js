setURL('http://gruppe-273.developerakademie.net/smallest_backend_ever');

let users = {};
let tasks = {};

function init() {
    loadContent();
}


function loadContent() {
    let content = document.getElementById('content');
    content.innerHTML = ``;
    content.innerHTML += templateContent();
}

/**
 * This function let show you the taskboard.
 */
function loadBoard(){
    let content = document.getElementById('content');
    content.innerHTML = ``;
    content.innerHTML += templateBoard();
}

/**
 * This function let show you AddTask.
 */

function loadAddTask(){
    let content = document.getElementById('content');
    content.innerHTML = ``;
    content.innerHTML += templateAddTask();
}

function loadImpressum(){
    let content = document.getElementById('content');
    content.innerHTML = ``;
    content.innerHTML += templateImpressum();
}

function loadDatenschutz(){
    let content = document.getElementById('content');
    content.innerHTML = ``;
    content.innerHTML += templateDatenschutz();
}

// Templates//////////////////////////////////////////////

function templateContent(){
    return /*html*/ `
    <div class="animation">
            <div id="animation-1">
                <img class="joinlogo" src="img/logo.png" alt="">
                <h1>Best Kanban-System of the World</h1>
            </div>
            
            <div id="werbetext">
                <p><img src="img/bullet-point.png" style="height: 10px;"> Easy Peasy per DRAG & DROP</p>
                <p><img src="img/bullet-point.png" style="height: 10px;"> Koordination der Task für das ganze Team</p>
                <p><img src="img/bullet-point.png" style="height: 10px;"> Den Task einzelnen Bearbeitungsschritten geben</p>
            </div>
            
             <br>
            <div id="we">
                <h2>This code was made with passion</h2>
                    <a class="ourName" href="https://github.com/oCVamous" target="_blank"><h2>© by Patrick Sterz <img src="img/github-icon.svg" style="height: 30px;" alt=""></h2></a> 
                    <a class="ourName" href="https://github.com/ZZDome" target="_blank"><h2>© by Dominik Waldow <img src="img/github-icon.svg" style="height: 30px;" alt=""></h2></a>
            
            </div>
            
        </div>
        `;
}

function templateBoard(){
    return /*html*/ `
    <div class="boardPage animation">
        <h1 class="boardHeadline">Taskboard</h1>	
        <div class="boardField">
        <div class="boardContainer">
            <h3>ToDo</h3>
            <div id="todoField" class="boardContainerField">
                <div class="taskContainer">
                    <h5>Task</h5>
                    <div class="taskHeadline">
                        <img src="#">
                        <span>Name</span>
                        <span>Time</span>
                    </div>
                    <div class="taskDescription">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="boardContainer">
            <h3>In Progress</h3>
            <div id="inProgressField" class="boardContainerField">

            </div>
        </div>
        <div class="boardContainer">
            <h3>In Testing</h3>
            <div id="inTestingField" class="boardContainerField">

            </div>
        </div>
        <div class="boardContainer">
            <h3>Done</h3>
            <div id="doneField" class="boardContainerField">
                
            </div>
        </div>
        </div>
    </div>
    `;
}

function templateAddTask() {
    return /*html*/ `
    <div class="addTask-main">
        <div id="addTask-left">

            <div class="input">
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">TITLE</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Taskname here">
                </div>
            </div>

            <label for="category">CATERGORY</label>
            <div class="input">
                <div class="form-floating">
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option value="1">Management</option>
                        <option value="2">Software Development</option>
                        <option value="3">UX/UI Desing</option>
                        <option value="3">Human Resources</option>
                    </select>
                    <label for="floatingSelect">Welche Abteilung?</label>
                </div>
            </div>

            <label for="floatingTextarea2">Description</label>
            <div class="input">
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Description" id="floatingTextarea2" style="height: 100px"></textarea>
                </div>
            </div>

                
        </div>

        <div id="addTask-right">

            <div class="input">
                <label for="due date">DUE DATE</label>
                <input type="date" class="form-control" id="formGroupExampleInput" placeholder="Taskname here">
            </div>

            <label for="urgency">URGENCY</label>
                    
                <div class="form-floating">
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option value="1">High</option>
                        <option value="2">Intermediate</option>
                        <option value="3">Low</option>
                    </select>
                    <label for="floatingSelect">Wie hoch ist die Priorität?</label>
                </div>

                
            <div class="assigned">
                <label for="formGroupExampleInput" class="form-label">ASSIGNED</label>

                <div id="btn-box">
                    <img src="img/icon plus.png" style="padding-right:10px">
                        
                    <div>
                        <button type="button" class="btn btn-secondary btn-lg">Cancel</button>
                        <button type="button" class="btn btn-primary btn-lg">Add task</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function templateImpressum() {
    return /*html*/ `
    <div class="impressum-main">
        <h1>Impressum</h1>

        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p>Patrick Sterz<br />Spinnereistraße 1A<br /> 30449 Hannover</p>
        <p>Dominik Waldow<br /> Gleis 9 3/4<br /> 55555 Hogwarts</p>

        <h2>Kontakt</h2>
        <p>Telefon: 0041763668033<br /> E-Mail: jhildbrand@pm.me</p>

        <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p>Quelle: <a class="impressum" href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a>
        </p>
    </div>
    `;
}
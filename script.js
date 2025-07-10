let find_servers_button = document.getElementById("find_servers_button");
let options_menu_button = document.getElementById("options_menu");
let quit_game_button = document.getElementById("quit_game");
let quit_window = document.getElementById("quit_window");
let cancel_quit_window = document.getElementById("cancel_quit");
let menu_options = document.getElementById("menu_options");
let close_game_button = document.getElementById("close_game");
let servers_window = document.getElementById("servers_window");
let close_window_button = document.getElementById("close_window_button");
let console_window = document.getElementById("console_window");
let clear_command_button = document.getElementById("clear_command");
let command_box_input = document.getElementById("command_box");
let run_command_button = document.getElementById("run_command");
let server_list = document.getElementById("server_list");
let not_avaible_window_button = document.getElementById("options_menu_button");
const searchBox = document.getElementById('search_box');
const serverItems = document.querySelectorAll('.server_item');

function open_audio() {
    let open_audio = new Audio("media/audio/open.mp3");
    open_audio.play();
}

function exit_audio() {
    let exit_audio = new Audio("media/audio/exit.mp3");
    exit_audio.play();
}

function exit_quit_menu() {
    exit_audio();
    menu_options.style.visibility='visible';
    quit_window.style.visibility='hidden';
}

function quit_game() {
    menu_options.style.visibility='hidden';
    quit_window.style.visibility='visible';
}

function servers_window_open() {
    open_audio();
    servers_window.style.visibility='visible';
    
}

function close_game() {
    exit_audio();
    window.close();
}

function close_window_x() {
    close_all_windows();
}

function quit_game_events() {
    open_audio();
    quit_game();
}

function  close_all_windows() {
    exit_audio();
    servers_window.style.visibility="hidden";
    console_window.style.visibility="hidden";
    not_avaible_window.style.visibility="hidden";
    exit_quit_menu();
}

function console_window_open() {
    console_window.style.visibility="visible";
}

function clear_command() {
    command_box_input.value='';
}

function run_command() {
    let newServer = document.createElement("a");
    newServer.textContent="Your Server";
    newServer.href="https://play-cs/play/${command_box_input.value}";
    newServer.className="server_item";
    newServer.target="_blank";
}

function not_avaible_open_window() {
    open_audio();
    not_avaible_window.style.visibility="visible";
}

//This is for a window dragger

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' || event.key === 'q') {
        close_all_windows();
    }

    if (event.key === '`') {
        console_window_open();
    }
});

not_avaible_window_button.addEventListener('click', not_avaible_open_window)
run_command_button.addEventListener('click', run_command)
clear_command_button.addEventListener('click', clear_command)
close_window_button.addEventListener('click', close_window_x)
find_servers_button.addEventListener('click', servers_window_open)
quit_game_button.addEventListener('click', quit_game_events);
cancel_quit_window.addEventListener('click', exit_quit_menu);
close_game_button.addEventListener('click', close_game);


//This is a draggable window script
let offsetX = 0, offsetY = 0, initialX = 0, initialY = 0;

const draggableWindows = document.querySelectorAll('.draggable_window');

draggableWindows.forEach(draggableWindow => {
    draggableWindow.addEventListener('mousedown', onMouseDown);
});

function onMouseDown(event) {
    // Prevent drag if clicked on elements like input, button, or .window_options
    if (event.target.closest('input, button, a, .window_options')) return;

    initialX = event.clientX;
    initialY = event.clientY;

    const draggableWindow = event.target;

    // This function needs to be bound to the specific window being dragged
    const onMove = (e) => onMouseMove(e, draggableWindow);

    // Attach mousemove and mouseup events to the document
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', () => onMouseUp(onMove));
}

function onMouseMove(event, draggableWindow) {
    offsetX = initialX - event.clientX;
    offsetY = initialY - event.clientY;

    initialX = event.clientX;
    initialY = event.clientY;

    draggableWindow.style.top = (draggableWindow.offsetTop - offsetY) + 'px';
    draggableWindow.style.left = (draggableWindow.offsetLeft - offsetX) + 'px';
}

function onMouseUp(onMove) {
    // Remove the mousemove listener when the mouse is released
    document.removeEventListener('mousemove', onMove);
}








// Add event listener to search box
searchBox.addEventListener('input', function() {
    const query = searchBox.value.toLowerCase(); // Get the input value and convert to lowercase

    // Loop through all server items
    serverItems.forEach(function(item) {
        const serverName = item.textContent.toLowerCase(); // Get the text content of each server item

        // If the search term is found in the server name, show it, otherwise hide it
        if (serverName.includes(query)) {
            item.style.display = 'flex'; // Show the item
        } else {
            item.style.display = 'none'; // Hide the item
        }
    });
});

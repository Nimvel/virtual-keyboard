const keys = {
    en: [
        ['~ `', 'Backquote'],
        ['! 1', 'Digit1'],
        ['@ 2', 'Digit2'],
        ['# 3', 'Digit3'],
        ['$ 4', 'Digit4'],
        ['% 5', 'Digit5'],
        ['^ 6', 'Digit6'],
        ['& 7', 'Digit7'],
        ['* 8', 'Digit8'],
        ['( 9', 'Digit9'],
        [') 0', 'Digit0'],
        ['_ -', 'Minus'],
        ['+ =', 'Equal'],
        ['Backspace', 'Backspace', '_func'],
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        ['Tab', 'Tab', '_func'],
        ['Q', 'KeyQ'],
        ['W', 'KeyW'],
        ['E', 'KeyE'],
        ['R', 'KeyR'],
        ['T', 'KeyT'],
        ['Y', 'KeyY'],
        ['U', 'KeyU'],
        ['I', 'KeyI'],
        ['O', 'KeyO'],
        ['P', 'KeyP'],
        ['{ [', 'BracketLeft'],
        ['} ]', 'BracketRight'],
        ['| \\', 'Backslash'],
        ['Del', 'Delete'],
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        ['Caps\tLock', 'CapsLock', '_func'],
        ['A', 'KeyA'],
        ['S', 'KeyS'],
        ['D', 'KeyD'],
        ['F', 'KeyF'],
        ['G', 'KeyG'],
        ['H', 'KeyH'],
        ['J', 'KeyJ'],
        ['K', 'KeyK'],
        ['L', 'KeyL'],
        [': ', 'Semicolon'],
        ['" \'', 'Quote'],
        ['Enter', 'Enter', '_func'],
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        ['Shift', 'ShiftLeft', '_func'],
        ['\\', 'Backslash'],
        ['Z', 'KeyZ'],
        ['X', 'KeyX'],
        ['C', 'KeyC'],
        ['V', 'KeyV'],
        ['B', 'KeyB'],
        ['N', 'KeyN'],
        ['M', 'KeyM'],
        ['< ,', 'Comma'],
        ['> .', 'Period'],
        ['? /', 'Slash'],
        ['Up', 'ArrowUp', '_func'],
        ['Shift', 'ShiftRight', '_func'],
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        ['Ctrl', 'ControlLeft', '_func'],
        ['Win', 'MetaLeft', '_func'],
        ['Alt', 'AltLeft', '_func'],
        ['', 'Space'],
        ['Alt', 'AltRight', '_func'],
        ['Ctrl', 'ControlRight', '_func'],
        ['Left', 'ArrowLeft', '_func'],
        ['Down', 'ArrowDown', '_func'],
        ['Right', 'ArrowRight', '_func']
    ],
    ru: [
        ['~ `', 'Backquote'],
        ['! 1', 'Digit1'],
        ['@ 2', 'Digit2'],
        ['# 3', 'Digit3'],
        ['$ 4', 'Digit4'],
        ['% 5', 'Digit5'],
        ['^ 6', 'Digit6'],
        ['& 7', 'Digit7'],
        ['* 8', 'Digit8'],
        ['( 9', 'Digit9'],
        [') 0', 'Digit0'],
        ['_ -', 'Minus'],
        ['+ =', 'Equal'],
        ['Backspace', 'Backspace', '_func'],
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        ['Tab', 'Tab', '_func'],
        ['Й', 'KeyQ'],
        ['Ц', 'KeyW'],
        ['У', 'KeyE'],
        ['К', 'KeyR'],
        ['Е', 'KeyT'],
        ['Н', 'KeyY'],
        ['Г', 'KeyU'],
        ['Ш', 'KeyI'],
        ['Щ', 'KeyO'],
        ['З', 'KeyP'],
        ['Х', 'BracketLeft'],
        ['Ъ', 'BracketRight'],
        ['| \\', 'Backslash'],
        ['Del', 'Delete'],
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        ['Caps\tLock', 'CapsLock', '_func'],
        ['Ф', 'KeyA'],
        ['Ы', 'KeyS'],
        ['В', 'KeyD'],
        ['А', 'KeyF'],
        ['П', 'KeyG'],
        ['Р', 'KeyH'],
        ['О', 'KeyJ'],
        ['Л', 'KeyK'],
        ['Д', 'KeyL'],
        ['Ж', 'Semicolon'],
        ['Э', 'Quote'],
        ['Enter', 'Enter', '_func'],
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        ['Shift', 'ShiftLeft', '_func'],
        ['Я', 'Backslash'],
        ['Ч', 'KeyZ'],
        ['С', 'KeyX'],
        ['М', 'KeyC'],
        ['И', 'KeyV'],
        ['Т', 'KeyB'],
        ['Ь', 'KeyN'],
        ['Б', 'KeyM'],
        ['Ю', 'Comma'],
        ['> .', 'Period'],
        ['? /', 'Slash'],
        ['Up', 'ArrowUp', '_func'],
        ['Shift', 'ShiftRight', '_func'],
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        ['Ctrl', 'ControlLeft', '_func'],
        ['Win', 'MetaLeft', '_func'],
        ['Alt', 'AltLeft', '_func'],
        ['', 'Space'],
        ['Alt', 'AltRight', '_func'],
        ['Ctrl', 'ControlRight', '_func'],
        ['Left', 'ArrowLeft', '_func'],
        ['Down', 'ArrowDown', '_func'],
        ['Right', 'ArrowRight', '_func']
    ]
}

let createKey = ({
    element = "div",
    className = "",
    id = "",
    content = "",
    isInBody = false,
}) => {
    let newDiv = document.createElement(element)
    newDiv.className = className
    newDiv.id = id
    newDiv.innerText = content
    if (isInBody) document.body.appendChild(newDiv)
    return newDiv
}

let setRelation = (parent, child) => {
    parent.appendChild(child)
}

let cursorPosition = 0
let typedText = "|"

let changeContent = (element, newContent = "", option = "renew") => {
    if (option === "erase") {
        if (typedText.length <= 1) return
        typedText =
            typedText.substring(0, cursorPosition - 1) +
            typedText.substring(cursorPosition)
        cursorPosition--
        element.innerText = typedText
    } else if (option === "delete") {
        if (typedText.length <= 1 || cursorPosition === typedText.length - 1) return
        typedText =
            typedText.substring(0, cursorPosition + 1) +
            typedText.substring(cursorPosition + 2)
        element.innerText = typedText
    } else if (option === "add") {
        if (element.id === "display") {
            typedText =
                typedText.substring(0, cursorPosition) +
                newContent +
                typedText.substring(cursorPosition)
            cursorPosition++
            element.innerHTML = typedText
        } else element.innerText += newContent
    } else element.innerText = newContent
}

let lang = localStorage.getItem("lang")
    ? JSON.parse(localStorage.getItem("lang"))
    : "en"
console.log('lang: ', lang)

const langSwitch = createKey({
    element: "p",
    className: "langSwitch",
    isInBody: true,
    content:
        "press Shift + Alt to switch the language\nнажмите Shift + Alt чтобы переключить язык",
})

let isShiftPressed = false
let isCaps = false

const display = createKey({
    element: "div",
    id: "display",
    isInBody: true,
})

const keyboard = createKey({
    element: "div",
    className: "keyboard",
    id: "board",
    isInBody: true,
})

let fillKeyboard = () => {
    keys[lang].map((el) => {
        let key = createKey({
            element: "div",
            className: "key" + (el[2] ? " " + el[2] : ""),
            id: el[1],
        })
        if (el[0].indexOf(" ") >= 0) {
            el[0].split(" ").forEach((el, i) => {
                setRelation(
                    key,
                    createKey({
                        element: "span",
                        className: i === 0 ? "upper-symbol" : "lower-symbol",
                        content: el,
                    })
                )
            })
            key.classList.add("multi-symbol")
        } else changeContent(key, el[0])
        setRelation(keyboard, key)
        key.addEventListener("mousedown", (e) => keyDown(e))
        key.addEventListener("mouseup", (e) => keyUp(e))
        return key
    })
}
fillKeyboard()

let keyDown = (e) => {
    let element = e.code ? document.getElementById(e.code) : e.target
    element.classList.add("_pressed")
    if (element.id === "ShiftLeft" || element.id === "ShiftRight") {
        isShiftPressed = true
        console.log("isShiftPressed: ", isShiftPressed)
        return
    }
    if (element.id === "AltLeft" || element.id === "AltRight") {
        if (isShiftPressed) {
            lang = lang === "en" ? "ru" : "en"

            localStorage.removeItem("lang")
            localStorage.setItem("lang", JSON.stringify(lang))

            keyboard.innerHTML = ""
            fillKeyboard()
        }
        changeContent(display, " ", "add")
        return
    }
    if (element.id === "Space") {
        changeContent(display, " ", "add")
        return
    }
    if (element.id === "Backspace") {
        changeContent(display, "", "erase")
        return
    }
    if (element.id === "Delete") {
        changeContent(display, "", "delete")
        return
    }
    if (element.id.substring(0, 5) === "Arrow") {
        console.log(element.id.substring(5))
        moveCursor(element.id.substring(5))
        return
    }
    if (element.classList.contains("_func")) return
    let text = element.classList.contains("multi-symbol")
        ? isShiftPressed
            ? element.firstChild.innerText
            : element.lastChild.innerText
        : isShiftPressed
            ? isCaps
                ? element.innerText.toLowerCase()
                : element.innerText
            : isCaps
                ? element.innerText
                : element.innerText.toLowerCase()
    changeContent(display, text, "add")
}

let keyUp = (e) => {
    let element = e.code ? document.getElementById(e.code) : e.target
    element.classList.remove("_pressed")
    if (element.id === "ShiftLeft" || element.id === "ShiftRight")
        isShiftPressed = false
    if (element.id === "CapsLock") {
        isCaps = !isCaps
    }
}

let moveCursor = (direction) => {
    switch (direction) {
        case "Left":
            if (cursorPosition === 0) return
            typedText =
                typedText.substring(0, cursorPosition - 1) +
                "|" +
                typedText.substring(cursorPosition - 1, cursorPosition) +
                typedText.substring(cursorPosition + 1)
            cursorPosition--
            display.innerText = typedText
            break
        case "Right":
            if (cursorPosition === typedText.length - 1) return
            typedText =
                typedText.substring(0, cursorPosition) +
                typedText.substring(cursorPosition + 1, cursorPosition + 2) +
                "|" +
                typedText.substring(cursorPosition + 2)
            cursorPosition++
            display.innerText = typedText
            break
        case "Up":
            if (cursorPosition === 0) return
            typedText =
                "|" +
                typedText.substring(0, cursorPosition) +
                typedText.substring(cursorPosition + 1)
            cursorPosition = 0
            display.innerText = typedText
            break
        case "Down":
            if (cursorPosition === typedText.length - 1) return
            typedText =
                typedText.substring(0, cursorPosition) +
                typedText.substring(cursorPosition + 1) +
                "|"
            cursorPosition = typedText.length - 1
            display.innerText = typedText
            break
        default:
            break
    }
}

document.addEventListener("keydown", (e) => keyDown(e))
document.addEventListener("keyup", (e) => keyUp(e))
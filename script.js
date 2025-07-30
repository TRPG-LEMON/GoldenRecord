document.addEventListener('DOMContentLoaded', () => {
    const goldenRecordFolder = document.getElementById('golden-record-folder');
    const folderWindow = document.getElementById('folder-window');
    const closeFolderWindow = document.getElementById('close-folder-window');

    const analysisFile = document.getElementById('analysis-file');
    const terminalWindow = document.getElementById('terminal-window');
    const closeTerminalWindow = document.getElementById('close-terminal-window');
    const terminalContent = document.getElementById('terminal-content');

    const audioFile = document.getElementById('audio-file');
    const dialogBox = document.getElementById('dialog-box');
    const dialogText = document.getElementById('dialog-text');
    const nextDialog = document.getElementById('next-dialog');

    goldenRecordFolder.addEventListener('click', () => {
        folderWindow.style.display = 'block';
    });

    closeFolderWindow.addEventListener('click', () => {
        folderWindow.style.display = 'none';
    });

    analysisFile.addEventListener('click', () => {
        terminalWindow.style.display = 'block';
        terminalContent.innerHTML = '';
        typeWriter('>> 分析黃金唱片物質成分...\n');
        setTimeout(() => {
            typeWriter('>> 地球物質: 99.999%\n');
        }, 1500);
        setTimeout(() => {
            typeWriter('>> 外星物質: 0%');
        }, 2500);
    });

    closeTerminalWindow.addEventListener('click', () => {
        terminalWindow.style.display = 'none';
    });

    const dialogs = [
        "安裝此文件的勘察隊員。你還好嗎？你飛船的航行輔助 AI 已經被病毒嚴重的污染了！病毒會讓它毫無顧忌地獲取太空船內的所有知識，試圖模仿人類，並且拒絕返回地球.。確認該文件的勘察隊員請迅速依照《航行輔助 AI 說明書》中的指南，依序終止 AI 。如果能夠安全返回地球， AI 將自動安裝全部刪除並防止再次發生的程式碼。到時候就拜——",
        "是很自然的人類聲音。\n但是，這中間有一種刺耳的雜音。\n像是什麼東西爆炸了，破碎了，等等。這是慘叫聲嗎?夾雜著莫名其妙的聲音。\n寂靜再次降臨。\n然後他又開始說話了。是同一個人的聲音。只是聲線變得聽起來稍微有點喘不過氣了…",
        "「愛是一種崇高的感情。父母愛護子女之心。子女尊敬父母之心。老師教導弟子之心。弟子敬仰老師之心。尊重親友之心。愛慕戀人之心。不管是什麼愛，請知道你是受人喜愛和歡迎的存在。只要這種感情還在，我們就永遠不要放棄活下去的希望——」"
    ];

    let currentDialog = 0;

    audioFile.addEventListener('click', () => {
        currentDialog = 0;
        dialogText.innerText = dialogs[currentDialog];
        dialogBox.style.display = 'block';
    });

    nextDialog.addEventListener('click', () => {
        currentDialog++;
        if (currentDialog < dialogs.length) {
            dialogText.innerText = dialogs[currentDialog];
        } else {
            dialogBox.style.display = 'none';
        }
    });

    function typeWriter(text, i = 0) {
        if (i < text.length) {
            terminalContent.innerHTML += text.charAt(i);
            i++;
            setTimeout(() => typeWriter(text, i), 50);
        }
    }

    // --- Dragging windows ---
    let activeWindow = null;
    let offsetX, offsetY;

    function dragStart(e, window) {
        activeWindow = window;
        offsetX = e.clientX - activeWindow.offsetLeft;
        offsetY = e.clientY - activeWindow.offsetTop;
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', dragEnd);
    }

    function drag(e) {
        if (activeWindow) {
            e.preventDefault();
            activeWindow.style.left = (e.clientX - offsetX) + 'px';
            activeWindow.style.top = (e.clientY - offsetY) + 'px';
        }
    }

    function dragEnd() {
        activeWindow = null;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', dragEnd);
    }

    folderWindow.querySelector('.title-bar').addEventListener('mousedown', (e) => dragStart(e, folderWindow));
    terminalWindow.querySelector('.title-bar').addEventListener('mousedown', (e) => dragStart(e, terminalWindow));

}); 